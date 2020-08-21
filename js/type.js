let displayDivType = document.getElementById("displayDivType");
let displayTypeGif = document.getElementById("displayTypeGif");
//--------------------------------------------------------------------
// CODE FOR STRAIN SELECTOR BY TYPE
//--------------------------------------------------------------------
sativaButtonBody.addEventListener("click", function () {
  displayTypeGif.innerHTML = `
    <body>
    <p></p>
    <img id="loadingGifType" src="images/marijuana-yin-yang.gif" />
    <p></p>
    <h3 style="color: green">Cultivating Strain Information...</h3>
    </body>`;
  fetch("http://strainapi.evanbusse.com/0d4ocxj/strains/search/race/sativa")
    .then((response) => response.json())
    .then((typeClasses) => {
      let typeItem = typeClasses.map(function (type) {
        return `
                <div class="cardTest" id="thirdType">
                <div class="cardBody" class="card text-center">
                <h4><b>${type.name}</b></h4>
                <h6 class="card-subtitle mb-2 text-muted">${type.id}</h6>
                <img id='weedLeaf' src='https://www.freepnglogos.com/uploads/weed-leaf-png/weed-leaf-weed-symbol-drawing-clipart-panda-clipart-images-23.png'>
                <p id="descList" class="card-text"></p>
                <p class="card-text"><b>Race: </b>${type.race}</p>
                </div>
            </div>`;
      });
      displayTypeGif.innerHTML = "";
      displayDivType.innerHTML = typeItem.join("");
    });
});

indicaButtonBody.addEventListener("click", function () {
  displayTypeGif.innerHTML = `
    <body>
    <p></p>
    <img id="loadingGifType" src="images/marijuana-yin-yang.gif" />
    <p></p>
    <h3 style="color: green">Cultivating Strain Information...</h3>
    </body>`;
  fetch("http://strainapi.evanbusse.com/0d4ocxj/strains/search/race/indica")
    .then((response) => response.json())
    .then((typeClasses) => {
      let typeItem = typeClasses.map(function (type) {
        return `<div class="cardTest" id="thirdType">
                <div class="cardBody" class="card text-center">
                <h4><b>${type.name}</b></h4>
                <h6 class="card-subtitle mb-2 text-muted">${type.id}</h6>
                <img id='weedLeaf' src='https://www.freepnglogos.com/uploads/weed-leaf-png/weed-leaf-weed-symbol-drawing-clipart-panda-clipart-images-23.png'>
                <p id="descList" class="card-text"></p>
                <p class="card-text"><b>Race: </b>${type.race}</p>
                </div>
            </div>`;
      });
      displayTypeGif.innerHTML = "";
      displayDivType.innerHTML = typeItem.join("");
    });
});

hybridButtonBody.addEventListener("click", function () {
  displayTypeGif.innerHTML = `
    <body>
    <p></p>
    <img id="loadingGifType" src="images/marijuana-yin-yang.gif" />
    <p></p>
    <h3 style="color: green">Cultivating Strain Information...</h3>
    </body>`;
  fetch("http://strainapi.evanbusse.com/0d4ocxj/strains/search/race/hybrid")
    .then((response) => response.json())
    .then((typeClasses) => {
      let typeItem = typeClasses.map(function (type) {
        return `<div class="cardTest" id="thirdType">
                <div class="cardBody" class="card text-center">
                <h4><b>${type.name}</b></h4>
                <h6 class="card-subtitle mb-2 text-muted">${type.id}</h6>
                <img id='weedLeaf' src='https://www.freepnglogos.com/uploads/weed-leaf-png/weed-leaf-weed-symbol-drawing-clipart-panda-clipart-images-23.png'>
                <p id="descList" class="card-text"></p>
                <p class="card-text"><b>Race: </b>${type.race}</p>
                </div>
            </div>`;
      });
      displayTypeGif.innerHTML = "";
      displayDivType.innerHTML = typeItem.join("");
    });
});
