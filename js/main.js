/* NAVIGATION-SLIDER*/
window.onscroll = function () {
    addStickyClassToHeader();
  };
  var header = document.getElementById("header");
  var sticky = header.offsetTop;
  
  // Add the sticky class to the header
  function addStickyClassToHeader() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
  function openNav() {
    document.getElementById("navMenu").style.width = "50%";
  }
  function closeNav() {
    document.getElementById("navMenu").style.width = "0%";
  }