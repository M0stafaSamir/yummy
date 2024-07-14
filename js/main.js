import { Area } from "./areas.js";
import { Categories } from "./categories.js";
import { Details } from "./details.js";
import { Ingredients } from "./ingredients.js";
import { Search } from "./search.js";
import { Validation } from "./validation.js";

const search = new Search();
const validation = new Validation();
const details = new Details();
const categories = new Categories();
const area = new Area();
const ingredients = new Ingredients();

//sidebar animation
$("#navBtn").on("click", function () {
  const sidebar = $("#sidebar");
  const navLinks = $("#navLinks");
  const navLinksWidth = $("#navLinks").outerWidth();
  const listLi = $("#sidebar ul li");
  if ($(navLinks).hasClass("expanded") == false) {
    $("#navBtn").html(`<i class="fa-solid fa-x text-black fs-3"></i>`);
    sidebar.animate({ left: "0px" }, 500);
    for (let i = 0; i < listLi.length; i++) {
      $(listLi[i])
        .delay(i * 100)
        .animate({ top: "0" }, 500);
    }
    $(navLinks).toggleClass("expanded");
  } else {
    $("#navBtn").html(` <i class="fa-solid fa-bars text-black fs-3"></i>`);
    sidebar.animate({ left: `-${navLinksWidth}` }, 500);
    for (let i = 0; i < listLi.length; i++) {
      $(listLi[i]).animate({ top: "250px" }, 500);
    }
    $(navLinks).toggleClass("expanded");
  }
});

let dishesList = [];
async function getDishes(name) {
  var response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
  );
  var finalData = await response.json();
  dishesList = finalData;
  // console.log(dishesList.meals);
  display();

  document.querySelectorAll(".item").forEach((item) => {
    item.addEventListener("click", () => {
      document.getElementById("home").classList.add("d-none");
      document.getElementById("detailesSection").classList.remove("d-none");
      // console.log(item);
      details.getDetails(item.getAttribute("data-id"));
    });
  });
  document.getElementById("closeDetails").addEventListener("click", () => {
    document.getElementById("home").classList.remove("d-none");
    document.getElementById("detailesSection").classList.add("d-none");
  });
}
getDishes("");

function display() {
  var content = ``;
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
  document.getElementById("rowData").innerHTML = content;
}
