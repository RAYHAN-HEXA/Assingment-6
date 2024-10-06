let url = "https://openapi.programming-hero.com/api/peddy/";


// this is the function for all category pet button
async function petCategory(){
    let res =await fetch(`${url}categories`);
    let data =await res.json();
    pets(data.categories);


    // Call the active button function only after the buttons have been added
    activeBtn();
}
function pets(pets){
    let category_btn_section = document.getElementById("category-btn-section"); 
    pets.forEach(pet => {
        let category_btn = document.createElement("button");
        category_btn.classList = "btn btn-outline text-xl px-12 ";
        category_btn.setAttribute("id",pet.category);
        category_btn.innerHTML = `<img class="object-cover h-full py-2" src="${pet.category_icon}" alt="">${pet.category}`
        category_btn_section.append(category_btn);
    });
}
petCategory();




