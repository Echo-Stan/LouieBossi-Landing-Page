let bocabtn = document.querySelector(".boca");
let selectimg = document.querySelector("#locaimg");
let fortbtn = document.querySelector(".fort");

fortbtn.addEventListener("click", (e) => {
  selectimg.src =
    "https://onthegrid.city/imager/s3_amazonaws_com/onthegrid.city/assets/grid/ft-lauderdale/ft-lauderdale/louie-bossis/Louie-Int-2_299006722e285f47655d17d1c9136337.jpg";
});

bocabtn.addEventListener("click", (e) => {
  selectimg.src = "https://images.otstatic.com/prod1/48563443/2/huge.jpg";
});

let lisaBlock = document.querySelector("#lisa");
let lisaTitle = document.querySelector("#title_lisa");
let lisa_text = document.querySelector("#lisa_bio");

lisaBlock.addEventListener("mouseover", (e) => {
  document.querySelector("#lisa_bio").innerHTML =
    "<p>Lisabet Summa joined Big Time Restaurant Group in 1997 <br>as the restaurant group executive chef and partner. <br> Since then she has opened over a dozen restaurants. <br><br> \n Growing up in Lake Forest, Illinois her inspiration for <br>pursuing a career in the culinary arts began. Summa <br>largely views herself as a cook, an armchair traveler, and<br> an artisan. She is continually inspired by learning about <br>all of what is around her, as it relates to her field. <br><br> \n For the first 10 years of her career, Summa worked largely <br>in the Chicago area. During this phase she worked at <br>Maxims Restaurant, Charlie Trotters and Gordon <br>Sinclair’s all located in Chicago. Summa then moved onto <br>phase two of her career, which took her to Florida. <br>She began working at a 5 star mobile-rated restaurant called <br>St. Honore and also studied pastry and chocolate making <br>in Montreal at the renowned Patisserie De Gascoigne. <br>Later Summa become the Chef at Café L’Europe, one of <br>the most highly acclaimed restaurants in Palm Beach,<br> and Pastry Chef at La Vielle Maison in Boca Raton<br><br> \n The cooking knowledge that Summa employs on a daily <br>basis comes from her experience in various positions in <br>the kitchen. Summa spends a lot of time simplifying what <br>she intends for a menu, and getting back to the elements <br>that truly make a dish a success. Summa’s motto is flavor, <br>seasoning, product quality and technique.</p> ";
});

lisaBlock.addEventListener("mouseout", (e) => {
  document.querySelector("#lisa_bio").innerHTML = "";
});
// CHEF LISABET SUMMA

let louieBlock = document.querySelector("#louie");
let louieTitle = document.querySelector("#title_louie");
let louie_text = document.querySelector("#louie_bio");

louieBlock.addEventListener("mouseover", (e) => {
  document.querySelector("#louie_bio").innerHTML =
    "<p>Louie Bossi is not your typical chef. Growing up in an <br>Italian household in New York he remembers the <br>aromas of roasted garlic and fresh meatballs sizzling <br> \n from his family’s kitchen. Raised by a single mother <br>juggling three jobs, Bossi taught himself to cook at the<br> age of eight. Working his way from dishwasher to cook <br>at the local pizzeria Bossi developed a love for the art <br>of pizza making.<br><br> \n Relocating to Florida in 2000, Bossi landed his first job <br>with Big Time Restaurant Group as grill cook. <br>Exploring different positions within their popular <br>portfolio of restaurants Chef Bossi proved to be one of <br>the hardest working and most inspired chefs in the <br>company, which earned him the \n coveted Executive Chef <br>position at Big City Tavern. Bossi's D.I.Y. approach has led <br>him to obtain a certification from Chef Brian Polcyn in the <br>ancient art and technique of charcuterie, as well as becoming <br>a Master Pizza Maker from The Scuola Italiana Pizzaoili<br> in San Francisco. </p>";
});
louieBlock.addEventListener("mouseout", (e) => {
  document.querySelector("#louie_bio").innerHTML = "";
});

let purchase = document.querySelector("#purchaseBtn");

purchase.addEventListener("click", (e) => {
  window.open("https://louiebossi.cardfoundry.com/giftcards");
});

let learnMore = document.querySelector("#learnBtn");
learnMore.addEventListener("click", (e) => {
  window.open("https://www.louiebossi.com/events-boca-raton");
});
let res = document.querySelector("#reservationBtn");

res.addEventListener("click", (e) => {
  window.open(
    "https://www.opentable.com/s?dateTime=2023-06-15T19%3A30%3A00&covers=2&latitude=25.7689&longitude=-80.1946&term=Louie%20Bossi&shouldUseLatLongSearch=false&originCorrelationId=1002a178-db5f-49da-bdf7-5d32498c123c&sortBy=web_conversion&metroId=17&originalTerm=Louie%20Bossi&intentModifiedTerm=louie%20bossi&pinnedRid=45388&queryUnderstandingType=default&corrid=ddcec4ad-1145-488b-9783-46fae7d65be4"
  );
});
