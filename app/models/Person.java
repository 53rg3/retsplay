package models;

import com.github.javafaker.Faker;

import java.util.Arrays;
import java.util.List;

public class Person {

    private final Faker faker = new Faker();

    private final String name;
    private final int age;
    private final List<String> pokemon;

    public Person() {
        this.name = this.faker.name().firstName();
        this.age = this.faker.number().numberBetween(1, 99);
        this.pokemon = Arrays.asList(
                this.faker.pokemon().name(),
                this.faker.pokemon().name(),
                this.faker.pokemon().name());
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public List<String> getPokemon() {
        return pokemon;
    }
}
