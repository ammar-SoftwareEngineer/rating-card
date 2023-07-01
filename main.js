let spans = document.querySelectorAll(".numbers-rating span");
let btn = document.getElementById("btn");
function rating() {
  spans.forEach((star, index) => {
    star.addEventListener("click", () => {
      let stars = index + 1;
      spans.forEach((star, i) => {
        if (stars >= i + 1) {
          star.classList.add("active");
          btn.classList.add("actives");
        } else {
          star.classList.remove("active");
        }
      });
      btn.onclick = function () {
        let thankCard = document.querySelector(".thanks-rating");
        let infoCard = document.querySelector(".info-rating");
        if ((btn = "actives")) {
          thankCard.innerHTML = `
      <div class="image-thank">
          <img src="images/illustration-thank-you.svg" alt="">
      </div>
      <div class="select-number">
          <p>You selected ${stars} out of 5 </p>
      </div>
      <div class="text-thank">
          <h2>Thank you!</h2>
          <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate
              to get in touch!</p>
      </div>`;
          infoCard.classList.add("disable");
        }
      };
    });
  });
}
rating();
