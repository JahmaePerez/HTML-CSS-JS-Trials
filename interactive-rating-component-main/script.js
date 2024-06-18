document.addEventListener('DOMContentLoaded', () => {
  let selectedRating = 0;

  //button for numbers
  const buttons = document.querySelectorAll(".numbers");

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      if (this.style.backgroundColor === "white") {
        this.style.backgroundColor = "";
        this.style.color = "";
        selectedRating = 0;
      } 
      else {
        buttons.forEach(btn => {
          btn.style.backgroundColor = "";
          btn.style.color = "";
        });
        this.style.backgroundColor = "white";
        this.style.color = "hsl(213, 19%, 18%)";
        selectedRating = this.innerText;
      }
    });
  });

  //button for submit
  const sub = document.querySelector(".btn");

  sub.addEventListener('click', function() {
    window.location.href = `ty.html?rating=${selectedRating}`;
  });
});
return <h2></h2>
