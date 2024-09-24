// console.log(navigator);
// console.log(navigator.userAgent);
// console.log(navigator.language);
// console.log(navigator.onLine);
// console.log(navigator.cookieEnabled);
// console.log(navigator.getBattery().then(res => console.log(res)));
// console.log(navigator.mediaDevices.getUserMedia({ video: true, audio: true }));

const msg = document.querySelector(".msg");
const urMSG = document.querySelector(".ur-msg");

msg.addEventListener("input", e => {
  urMSG.textContent = e.target.value;
});

urMSG.addEventListener("click", e => {
  // console.log(e.target.textContent);
  navigator.clipboard.writeText(e.target.textContent);
  alert(`e.target.textContent ==> clipboard`);
});

// console.log(navigator.geolocation);
const locBTN = document.querySelector(".loc");

locBTN.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(pos => {
    console.log({
      long: pos.coords.longitude,
      lat: pos.coords.latitude,
    });
  });
});
