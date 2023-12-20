const nom1 = document.getElementById("nom1");
const nom3 = document.getElementById("nom3");
const melandry = document.getElementById("nom2");

nom1.addEventListener("mouseover", () => {
  console.log(nom1.innerText);
});

nom3.addEventListener("mouseover", () => {
  console.log(nom3.innerText);
});

function melandryHover() {
  console.log(melandry.innerText);
}
melandry.addEventListener("mouseover", melandryHover);
