const body = document.querySelector("body")

// ! Hamburgermeny/Left navbar
const intro = document.querySelector(".nav-home");
const aboutMe = document.querySelector(".nav-about");
const projects = document.querySelector(".nav-projects");
const blog = document.querySelector(".nav-blog");

const aboutMeSection = document.querySelector(".about-me");
const productsSection = document.querySelector(".projects");
const blogSection = document.querySelector(".blog");


// ! scroller til de forskjellige seksjonene
intro.addEventListener("click",() =>{
    window.scrollTo(0, 0)
});

aboutMe.addEventListener("click",() =>{
    aboutMeSection.scrollIntoView()
});

projects.addEventListener("click",() =>{
    productsSection.scrollIntoView()
});

blog.addEventListener("click",() =>{
    blogSection.scrollIntoView()
});


// . Seksjon knapper
const introBtn = document.querySelector(".intro-btn");
const aboutBtn = document.querySelector(".about-btn");

introBtn.addEventListener("click", ()=>{
    aboutMeSection.scrollIntoView(true)
})

aboutBtn.addEventListener("click", ()=>{
    productsSection.scrollIntoView()
})








