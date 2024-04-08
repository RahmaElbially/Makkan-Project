AOS.init();

let header = document.querySelector("header");

// Up To Top Button
let upToTopBtn = document.querySelector(".upToTopBtn");

window.onscroll = function () {
    if (window.scrollY > 70){
        header.style.width = "100%";
        header.style.left = 0;
        header.style.top = 0;
    }else{
        header.style.width = "90%";
        header.style.left = "5%";
        header.style.top = "5%";
    }

    if (window.scrollY > 300){
        upToTopBtn.style.display = "block";
    }else{
        upToTopBtn.style.display = "none";
    }
}

upToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

// Features Filter

let propertyListingBtns = document.querySelectorAll(".property-listing-btns button");
let cards = Array.from(document.querySelectorAll(".property-listing-cards .col-12"));

propertyListingBtns.forEach((btn) => {
    btn.addEventListener("click", removeActive);
    btn.addEventListener("click", manageCard);
})

function removeActive(){
    propertyListingBtns.forEach((btn) => {
        btn.classList.remove("active-btn");
        this.classList.add("active-btn");
    });
}

function manageCard(){
    cards.forEach((card) => {
        card.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "block";
    })
}

// Feedback Slider

let slider = document.querySelector(".feedback-slider");
let slides = document.querySelectorAll(".feedback-client");
let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");

let slideIndex = 0;

leftArrow.addEventListener("click", () => {
    slideIndex = slideIndex > 0 ? slideIndex - 1 : slides.length - 2;
    slider.style.transform = `translateX(${slideIndex * -50}%)`;
    if (window.innerWidth <= 500 || (window.innerWidth > 500 && window.innerWidth < 768) || 
    (window.innerWidth > 769 && window.innerWidth < 991)){
        slider.style.transform = `translateX(${slideIndex * -100}%)`;
    }
});
  
rightArrow.addEventListener("click", () => {
    slideIndex = slideIndex < slides.length - 2 ? slideIndex + 1 : 0;
    slider.style.transform = `translateX(${slideIndex * -50}%)`;
    if (window.innerWidth <= 500 || (window.innerWidth > 500 && window.innerWidth < 768) || 
    (window.innerWidth > 769 && window.innerWidth < 991)){
        slider.style.transform = `translateX(${slideIndex * -100}%)`;
    }
});