export class Validation {
  constructor() {
    document
      .getElementById("contactUsSection")
      .addEventListener("click", () => {
        const sidebar = $("#sidebar");
        const navLinks = $("#navLinks");
        const navLinksWidth = $("#navLinks").outerWidth();
        const listLi = $("#sidebar ul li");

        this.home.classList.add("d-none");

        this.searchPage.classList.add("d-none");
        this.detailesSection.classList.add("d-none");
        this.categoriesSection.classList.add("d-none");
        this.areaSection.classList.add("d-none");
        this.ingredientsSection.classList.add("d-none");

        this.contactUs.classList.replace("d-none", "d-flex");
        $("#navBtn").html(` <i class="fa-solid fa-bars text-black fs-3"></i>`);
        sidebar.animate({ left: `-${navLinksWidth}` }, 500);
        for (let i = 0; i < listLi.length; i++) {
          $(listLi[i]).animate({ top: "250px" }, 500);
        }
        $(navLinks).toggleClass("expanded");
      });
    this.validateInputs();

    this.home = document.getElementById("home");
    this.contactUs = document.getElementById("contactUs");

    this.searchPage = document.getElementById("searchPage");
    this.detailesSection = document.getElementById("detailesSection");
    this.categoriesSection = document.getElementById("categoriesSection");
    this.areaSection = document.getElementById("areaSection");
    this.ingredientsSection = document.getElementById("ingredientsSection");
  }
  validateInputs() {
    const regex = {
      pass: /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/,
      phone: /^(01)[0125][0-9]{8}$/,
      userName: /^[A-Za-z\s]+$/,
      email: /^(.+)@(.+)$/,
      age: /^(?:1[01][0-9]|120|[1-9]?[0-9])$/,
    };

    let pass = document.getElementById("pass");
    let rePass = document.getElementById("rePass");

    //validation while typing
    var inputs = document.querySelectorAll(".validate");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("input", function (e) {
        var inputId = e.target.id;
        var inputvalue = e.target.value;
        validation(inputId, inputvalue);
      });
    }
    function validation(id, value) {
      var elm = document.getElementById(id);
      var span = elm.nextElementSibling;

      if (regex[id].test(value) == true) {
        elm.classList.add("is-valid");
        elm.classList.remove("is-invalid");
        span.classList.replace("d-block", "d-none");
      } else {
        elm.classList.add("is-invalid");
        elm.classList.remove("is-valid");
        span.classList.replace("d-none", "d-block");
      }
    }

    rePass.addEventListener("input", function () {
      if (pass.value != rePass.value) {
        rePass.classList.add("is-invalid");
        rePass.classList.remove("is-valid");
        document
          .getElementById("rePassErr")
          .classList.replace("d-none", "d-block");
      } else {
        rePass.classList.add("is-valid");
        rePass.classList.remove("is-invalid");
        document
          .getElementById("rePassErr")
          .classList.replace("d-block", "d-none");
      }
    });
  }
}
