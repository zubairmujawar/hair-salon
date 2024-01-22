const heroSection = document.querySelector(".herosection");
const aboutSection = document.querySelector(".story-div");
const contactSection = document.querySelector(".footer-div");
const servicesSection = document.querySelector(".services-div");

document.querySelector("Home-link").addEventListener('click',()=>{
    heroSection.scrollIntoView({behavior: "smooth"})
})
document.querySelector("About-link").addEventListener('click',()=>{
    aboutSection.scrollIntoView({behavior: "smooth"})
})
document.querySelector("Services-link").addEventListener('click',()=>{
    contactSection.scrollIntoView({behavior: "smooth"})
})
document.querySelector("Contact-link").addEventListener('click',()=>{
    servicesSection.scrollIntoView({behavior: "smooth"})
})
