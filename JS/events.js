// active pet button
function activeBtn(){
  let category_btn_section = document.getElementById("category-btn-section").childNodes; 
  let card_container = document.getElementById("card-container");



  category_btn_section.forEach(btn=>{
      btn.addEventListener("click",()=>{
          category_btn_section.forEach(b=>{
              b.classList.remove("active");
          });
          btn.classList.add("active");

          const loadDataButton = document.getElementById('loadDataButton');
          const loader = document.getElementById('loader');
          let card_section = document.getElementById("card-section");
          let temporary_section = document.getElementById("temporary-section");
          if(temporary_section.classList.contains("hidden")){
              temporary_section.classList.remove("hidden");
          }
          card_section.classList.add("hidden");
          loader.style.display = 'flex';

          setTimeout(function() {
              loader.style.display = 'none';
              card_section.classList.remove("hidden");
              temporary_section.classList.add("hidden");
          }, 2000); 


          async function allPetsList(){
              let res = await fetch(`${url}pets`);
              let data = await res.json();
              allPets(data.pets);
          }
          
          let allPets = (allPets)=>{
              let card_container = document.getElementById("card-container");

              if(card_container.classList.contains("grid") === false){
                  card_container.classList.add("grid");
              }

              card_container.innerHTML="";
              let arr = [];
              allPets.forEach(pet => {
                  if(pet.category === btn.getAttribute("id")){
                      arr.push(pet.petId);
                      cardFunction(pet,card_container);
                  }
              });


              let like_div = document.getElementById("like-div");
              allPets.forEach(pet => {
                  let like = document.getElementById(`${pet.petId}-like`);
                  if(like){
                      like.addEventListener("click",()=>{
                          let link = like.parentElement.parentElement.parentElement.children[0].getAttribute("src");
                          likeImg(link,like_div);
                      });
                  }
              });
              let likeImg = (link,like_div)=>{
                  let div = document.createElement("div");
                  div.innerHTML = `
                   <img class="rounded-lg overflow-hidden" src="${link}" alt="">
                  `
                  like_div.append(div);
              }
              allPets.forEach(pet => {
                  model(pet);
                  adoptPet(pet);
              });

              
              if(!arr.length){
                  card_container.classList.remove("grid");
                  
                  let card = document.createElement("div");
                  card.classList = "card-pet card bg-base-100 p-3 border-2";
                  card.innerHTML = `
                      <div class=" text-center card bg-base-100 p-8 border-2">
                          <div class="flex justify-center">
                              <img class="rounded-xl  w-20 py-8" src="images/error.webp" alt="Shoes" />
                          </div>
                          <h2 class="font-black text-4xl mb-4">No Information available</h2>
                          <p>Currently, there is no information available in the Bird category. We are working to update our listings and provide you with the latest details. Please check back soon for new additions and updates!</p>

                      </div>
                  `
                  card_container.append(card);
              }
              let sort = document.getElementById("sort-by-price");
              sort.addEventListener("click",()=>{
                  let sorting = []
                  allPets.forEach(pet => {
                      sorting.push(pet.price);
                  });
                  sorting = [...new Set(sorting)];
                  sorting.sort((a, b) => b-a);;
                  card_container.innerHTML="";
                  for(let sort of sorting ){
                      allPets.forEach(pet => {
                          if(sort === pet.price && pet.category === btn.getAttribute("id")){
                              cardFunction(pet,card_container);
                          }
                          model(pet);
                          adoptPet(pet);
                      })
                  }
              })
              
          }
          allPetsList();



      })
  })

}