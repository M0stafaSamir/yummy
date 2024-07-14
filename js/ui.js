export class Ui {
  constructor() {}

  displaySearch(dishesList, rowId) {
    let content = ``;
    for (let i = 0; i < dishesList.meals.length; i++) {
      content += `
          <div class="col-md-4 col-lg-3">
            <div data-id="${dishesList.meals[i].idMeal}" class="item">
              <div class="dish-img position-relative overflow-hidden">
                <img class="w-100 rounded-1" src="${dishesList.meals[i].strMealThumb}" alt="dish" />
                <div
                  class="hov-layer position-absolute w-100 h-100 d-flex align-items-center rounded-1">
                  <span class="ps-2 fs-2 text-capitalize fw-medium">${dishesList.meals[i].strMeal}</span>
                </div>
              </div>
            </div>
          </div>
    `;
    }
    document.getElementById(`${rowId}`).innerHTML = content;
  }

  dispalyDetails(data) {
    const mealImg = document.getElementById("mealImg");
    const mealName = document.getElementById("mealName");
    const mealInstructions = document.getElementById("mealInstructions");
    const mealArea = document.getElementById("mealArea");
    const mealcategory = document.getElementById("mealcategory");
    const mealRecipes = document.getElementById("mealRecipes");
    const mealTags = document.getElementById("mealTags");
    const mealSource = document.getElementById("mealSource");
    const mealYoutube = document.getElementById("mealYoutube");

    mealImg.src = data.meals[0].strMealThumb;
    mealName.innerHTML = data.meals[0].strMeal;
    mealInstructions.innerHTML = data.meals[0].strInstructions;
    mealArea.innerHTML = " Area : " + data.meals[0].strArea;
    mealcategory.innerHTML = " Category : " + data.meals[0].strCategory;

    mealSource.href = data.meals[0].strSource;
    mealYoutube.href = data.meals[0].strYoutube;

    mealTags.innerHTML = data.meals[0].strTags;

    var content = ``;
    for (let index = 1; index <= 20; index++) {
      if (
        data.meals[0][`strMeasure${index}`] !== " " &&
        data.meals[0][`strMeasure${index}`] !== "" &&
        data.meals[0][`strIngredient${index}`] !== ""
      ) {
        content += `
    <span  class="text-text-capitalize badge bg-info text-black emptyCheck">
      ${data.meals[0][`strMeasure${index}`]}
      ${data.meals[0][`strIngredient${index}`]}
    </span>
  `;
      }
    }
    mealRecipes.innerHTML = content;
  }

  displayCategories(data) {
    let content = ``;
    for (let i = 0; i < data.categories.length; i++) {
      content += `
          <div class="col-md-4 col-lg-3">
            <div data-id="${data.categories[i].strCategory}" class="item">
              <div class="dish-img position-relative overflow-hidden">
                <img class="w-100 rounded-1" src="${data.categories[i].strCategoryThumb}" alt="dish" />
                <div
                  class="hov-layer flex-column position-absolute w-100 h-100 d-flex align-items-center rounded-1">
                  <h3>${data.categories[i].strCategory}</h3>
                  <span class="ps-2 fs-6 text-capitalize fw-medium">${data.categories[i].strCategoryDescription}</span>
                </div>
              </div>
            </div>
          </div>
    `;
    }
    document.getElementById("categoriesRow").innerHTML = content;
  }

  displayAreas(data) {
    let content = ``;
    for (let i = 0; i < data.meals.length; i++) {
      content += `
           <div class="col-md-4 col-lg-3">
            <div data-id="${data.meals[i].strArea}" class="item">
              <h1 class="text-center text-white">
                <i class="fa-solid fa-earth-americas fs-100px"></i>
              </h1>
              <p class="text-center text-white fs-3 text-capitalize">${data.meals[i].strArea}</p>
            </div>
          </div>
    `;
    }
    document.getElementById("areaRow").innerHTML = content;
  }
  displayIngredients(data) {
    let content = ``;
    for (let i = 0; i < 20; i++) {
      let description = data.meals[i].strDescription;
      if (description) {
        let words = description.split(" ");
        let shortDescription = words.slice(0, 11).join(" ");

        content += `
        <div class="col-md-4 col-lg-3">
          <div data-id="${data.meals[i].strIngredient}" class="item">
            <h1 class="text-center text-white">
              <i class="fa-solid fa-drumstick-bite fs-70px"></i>
            </h1>
            <h3 class="text-center text-white">${data.meals[i].strIngredient}</h3>
            <p class="text-center text-white fs-6 text-capitalize">
              ${shortDescription}
            </p>
          </div>
        </div>
      `;
      } else {
        console.log(`Description is null`);
      }
    }
    document.getElementById("ingredientsRow").innerHTML = content;
  }
}
