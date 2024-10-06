// let url = "https://openapi.programming-hero.com/api/peddy/";

async function allData(){
  let res =await fetch(`${url}pets`);
  let data =await res.json();
  reactData(data.pets);
}

let reactData = (allPets)=>{
  let like_div = document.getElementById("like-div");
  
  allPets.forEach(pet => {
      // console.log(document.getElementById(`${pet.petId}-like`));
      let like = document.getElementById(`${pet.petId}-like`);
      like.addEventListener("click",()=>{
          let link = like.parentElement.parentElement.parentElement.children[0].getAttribute("src");
          likeImg(link,like_div);
      });
      model(pet);


      adoptPet(pet);
  });
}
let likeImg = (link,like_div)=>{
  let div = document.createElement("div");
  div.classList = "h-20"
  div.innerHTML = `
   <img class="rounded-lg overflow-hidden" src="${link}" alt="">
  `
  like_div.append(div);
}

allData();