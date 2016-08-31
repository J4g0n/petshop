package models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Pet {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	public String id;

    public String name;

	public int age;

	public String gender;

	public String race;
}
