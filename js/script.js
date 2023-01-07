const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");
const menuList = document.querySelectorAll(".menu-list a");
const searchEngine = document.querySelector(".search-engine");

$(".page-scroll").on("click", function (e) {
  var tujuan = $(this).attr("href");

  var elemenTujuan = $(tujuan);

  $("html , body").animate({
    scrollTop: elemenTujuan.offset().top - 50,
  });

  e.preventDefault();
});

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
  searchEngine.classList.toggle("d-none");
});

const btnSearch = document.querySelector(".btnSearch");
const search = document.querySelector(".keyword");
const searchInfo = document.querySelector(".search-info");
const cardsContainer = document.querySelector(".data");
const hotBtn = document.querySelector(".hot");
const dropdown = document.querySelector('.dropdown');

let shoes = function (title, codeart, shoetype, madein, picture) {
  this.Name = title;
  this.CodeArt = codeart;
  this.ShoeType = shoetype;
  this.MadeIn = madein;
  this.Picture = picture;
};

let Nike3xp = new shoes("Nike 3xp", "a3xpzyo", "Sneakers", "Vietnam", "img/gl2.jpg");
let NikeAirJ = new shoes("Nike Air Jordan White", "0ffwhit3", "Sneakers/Basket", "US", "img/gl7.jpg");
let Converse = new shoes("Converse", "00785pt", "Sneakers", "Vietnam", "img/gl1.jpg");
let ReebokPw = new shoes("Reebok Pink and White", "tp7krbk", "Sneakers", "Vietnam", "img/gl3.jpg");
let ConverseOrg = new shoes("Converse Orange", "cr3vs90", "Sneakers", "Vietnam", "img/gl5.jpg");
let NikeSpeed = new shoes("Nike Speed", "sp33d4y", "Running", "Vietnam", "img/gl6.jpg");
let NewBalanced = new shoes("New Balanced", "5xp78re", "Sneakers", "US", "img/gl8.jpg");
let AirJordanBlue = new shoes("Nike Air Jordan Blue Rose", "br0s3zx", "Sneakers/Basket", "US", "img/gl9.jpg");

let shoesData = [Nike3xp, NikeAirJ, Converse, ReebokPw, ConverseOrg, NikeSpeed, NewBalanced, AirJordanBlue];
let hot = [AirJordanBlue, NikeAirJ, NewBalanced];

const getCards = () => {
  let cards = "";
  shoesData.forEach((m) => {
    cards += `<div class="card ms-4 mt-4 col-4 shadow p-3 mb-5 bg-body rounded " style="width: 16rem;">
    <img src="${m.Picture}" class="card-img-top pointer picture">
    <div class="card-body border border-secondary rounded mt-1">
      <h5 class="card-title">${m.Name}</h5>
      <ul class="list-group list-group-flush ">
        <li class="list-group-item">Code Art: ${m.CodeArt}</li>
        <li class="list-group-item">Shoes Type: ${m.ShoeType}</li>
        <li class="list-group-item">Made In: ${m.MadeIn}</li>
      </ul>
      <a href="#" class="btn mt-3"><img src="img/tokped.png"></a>
      <a href="#" class="btn mt-3"><img src="img/shopee.png"></a>
    </div>
  </div>`;
  });
  cardsContainer.innerHTML = cards;
};
document.addEventListener("DOMContentLoaded", getCards);

btnSearch.addEventListener("click", (event) => {
  searchData();
});

search.addEventListener('click', () => {
  dropdown.classList.toggle('d-none');
})

search.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    searchData();
  }
});

function searchData() {
  const search_value = search.value.toLowerCase();
  const data_filtered = shoesData.slice(0);
  dropdown.classList.add('d-none');
  searchInfo.classList.add('d-none');
  cardsContainer.innerHTML = "";
  for (i = 0; i < data_filtered.length; i++) {
    if (data_filtered[i].Name.toLowerCase().includes(search_value)) {
      cardsContainer.innerHTML += `<div class="card ms-2 mt-4 col-4 shadow p-3 mb-5 bg-body rounded" style="width: 16rem;">
      <img src="${data_filtered[i].Picture}" class="card-img-top pointer picture">
      <div class="card-body">
        <h5 class="card-title">${data_filtered[i].Name}</h5>
        <ul class="list-group">
          <li class="list-group-item">Code Art: ${data_filtered[i].CodeArt}</li>
          <li class="list-group-item">Shoes Type: ${data_filtered[i].ShoeType}</li>
          <li class="list-group-item">Made In: ${data_filtered[i].MadeIn}</li>
        </ul>
        <a href="#" class="btn mt-3"><img src="img/tokped.png"></a>
        <a href="#" class="btn mt-3"><img src="img/shopee.png"></a>
      </div>
    </div>`;
    }
  }
  if (cardsContainer.innerHTML == "") {
    searchInfo.classList.remove('d-none');
  }
}