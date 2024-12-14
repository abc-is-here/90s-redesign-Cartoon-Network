document
  .querySelector(".guestbook-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("guestbook-popup").style.display = "block";
  });

document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("guestbook-popup").style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("guestbook-popup")) {
    document.getElementById("guestbook-popup").style.display = "none";
  }
});
function showRandomAd() {
    const ads = [
        "Check out our new product!",
        "Limited time offer!",
        "Don't miss our sale!",
        "Subscribe to our newsletter!",
    ];
    const randomAd = ads[Math.floor(Math.random() * ads.length)];
    const adPopup = document.createElement("div");
    adPopup.className = "ad-popup";
    adPopup.innerText = randomAd;

    const alertImage = document.createElement("img");
    alertImage.src = "alert.webp";
    alertImage.style.width = "20px";
    alertImage.style.height = "20px";
    alertImage.style.marginRight = "10px";
    adPopup.prepend(alertImage);

    adPopup.style.position = "fixed";
    adPopup.style.bottom = "-100px";
    adPopup.style.right = "10px";
    adPopup.style.backgroundColor = "yellow";
    adPopup.style.padding = "10px";
    adPopup.style.border = "1px solid black";
    adPopup.style.zIndex = "1000";
    adPopup.style.transition = "bottom 0.5s";
    document.body.appendChild(adPopup);

    setTimeout(() => {
        adPopup.style.bottom = "10px";
    }, 100);

    setTimeout(() => {
        adPopup.style.bottom = "-100px";
        setTimeout(() => {
            adPopup.remove();
        }, 500);
    }, 5000);
}

function randomAdInterval() {
    const randomTime = Math.floor(Math.random() * 10000) + 5000;
    setTimeout(() => {
        showRandomAd();
        randomAdInterval();
    }, randomTime);
}

randomAdInterval();