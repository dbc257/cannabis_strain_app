let allButtonBody = document.getElementById("allButtonBody");
let nameButton = document.getElementById("nameButton");
let displayDivAllStrain = document.getElementById("displayDivAllStrain");
let displayAllGif = document.getElementById("displayAllGif");
//--------------------------------------------------------------------
// CODE FOR ALL STRAINS API
//--------------------------------------------------------------------
function renderPosts(strainPosts) {
  displayDivAllStrain.innerHTML = "";
  let strainItems = "";
  for (let index = 0; index < Object.values(strainPosts).length; index++) {
    const strainItem = Object.values(strainPosts)[index];
    strainItems += `
        <div class="cardTest" id="thirdAll">
            <div class="cardBody" class="card text-center">
                <h4><b>${Object.keys(strainPosts)[index]}</b></h4>
                <h6 class="card-subtitle mb-2 text-muted">${
                  strainItem.race
                }</h6>
                <p id="descList" class="card-text"></p>
                <img id='weedLeaf' src='https://www.freepnglogos.com/uploads/weed-leaf-png/weed-leaf-weed-symbol-drawing-clipart-panda-clipart-images-23.png'>
                <p class="card-text"><b>ID: </b>${strainItem.id}</p>
                <p class="card-text"><b>Flavors: </b>${strainItem.flavors}</p>
                <p class="card-text"><b>Helps to treat: </b>${strainItem.effects.medical.join(
                  ", "
                )}</p>
                <p class="card-text"><b>Positive Effects: </b>${strainItem.effects.positive.join(
                  ", "
                )}</p>
                <p class="card-text"><b>Negative Effects: </b>${strainItem.effects.negative.join(
                  ", "
                )}</p>
            </div>
        </div>`;
  }
  displayAllGif.innerHTML = "";
  displayDivAllStrain.innerHTML = strainItems;
}

allButtonBody.addEventListener("click", function () {
  displayAllGif.innerHTML = `
    <body>
    <p></p>
    <img id="loadingGif" src="images/marijuana-yin-yang.gif" />
    <p></p>
    <h3 style="color: green">Cultivating Strain Information...</h3>
    </body>`;
  fetch("http://strainapi.evanbusse.com/0d4ocxj/strains/search/all")
    .then((response) => response.json())
    .then((strainPosts) => {
      renderPosts(strainPosts);
    });
});
//--------------------------------------------------------------------
// CODE FOR STRAIN SELECTOR BY NAME
//--------------------------------------------------------------------
nameButton.addEventListener("click", function () {
  displayAllGif.innerHTML = `
    <body>
    <p></p>
    <img id="loadingGif" src="images/marijuana-yin-yang.gif" />
    <p></p>
    <h3 style="color: green">Cultivating Strain Information...</h3>
    </body>`;
  let nameURL = `http://strainapi.evanbusse.com/0d4ocxj/strains/search/name/${nameTextBox.value}`;
  fetch(nameURL)
    .then((response) => response.json())
    .then((namePosts) => {
      let nameVar = namePosts.map(function (name) {
        let description = name.desc;
        if (description === null) {
          description = "Description is not available";
        }
        return `
                <div class="cardTest" id="thirdAll">
                    <div class="cardBody" class="card text-center">
                    <img id='weedLeaf' src='https://www.freepnglogos.com/uploads/weed-leaf-png/weed-leaf-weed-symbol-drawing-clipart-panda-clipart-images-23.png'>            
                        <p class="card-text">${name.id}</p>
                        <h4><b>${name.name}</b></h4>
                        <h6 class="card-subtitle mb-2 text-muted">${name.race}</h6>
                        <p id="descList" class="card-text"></p>
                        <p class="card-text">${description}</p>    
                    </div>
                </div>`;
      });
      displayAllGif.innerHTML = "";
      displayDivAllStrain.innerHTML = nameVar;
    });
});
