class Charmander {}
class Squirtle {}
class Bulbasaur {}
class Pikachu {}

const createPokemon = options => {
  // Do something with options
  switch (options.type) {
    case "FIRE":
      return new Charmander();
    case "WATER":
      return new Squirtle();
    case "GRASS":
      return new Bulbasaur();
    default:
      return new Pikachu();
  }
};

