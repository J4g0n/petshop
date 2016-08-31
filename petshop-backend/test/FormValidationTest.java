import models.Pet;
import org.apache.xpath.operations.Bool;
import utils.FormValidation;

import org.junit.*;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;


/**
 *
 * Simple (JUnit) tests that can call all parts of a play app.
 * If you are interested in mocking a whole application, see the wiki for more details.
 *
 */
public class FormValidationTest {
    private FormValidation formValidation = FormValidation.getInstance();

    private Pet generateValidPet() {
        Pet pet = new Pet();
        pet.name = "zebulon";
        pet.age = 10;
        pet.gender = "MALE";
        pet.race = "Dog";

        return pet;
    }

    private Pet generateInvalidPetWithName(String name) {
        Pet pet = generateValidPet();
        pet.name = name;
        return pet;
    }

    @Test
    public void checkBasePetIsValid() {
        Pet pet = generateValidPet();
        Boolean b = formValidation.isValidPet(pet);

        assertTrue(b);
    }

    @Test
    public void checkWhenNameIsLongEnough() {
        Pet pet = generateInvalidPetWithName("");
        Boolean b = formValidation.isValidPet(pet);

        assertFalse(b);
    }

    @Test
    public void checkWhenNameIsNotNull() {
        Pet pet = generateInvalidPetWithName(null);
        Boolean b = formValidation.isValidPet(pet);

        assertFalse(b);
    }

    @Test
    public void checkWhenNameIsNotTooLong() {
        Pet pet = generateInvalidPetWithName("azertyuiopqsdfghjklmwxcvbnAZER");
        Boolean b = formValidation.isValidPet(pet);

        assertFalse(b);
    }
}
