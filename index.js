const homeButton = document.querySelector("#homebtn");
const aboutButton = document.querySelector("#aboutbtn");
const contactButton = document.querySelector("#contactbtn");
const page2Button = document.querySelector("#page2btn");
const clickLogo = document.querySelector("#logo");





homeButton.addEventListener('click' , ()=> {
   window.location.href = "index.html"
});
aboutButton.addEventListener('click' , ()=> {
   window.location.href = "page3.html"
});
contactButton.addEventListener('click' , ()=> {
   window.location.href = "contact.html"
});
page2Button.addEventListener('click' , ()=> {
   window.location.href = "page2.html"
});
clickLogo.addEventListener('click' , ()=> {
   window.location.href = "index.html"
});


