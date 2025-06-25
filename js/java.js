// document.getElementById("pio").onclick = function(){
//     document.getElementById("menu").ul.toggle("hidden")
// };

// document.addEventListener("DOMContentLoaded", function () {
//     const menuToggle = document.getElementById("pio");
//     const menu = document.getElementById("menu");
//     //  const closeBtn = document.getElementById("menu-close");

//     menuToggle.addEventListener("click", function () {
//     menu.classList.toggle("show");
//     });

// });




//   document.addEventListener("DOMContentLoaded", () => {
//     const menu = document.getElementById("menu");
//     const openBtn = document.getElementById("pio");
//     // const closeBtn = document.getElementById("menu-close");

//     openBtn.addEventListener("click", () =>{
//     //   menu.classList.remove("hidden");
//       openBtn.classList.add("hidden");
//     //   closeBtn.classList.remove("hidden");
//     });

//     closeBtn.addEventListener("click", () => {
//     //   menu.classList.add("hidden");
//       openBtn.classList.remove("hidden");
//     //   closeBtn.classList.add("hidden");
//     });
//   });



document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("pio");
  const menu = document.getElementById("menu");

  let isOpen = false;

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("show");
    isOpen = !isOpen;

    // Toggle icon
    menuToggle.src = isOpen
      ? "images/icon-close.svg"
      : "images/icon-hamburger.svg";
  });
});