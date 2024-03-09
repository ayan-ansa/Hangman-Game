const hangmanParts = document.querySelectorAll(".parts");
const btnContainer = document.querySelector(".buttons");
const wordContainer = document.querySelector(".letter-container");
const msg = document.querySelector(".msg");
const btn = document.querySelector(".btn");
let animalNames = [
  "Aardvark",
  "Albatross",
  "Alligator",
  "Alpaca",
  "Ant",
  "Anteater",
  "Antelope",
  "Ape",
  "Armadillo",
  "Donkey",
  "Baboon",
  "Badger",
  "Barracuda",
  "Bat",
  "Bear",
  "Beaver",
  "Bee",
  "Bison",
  "Boar",
  "Buffalo",
  "Butterfly",
  "Camel",
  "Capybara",
  "Caribou",
  "Cassowary",
  "Cat",
  "Caterpillar",
  "Cattle",
  "Chamois",
  "Cheetah",
  "Chicken",
  "Chimpanzee",
  "Chinchilla",
  "Chough",
  "Clam",
  "Cobra",
  "Cockroach",
  "Cod",
  "Cormorant",
  "Coyote",
  "Crab",
  "Crane",
  "Crocodile",
  "Crow",
  "Curlew",
  "Deer",
  "Dinosaur",
  "Dog",
  "Dogfish",
  "Dolphin",
  "Dotterel",
  "Dove",
  "Dragonfly",
  "Duck",
  "Dugong",
  "Dunlin",
  "Eagle",
  "Echidna",
  "Eel",
  "Eland",
  "Elephant",
  "Elk",
  "Emu",
  "Falcon",
  "Ferret",
  "Finch",
  "Fish",
  "Flamingo",
  "Fly",
  "Fox",
  "Frog",
  "Gaur",
  "Gazelle",
  "Gerbil",
  "Giraffe",
  "Gnat",
  "Gnu",
  "Goat",
  "Goldfinch",
  "Goldfish",
  "Goose",
  "Gorilla",
  "Goshawk",
  "Grasshopper",
  "Grouse",
  "Guanaco",
  "Gull",
  "Hamster",
  "Hare",
  "Hawk",
  "Hedgehog",
  "Heron",
  "Herring",
  "Hippopotamus",
  "Hornet",
  "Horse",
  "Human",
  "Hummingbird",
  "Hyena",
  "Ibex",
  "Ibis",
  "Jackal",
  "Jaguar",
  "Jay",
  "Jellyfish",
  "Kangaroo",
  "Kingfisher",
  "Koala",
  "Kookabura",
  "Kouprey",
  "Kudu",
  "Lapwing",
  "Lark",
  "Lemur",
  "Leopard",
  "Lion",
  "Llama",
  "Lobster",
  "Locust",
  "Loris",
  "Louse",
  "Lyrebird",
  "Magpie",
  "Mallard",
  "Manatee",
  "Mandrill",
  "Mantis",
  "Marten",
  "Meerkat",
  "Mink",
  "Mole",
  "Mongoose",
  "Monkey",
  "Moose",
  "Mosquito",
  "Mouse",
  "Mule",
  "Narwhal",
  "Newt",
  "Nightingale",
  "Octopus",
  "Okapi",
  "Opossum",
  "Oryx",
  "Ostrich",
  "Otter",
  "Owl",
  "Oyster",
  "Panther",
  "Parrot",
  "Partridge",
  "Peafowl",
  "Pelican",
  "Penguin",
  "Pheasant",
  "Pig",
  "Pigeon",
  "Pony",
  "Porcupine",
  "Porpoise",
  "Quail",
  "Quelea",
  "Quetzal",
  "Rabbit",
  "Raccoon",
  "Rail",
  "Ram",
  "Rat",
  "Raven",
  "Red deer",
  "Red panda",
  "Reindeer",
  "Rhinoceros",
  "Rook",
  "Salamander",
  "Salmon",
  "Sand Dollar",
  "Sandpiper",
  "Sardine",
  "Scorpion",
  "Seahorse",
  "Seal",
  "Shark",
  "Sheep",
  "Shrew",
  "Skunk",
  "Snail",
  "Snake",
  "Sparrow",
  "Spider",
  "Spoonbill",
  "Squid",
  "Squirrel",
  "Starling",
  "Stingray",
  "Stinkbug",
  "Stork",
  "Swallow",
  "Swan",
  "Tapir",
  "Tarsier",
  "Termite",
  "Tiger",
  "Toad",
  "Trout",
  "Turkey",
  "Turtle",
  "Viper",
  "Vulture",
  "Wallaby",
  "Walrus",
  "Wasp",
  "Weasel",
  "Whale",
  "Wildcat",
  "Wolf",
  "Wolverine",
  "Wombat",
  "Woodcock",
  "Woodpecker",
  "Worm",
  "Wren",
  "Yak",
  "Zebra",
];
let animalName;
let count = 0;
let totalChances = 0;
let stat = 0;
let play = true;
let checkWord = (e) => {
  let elements = document.querySelectorAll("span");
  let found = false;
  if (play) {
    for (let i = 0; i < animalName.length; i++) {
      if (e.target.textContent === animalName[i]) {
        elements[i].innerText = animalName[i];
        e.target.style.background = "green";
        totalChances++;
        stat++;
        found = true;
      }
    }
    if (!found) {
      totalChances++;
      hangmanParts[count].classList.add("show");
      e.target.style.background = "red";
      count++;
    }
    if (totalChances === animalName.length + 3 && stat != animalName.length) {
      play = false;
      msg.innerText = `Game Over`;
      btn.classList.add("showBtn");
    } else if (stat === animalName.length) {
      msg.innerText = `You won the game`;
      play = false;
      btn.classList.add("showBtn");
    }
  }
};
btn.addEventListener("click", () => {
  location.reload();
});
let getAnimalName = () => {
  let num = Math.floor(Math.random() * animalNames.length);
  animalName = animalNames[num].toUpperCase();
  console.log(animalName);
  wordLength();
};
let wordLength = () => {
  let ul = document.createElement("ul");
  for (let i = 0; i < animalName.length; i++) {
    let li = document.createElement("li");
    let span = document.createElement("span");
    li.appendChild(span);
    ul.appendChild(li);
    wordContainer.appendChild(ul);
  }
};

function getButtons() {
  let buttonsArray = Array(26).fill(null);
  let start = 65;
  buttonsArray = buttonsArray.map((value) => {
    return String.fromCharCode(start++);
  });
  buttonsArray.forEach((el) => {
    let button = document.createElement("button");
    button.textContent = el;
    btnContainer.appendChild(button);
  });
  let buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", checkWord);
  });
}
getButtons();
getAnimalName();
