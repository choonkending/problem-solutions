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


const animal = {
  animalType: 'animal',

  describe() {
    return `An ${this.animalType} with ${this.furColor} fur,
    ${this.legs} legs, and a ${this.tail} tail.`;
  },
};

const mouseFactory = function mouseFactory() {
  let secret = 'secret agent';

  return Object.assign(Object.create(animal), {
    animalType: 'mouse',
    furColor: 'brown',
    legs: 4,
    tail: 'long skinny',
    profession() {
      return secret;
    }
  });
};
