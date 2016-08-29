package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import models.Pet;
import play.Logger;
import play.data.FormFactory;
import play.db.jpa.JPA;
import play.db.jpa.Transactional;
import play.mvc.Controller;
import play.mvc.Result;

import javax.inject.Inject;
import javax.persistence.LockModeType;
import java.util.List;

import static play.libs.Json.toJson;

public class PetController extends Controller {
    @Inject
    FormFactory formFactory;

    @Transactional
    public Result addPetWithForm() {
        Pet pet = formFactory.form(Pet.class).bindFromRequest().get();
        JPA.em().persist(pet);
        return redirect(routes.Application.index());
    }

    @Transactional
    public Result addPet() {
        JsonNode json = request().body().asJson();

        if(json == null) {
            return badRequest("Expecting Json data");
        } else {
            String name = json.findPath("name").textValue();

            if(name == null) {
                return badRequest("Missing parameter [name]");
            } else {
                Pet pet = new Pet();
                pet.name = name;
                JPA.em().persist(pet);
            }
        }

        return redirect(routes.Application.index());
    }

    @Transactional
    public Result updatePet(String id) {
        JsonNode json = request().body().asJson();

        if(json == null) {
            return badRequest("Expecting Json data");
        } else {
            String name = json.findPath("name").textValue();

            if(name == null) {
                return badRequest("Missing parameter [name]");
            } else {
                Pet pet = JPA.em().find(Pet.class, id);

                if (pet != null) {
                    Logger.debug("\nPet id: " + pet.id + "\nPet name: " + pet.name);
                    pet.name = name;
                    Logger.debug("\nPet id: " + pet.id + "\nPet name: " + pet.name);
                    JPA.em().merge(pet);
                } else {
                    return badRequest("No object with id: " + id);
                }
            }
        }

        return redirect(routes.Application.index());
    }

    @Transactional
    public Result deletePet(String id) {
        Pet pet = new Pet();
        pet.id = id;
        // We need to merge entity with the one that is inside db,
        // see differences between attached and detached entities
        // we can also use the same entity manager for every CRUD actions
        // see http://stackoverflow.com/questions/20328740/can-not-refresh-not-managed-object
        JPA.em().remove(JPA.em().merge(pet));
        return redirect(routes.Application.index());
    }

    @Transactional(readOnly = true)
    public Result getPets() {
        List<Pet> pets = (List<Pet>) JPA.em().createQuery("select p from Pet p").getResultList();
        return ok(toJson(pets));
    }
}
