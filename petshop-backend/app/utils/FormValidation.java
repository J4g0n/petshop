package utils;

import models.Pet;

/**
 * Created by sandman on 8/31/16.
 */
public class FormValidation {
    private static FormValidation ourInstance = new FormValidation();

    public static FormValidation getInstance() {
        return ourInstance;
    }

    private FormValidation() {
    }

    public boolean isValidName(String name) {
        return name != null && name.length() > 2 && name.length() < 30;
    }

    public boolean isValidAge(int age) {
        return age > 0 && age < 200;
    }

    public boolean isValidGender(String gender) {
        return gender != null && (gender.equals("MALE") || gender.equals("FEMALE") || gender.equals("OTHER"));
    }

    public boolean isValidRace(String race) {
        return race != null && race.length() > 2 && race.length() < 30;
    }

    public boolean isValidPet(Pet pet) {
        return isValidName(pet.name) && isValidAge(pet.age) && isValidGender(pet.gender) && isValidRace(pet.race);
    }
}
