const toggle = document.getElementById("Toggle");
const body = document.getElementById("body");
const parts = document.getElementById("parts");
const partss = document.getElementById("partss");
const partsss = document.getElementById("partsss");
const partssss = document.getElementById("partssss");
const oopps = document.getElementById("oopps");
const ooppss = document.getElementById("ooppss");
const ooppsss = document.getElementById("ooppsss");
const awh = document.getElementById("awh");
const awhh = document.getElementById("awhh");
const awhhh = document.getElementById("awhhh");

console.log(body);
console.log(parts);
console.log(partss);
console.log(partsss);
console.log(partssss);
console.log(partssss);
console.log(oopps);
console.log(ooppss);
console.log(ooppsss);
console.log(awh);
console.log(awhh);
console.log(awhhh);

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  parts.classList.toggle("dark");
  partss.classList.toggle("dark");
  partsss.classList.toggle("dark");
  partssss.classList.toggle("dark");
  oopps.classList.toggle("dark");
  ooppss.classList.toggle("dark");
  ooppsss.classList.toggle("dark");
  awh.classList.toggle("dark");
  awhh.classList.toggle("dark");
  awhhh.classList.toggle("dark");
  
});
