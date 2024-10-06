let cardFunction = (pet,card_container)=>{
  let card = document.createElement("div");
  card.classList = "card-pet card bg-base-100 p-3 border-2";
  card.setAttribute("id",pet.pet_name);
  card.innerHTML = `
      <img class="rounded-xl object-fill" src="${pet.image}" alt="Shoes" />
      <div class="mt-4">
          <h2 class="text-xl font-bold mb-2">${pet.pet_name}</h2>
          <p class="flex gap-1 font-normal text-[#131313B3] mb-1"><img width="24" height="24" src="https://img.icons8.com/ios-glyphs/24/bulldog.png" alt="bulldog"/>Breed: ${pet.breed?pet.breed:"unknown breed"}</p>
          <p class="flex gap-1 font-normal text-[#131313B3] mb-1"><img width="20" height="20" src="https://img.icons8.com/ios/20/birth-date.png" alt="birth-date"/>Birth: ${pet.date_of_birth?pet.date_of_birth.substring(0, 4):"unknown"}</p>
          <p class="flex gap-1 font-normal text-[#131313B3] mb-1"><img width="20" height="20" src="https://img.icons8.com/cotton/20/gender.png" alt="gender"/>Gender: ${pet.gender?pet.gender:"unknown gender"}</p>
          <p class="flex gap-1 font-normal text-[#131313B3] mb-1"><img width="24" height="24" src="https://img.icons8.com/ios-glyphs/24/average-2.png" alt="average-2"/>Price : ${pet.price?pet.price:"unknown price"}$</p>

          <div class="grid grid-cols-3 gap-2 pt-3 border-t-2">
              <button id="${pet.petId}-like" class="btn px-0"><img width="25" height="25" src="https://img.icons8.com/material-outlined/25/facebook-like.png" alt="facebook-like"/></button>
              <button id="${pet.petId}-adopt" class="btn px-0 text-[#0E7A81]">Adopt</button>
              <button id="${pet.petId}-details" class="btn px-0 text-[#0E7A81]">Details</button>
          </div>
      </div>
  `
  card_container.append(card);
}



function model(pet){
  let details = document.getElementById(`${pet.petId}-details`);
  let model_container = document.getElementById("model-container");
  let model_popup = document.getElementById("model-popup");

  if(details){
      details.addEventListener("click",()=>{
          model_container.style.display = "flex";
          model_popup.innerHTML=`
              <img class="rounded-xl w-full" src="${pet.image}" alt="Shoes" />
              <div class="mt-4">
                  <h2 class="text-xl font-bold mb-2">${pet.pet_name}</h2>
                  <p class="flex gap-1 font-normal text-[#131313B3] mb-1"><img width="24" height="24" src="https://img.icons8.com/ios-glyphs/24/bulldog.png" alt="bulldog"/>Breed: ${pet.breed?pet.breed:"unknown breed"}</p>
                  <p class="flex gap-1 font-normal text-[#131313B3] mb-1"><img width="20" height="20" src="https://img.icons8.com/ios/20/birth-date.png" alt="birth-date"/>Birth: ${pet.date_of_birth?pet.date_of_birth:"unknown"}</p>
                  <p class="flex gap-1 font-normal text-[#131313B3] mb-1"><img width="20" height="20" src="https://img.icons8.com/cotton/20/gender.png" alt="gender"/>Gender: ${pet.gender?pet.gender:"unknown gender"}</p>
                  <p class="flex gap-1 font-normal text-[#131313B3] mb-1"><img width="24" height="24" src="https://img.icons8.com/ios-glyphs/24/average-2.png" alt="average-2"/>Price : ${pet.price?pet.price:"unknown price"}$</p>
                  <p class="flex gap-1 font-normal text-[#131313B3] mb-1"><img width="25" height="25" src="https://img.icons8.com/external-outline-wichaiwi/25/external-vaccination-reopening-country-outline-wichaiwi.png" alt="external-vaccination-reopening-country-outline-wichaiwi"/>vaccinated_status : ${pet.vaccinated_status}</p>

                  <br><br>
                  <hr>
                  <br>
                  
                  <h3 class="font-bold">Detail Information</h3>
                  <p class="flex gap-1 font-normal text-[#131313B3] mb-1">${pet.pet_details}</p>

                  <br><br>

                  <div class="grid grid-cols-3 gap-2 pt-3 border-t-2">
                      <button id="${pet.petId}-cancel" class="btn px-0 text-[#0E7A81]">Cancel</button>
                  </div>
              </div>
          `
          let close_modal = document.getElementById(`${pet.petId}-cancel`);
          close_modal.onclick = function() {
              model_container.style.display = "none";
          }
      });
      window.onclick = function(event) {
          if (event.target == model_container) {
              model_container.style.display = "none";
          }
      }
  }
}



function adoptPet(pet){
  let adopt_model = document.getElementById("adopt-model");
  let adopt = document.getElementById(`${pet.petId}-adopt`);

  if(adopt){
      adopt.addEventListener("click",()=>{
          let count = document.getElementById("count");
          let countTime = 2;
          adopt_model.style.display = "flex";
          count.innerText = "3";
          let stop = setInterval(()=>{
              count.innerText = countTime;
              countTime--;
              if(countTime<0){
                  adopt_model.style.display = "none";
                  adopt.innerText = "adopted";
                  adopt.disabled = "true";
                  clearInterval(stop);
              }
          },1000)
      });        
  }

}