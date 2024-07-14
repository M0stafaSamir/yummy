import { Ui } from "./ui.js";

export class Details {
  constructor() {
    this.loading = document.querySelector(".loaderBackground");
  }

  async getDetails(id) {
    this.loading.classList.remove("d-none");
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    let finalData = await response.json();
    this.loading.classList.add("d-none");
    console.log(finalData);
    new Ui().dispalyDetails(finalData);
  }
}
