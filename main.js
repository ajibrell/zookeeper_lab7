function Elephant(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = 'A beautiful, majestic elephant';
    this.image = 'elephant.jpeg';
  }

  function Cheetah(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = 'An elegant, fast cheetah';
    this.image = 'TheCheethcat.jpeg';
  }

  function PolarBear(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = 'A big, white and fluffy polar bear';
    this.image = 'Polar_Bear_-_Alaska_(cropped).jpeg';
  }

const animals = [new Elephant(),new Cheetah(), PolarBear()];
let name = ["Annie","Bonnnie","Stone","Luna","Peanut"];
let age = [20,13,30,25,16];

function generateRandomIndex(maxIndex) {
   return  Math.floor(Math.random() * 10);
}


function generateRandomName() {
  var randomIdx = getRandomIndex(names.length);
  return names[randomIdx];
}


function generateRandomAge() {
  return getRandomIndex(5);
}


function generateRandomAnimal() {
  var randomIdx = getRandomIndex(animals.length);
  var randomAnimal = animals[randomIdx];

  if (randomAnimal instanceof Cat) 
  {
    return new Cat(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Dog) 
  {
    return new Dog(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Bird) 
  {
    return new Bird(generateRandomName(), generateRandomAge());
  }
}






function onLoad() {

  
  var animal = generateRandomAnimal();
  console.log(animal)

  
  document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + "years old";
  var imageTag = document.getElementById("animal-img");
  imageTag.setAttribute("src", animal.image);
  imageTag.setAttribute("alt", animal.image_alt);

}