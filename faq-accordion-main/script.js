var acc = document.getElementsByClassName("toggle");
var panels = document.getElementsByClassName("desc");
var i;

for (i = 0; i < panels.length; i++) {
  panels[i].style.maxHeight = "0";
  panels[i].style.opacity = "0";
}

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    const img = this.querySelector("img.plus");
    var panel = this.nextElementSibling;

    if (panel.style.maxHeight && panel.style.maxHeight !== "0px") {
      panel.style.maxHeight = "0";
      panel.style.opacity = "0";
      img.src = "/assets/images/icon-plus.svg";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.opacity = "1";
      img.src = "/assets/images/icon-minus.svg";
    }
  });
}
