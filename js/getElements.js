import { Details } from "./details.js";
import { Ui } from "./ui.js";

export class Elements {
  constructor() {
    this.detailesSection = document.getElementById("detailesSection");
    this.categoriesSection = document.getElementById("categoriesSection");
    this.areaSection = document.getElementById("areaSection");
    this.ingredientsSection = document.getElementById("ingredientsSection");

    this.loading = document.querySelector(".loaderBackground");

    this.details = new Details();
  }

  async getByCategories(cat) {
    this.loading.classList.remove("d-none");
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`
    );
    let finalData = await response.json();
    this.loading.classList.add("d-none");
    console.log(finalData);
    new Ui().displaySearch(finalData, "categoriesRow");

    document.querySelectorAll(".item").forEach((item) => {
      item.addEventListener("click", () => {
        this.categoriesSection.classList.add("d-none");
        this.detailesSection.classList.remove("d-none");
        this.details.getDetails(item.dataset.id);
      });
    });
  }
  async getByArea(area) {
    this.loading.classList.remove("d-none");
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
    );
    let finalData = await response.json();
    this.loading.classList.add("d-none");
    console.log(finalData);
    new Ui().displaySearch(finalData, "areaRow");

    document.querySelectorAll(".item").forEach((item) => {
      item.addEventListener("click", () => {
        this.areaSection.classList.add("d-none");
        this.detailesSection.classList.remove("d-none");
        this.details.getDetails(item.dataset.id);
      });
    });
  }
  async getByIngredients(ing) {
    this.loading.classList.remove("d-none");
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`
    );
    let finalData = await response.json();
    this.loading.classList.add("d-none");
    console.log(finalData);
    new Ui().displaySearch(finalData, "ingredientsRow");

    document.querySelectorAll(".item").forEach((item) => {
      item.addEventListener("click", () => {
        this.ingredientsSection.classList.add("d-none");
        this.detailesSection.classList.remove("d-none");
        this.details.getDetails(item.dataset.id);
      });
    });
  }
}
