import { Elements } from "./getElements.js";
import { Ui } from "./ui.js";

export class Categories {
  constructor() {
    document.getElementById("categoriesLink").addEventListener("click", () => {
      this.getCategories();
      const sidebar = $("#sidebar");
      const navLinks = $("#navLinks");
      const navLinksWidth = $("#navLinks").outerWidth();
      const listLi = $("#sidebar ul li");
      this.home.classList.add("d-none");
      this.contactUs.classList.add("d-none");
      this.detailesSection.classList.add("d-none");
      this.searchPage.classList.add("d-none");
      this.areaSection.classList.add("d-none");
      this.ingredientsSection.classList.add("d-none");
      this.categoriesSection.classList.remove("d-none");
      $("#navBtn").html(` <i class="fa-solid fa-bars text-black fs-3"></i>`);
      sidebar.animate({ left: `-${navLinksWidth}` }, 500);
      for (let i = 0; i < listLi.length; i++) {
        $(listLi[i]).animate({ top: "250px" }, 500);
      }
      $(navLinks).toggleClass("expanded");
    });

    this.loading = document.querySelector(".loaderBackground");
    this.home = document.getElementById("home");
    this.contactUs = document.getElementById("contactUs");
    this.searchPage = document.getElementById("searchPage");
    this.detailesSection = document.getElementById("detailesSection");

    this.areaSection = document.getElementById("areaSection");
    this.ingredientsSection = document.getElementById("ingredientsSection");

    this.categoriesSection = document.getElementById("categoriesSection");
    this.ui = new Ui();
    this.elements = new Elements();
  }

  async getCategories() {
    this.loading.classList.remove("d-none");
    var response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    var finalData = await response.json();
    this.loading.classList.add("d-none");
    console.log(finalData);

    this.ui.displayCategories(finalData);
    document.querySelectorAll(".item").forEach((item) => {
      item.addEventListener("click", () => {
        this.elements.getByCategories(item.dataset.id);
      });
    });
  }
}
