// let url = "https://openapi.programming-hero.com/api/peddy/"

async function allPetsList(){
  let res = await fetch(`${url}pets`);
  let data = await res.json();
  // console.log(data.pets);
  allPets(data.pets);
}

let allPets = (allPets)=>{
  let card_container = document.getElementById("card-container");
  allPets.forEach(pet => {
      cardFunction(pet,card_container);
  });
}
allPetsList();