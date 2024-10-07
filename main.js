let content = document.querySelector(".content");
let ratingButton1 = document.querySelector("#rating-button1");
let ratingButton2 = document.querySelector("#rating-button2");
let ratingButton3 = document.querySelector("#rating-button3");
let ratingButton4 = document.querySelector("#rating-button4");
let ratingButton5 = document.querySelector("#rating-button5");
let rating;

function submit() {
  if(ratingButton1.checked) {
    rating = 1;
  } else if(ratingButton2.checked) {
    rating = 2;
  } else if(ratingButton3.checked) {
    rating = 3;
  } else if(ratingButton4.checked) {
    rating = 4;
  } else if(ratingButton5.checked) {
    rating = 5
  }
  displayThankYou();
}

function displayThankYou() {
  content.innerHTML = "";
  content.innerHTML += `<img class="phone-img" src="./images/illustration-thank-you.svg" alt="Phone Image"></img>`;
  content.innerHTML += `<p class="selected-text">You selected ${rating} out of 5</p>`;
  content.innerHTML += `
  <div class="thank-you-div">
    <h1 class="heading">Thank you!</h1>
    <p class="text">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
  </div>
  `;
  content.style.alignItems = "center";
  content.style.padding = "35px 25px";
}