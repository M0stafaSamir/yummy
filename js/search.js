import { Details } from "./details.js";
import { Ui } from "./ui.js";

export class Search {
  constructor() {
    document.getElementById("searchLink").addEventListener("click", () => {
      const sidebar = $("#sidebar");
      const navLinks = $("#navLinks");
      const navLinksWidth = $("#navLinks").outerWidth();
      const listLi = $("#sidebar ul li");
      this.home.classList.add("d-none");
      this.contactUs.classList.add("d-none");
      this.detailesSection.classList.add("d-none");

      this.categoriesSection.classList.add("d-none");
      this.areaSection.classList.add("d-none");
      this.ingredientsSection.classList.add("d-none");

      this.searchPage.classList.remove("d-none");
      $("#navBtn").html(` <i class="fa-solid fa-bars text-black fs-3"></i>`);
      sidebar.animate({ left: `-${navLinksWidth}` }, 500);
      for (let i = 0; i < listLi.length; i++) {
        $(listLi[i]).animate({ top: "250px" }, 500);
      }
      $(navLinks).toggleClass("expanded");
    });

    // search by name
    const nameInput = document.getElementById("nameInput");
    nameInput.addEventListener("input", () => {
      this.searchDishes(nameInput.value);
    });

    // search by letter
    const letterInput = document.getElementById("letterInput");
    letterInput.addEventListener("input", () => {
      if (letterInput.value == "") {
        this.searchByletter("a");
      } else {
        this.searchByletter(letterInput.value);
      }
    });

    this.loading = document.querySelector(".loaderBackground");
    this.home = document.getElementById("home");
    this.contactUs = document.getElementById("contactUs");
    this.searchPage = document.getElementById("searchPage");
    this.detailesSection = document.getElementById("detailesSection");

    this.categoriesSection = document.getElementById("categoriesSection");
    this.areaSection = document.getElementById("areaSection");
    this.ingredientsSection = document.getElementById("ingredientsSection");

    this.ui = new Ui();
    this.details = new Details();
  }

  async searchDishes(name) {
    this.loading.classList.remove("d-none");
    var response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    var finalData = await response.json();
    this.loading.classList.add("d-none");
    console.log(finalData);

    this.ui.displaySearch(finalData, "searchRow");
    document.querySelectorAll(".item").forEach((item) => {
      item.addEventListener("click", () => {
        this.searchPage.classList.add("d-none");
        this.detailesSection.classList.remove("d-none");
        // new Details(item.dataset.id);
        this.details.getDetails(item.dataset.id);
      });
    });
  }
  async searchByletter(letter) {
    this.loading.classList.remove("d-none");
    var response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
    );
    var finalData = await response.json();
    this.loading.classList.add("d-none");
    console.log(finalData);

    this.ui.displaySearch(finalData, "searchRow");
    document.querySelectorAll(".item").forEach((item) => {
      item.addEventListener("click", () => {
        this.searchPage.classList.add("d-none");
        this.detailesSection.classList.remove("d-none");
        // new Details(item.dataset.id);
        this.details.getDetails(item.dataset.id);
      });
    });
  }
}
