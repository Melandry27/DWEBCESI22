const nom1 = document.getElementById("nom1");
const nom2 = document.getElementById("nom2");

nom1.addEventListener("mouseover", () => {
  console.log(nom1.innerText);
});

nom2.addEventListener("mouseover", () => {
  console.log(nom2.innerText);
});
