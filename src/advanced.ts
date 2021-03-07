type Engineer = {
  name: string;
  role: string;
}

type Blogger = {
  name: string;
  follower: number;
}

type EngineerBlogger = Engineer & Blogger;

const quill: EngineerBlogger = {
  name: "Hamabe",
  role: "frontend",
  follower: 2000000
}

type NumberBoolean = number | boolean;
type StirngNumber = string | number;
type Mix = NumberBoolean & StirngNumber;

function toUpperCase(x: string | number) {
  if (typeof x === "string") {
    return x.toUpperCase();
  }
  return "";
}

type NomadWorker = Engineer | Blogger;

function describeProfile(nomadWorker: NomadWorker) {
  console.log(nomadWorker.name);
  if ("role" in nomadWorker) {
    console.log(nomadWorker.role);
    
  }
}

class Dog {
  kind: "dog" = "dog";
  speak() {
    console.log("Bow-wow");
  }
}
class Bird {
  kind: "bird" = "bird";
  speak() {
    console.log("Tweet-tweet");
  }
  fly() {
    console.log("flutter");  
  } 
}

type Pet = Dog | Bird;
function havePet(pet: Pet) {
  pet.speak();
  switch (pet.kind) {
    case "bird":
      pet.fly();
  }
  if (pet instanceof Bird) {
    pet.fly();
  }
}
havePet(new Bird());

const input = document.getElementById("input") as HTMLInputElement;
input.value = "untitti";