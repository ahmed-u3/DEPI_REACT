// fetch(url, option)
/*
fetch(url, {
method: "GET",

headers : {

},

body : json.stringify(data)



})
*/

const photosDiv = document.querySelector(".photos");
const url = "https://api.pexels.com/v1/curated";
const apiKey = "PyvMN88DyJn7Kec1amJlDI4VOhm8ogfVoCbEwh8bzg2q6KgCHx4J760S";

async function getPhotos() {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: apiKey,
    },
  });
  const data = await res.json();

  renderPhotos(data.photos);
  // console.log(data);
}

getPhotos();

function renderPhotos(photos) {
  // console.log(photos);

  photos.map(photo => {
    const {
      photographer,
      src: { small },
    } = photo;

    photosDiv.innerHTML += `
    <div class="photo">
        <img src=${small} alt="" />
        <p>${photographer}</p>
      </div>
    `;
  });
}
