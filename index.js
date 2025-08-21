const contbutton = document.querySelector("#contbutton");
const contactcard = document.querySelector("#contactcard");
const closebutton = document.querySelector("#closebutton");

contbutton.addEventListener("click", () => {
  contactcard.classList.add("show");
});

closebutton.addEventListener("click", () => {
  contactcard.classList.remove("show");
});

document.addEventListener("click", (event) => {
  const isClickInside = contactcard.contains(event.target);
  const isButton = contbutton.contains(event.target);

  // Agar na contactcard ke andar click hua aur na hi button pe
  if (!isClickInside && !isButton) {
    contactcard.classList.remove("show");
  }
});