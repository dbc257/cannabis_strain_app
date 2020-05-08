
// let searchPositiveEffectButton = document.getElementById("searchPositiveEffectButton")
// let searchMedicalEffectButton  = document.getElementById("searchMedicalEffectButton")
// let searchNegativeEffectButton  = document.getElementById("searchNegativeEffectButton")
let flavorSelector = document.getElementById("flavorSelector")
let searchFlavorButton = document.getElementById("searchFlavorButton")
// let nameButton = document.getElementById("nameButton")
let displayDivFlavor = document.getElementById("displayDivFlavor")
let displayFlavorGif = document.getElementById("displayFlavorGif")
// let allButtonBodyFlavor = document.getElementById("allButtonBodyFlavor")
//--------------------------------------------------------------------
// CODE FOR ALL STRAINS API 
//--------------------------------------------------------------------
// function renderPosts(strainPosts) {
//     displayDivFlavor.innerHTML = ""
//     let strainItems = ""
//     for (let index = 0; index < Object.values(strainPosts).length; index++) {
//         const strainItem = Object.values(strainPosts)[index]
//         strainItems += `
//         <div class="card w-75" style="width: 18rem;">
//             <div class="card-body" class="card text-center">
//                 <h4><b>${Object.keys(strainPosts)[index]}</b></h4>
//                 <h6 class="card-subtitle mb-2 text-muted">${strainItem.race}</h6>
//                 <p id="descList" class="card-text"></p>
//                 <p class="card-text"><b>ID: </b>${strainItem.id}</p>
//                 <p class="card-text"><b>Flavors: </b>${strainItem.flavors}</p>
//                 <p class="card-text"><b>Helps to treat: </b>${strainItem.effects.medical}</p>
//                 <p class="card-text"><b>Positive Effects: </b>${strainItem.effects.positive}</p>
//                 <p class="card-text"><b>Negative Effects: </b>${strainItem.effects.negative}</p>
//             </div>
//         </div>`
//     }
//     displayDivFlavor.innerHTML = strainItems
// }

// allButtonMenu.addEventListener("click", function () {
//     fetch("http://strainapi.evanbusse.com/0d4ocxj/strains/search/all")
//         .then(response => response.json())
//         .then(strainPosts => {
//             renderPosts(strainPosts)
//         })
// })

// allButtonBodyFlavor.addEventListener("click", function () {
//     fetch("http://strainapi.evanbusse.com/0d4ocxj/strains/search/all")
//         .then(response => response.json())
//         .then(strainPosts => {
//             renderPosts(strainPosts)
//     })
// })

//--------------------------------------------------------------------
// CODE FOR STRAIN SELECTOR BY RACE
//--------------------------------------------------------------------
// fetch("http://strainapi.evanbusse.com/0d4ocxj/strains/search/race/RACE")


//--------------------------------------------------------------------
// CODE FOR STRAIN SELECTOR BY EFFECT 
//--------------------------------------------------------------------
// function effectOptions() {
//     fetch("http://strainapi.evanbusse.com/0d4ocxj/searchdata/effects")
//         .then(response => response.json())
//         .then(effectPosts => {
//             let effectItem = effectPosts.map(function (effect) {
//                 return `<select>
//             <option value="${effect.effect}">${effect.effect}</option>`
//             })
//             effectSelector.innerHTML = effectItem
//     })
// }

// searchPositiveEffectButton.addEventListener("click", function () {
// function PosEffects() { 
//     var e = document.getElementById("effectSelectorPositive").selectedIndex;
//     console.log(e)
//     var posSelection = document.getElementsByName("pos")[e].value;
//     console.log(posSelection)
//     let effectURL = `http://strainapi.evanbusse.com/0d4ocxj/strains/search/effect/${posSelection}`
//     fetch(effectURL)
//         .then(response => response.json())
//         .then(effectPosts => {
//             let effectItem = effectPosts.map(function (effect) {
//                 return `<div class="card w-75" style="width: 18rem;">
//                 <div class="card-body" class="card text-center">
//                 <h4><b>${effect.name}</b></h4>
//                 <h6 class="card-subtitle mb-2 text-muted">${effect.id}</h6>
//                 <p class="card-text">${effect.race}</p>
//                 <p class="card-text">${effect.effect}</p>
//                 </div>
//             </div>`
//             })
//             displayDiv.innerHTML = effectItem.join("")
//         })
// }

// // searchMedicalEffectButton.addEventListener("click", function () {
// function MedEffects() { 
//     var e = document.getElementById("effectSelectorMedical").selectedIndex;
//     console.log(e)
//     var medSelection = document.getElementsByName("med")[e].value;
//     console.log(medSelection)
//     let effectURL = `http://strainapi.evanbusse.com/0d4ocxj/strains/search/effect/${medSelection}`
//     fetch(effectURL)
//         .then(response => response.json())
//         .then(effectPosts => {
//             let effectItem = effectPosts.map(function (effect) {
//                 return `<div class="card w-75" style="width: 18rem;">
//                 <div class="card-body" class="card text-center">
//                 <h4><b>${effect.name}</b></h4>
//                 <h6 class="card-subtitle mb-2 text-muted">${effect.id}</h6>
//                 <p class="card-text">${effect.race}</p>
//                 <p class="card-text">${effect.effect}</p>
//                 </div>
//             </div>`
//             })
//             displayDiv.innerHTML = effectItem.join("")
//         })
// }

// // searchNegativeEffectButton.addEventListener("click", function () {
// function NegEffects() {    
//     var e = document.getElementById("effectSelectorNegative").selectedIndex;
//     console.log(e)
//     var negSelection = document.getElementsByName("neg")[e].value;
//     console.log(negSelection)
//     let effectURL = `http://strainapi.evanbusse.com/0d4ocxj/strains/search/effect/${negSelection}`
//     fetch(effectURL)
//         .then(response => response.json())
//         .then(effectPosts => {
//             let effectItem = effectPosts.map(function (effect) {
//                 return `<div class="card w-75" style="width: 18rem;">
//                 <div class="card-body" class="card text-center">
//                 <h4><b>${effect.name}</b></h4>
//                 <h6 class="card-subtitle mb-2 text-muted">${effect.id}</h6>
//                 <p class="card-text">${effect.race}</p>
//                 <p class="card-text">${effect.effect}</p>
//                 </div>
//             </div>`
//             })
//             displayDiv.innerHTML = effectItem.join("")})
//         }
    

//--------------------------------------------------------------------
// CODE FOR STRAIN SELECTOR BY FLAVOR
//--------------------------------------------------------------------
function flavorOptions() {
    fetch("http://strainapi.evanbusse.com/0d4ocxj/searchdata/flavors")
        .then(response => response.json())
        .then(flavorPosts => {
            // flavorSelector.innerHTML = ""
            let flavorItem = flavorPosts.map(function (flavor) {
                return `<select>
            <option name="flav" value="${flavor}">${flavor}</option>`
            })
            flavorSelector.innerHTML = flavorItem
        })
}

flavorOptions()

searchFlavorButton.addEventListener("click", function () {
    displayFlavorGif.innerHTML = `
    <body>
    <p></p>
    <img id="loadingGifFlavor" src="images/marijuana-yin-yang.gif" />
    <p></p>
    <h3 style="color: green">Cultivating Strain Information...</h3>
    </body>`
    var f = document.getElementById("flavorSelector").selectedIndex;
    console.log(f)
    var flavorSelection = document.getElementsByName("flav")[f].value;
    console.log(flavorSelection)
    let flavorURL = `http://strainapi.evanbusse.com/0d4ocxj/strains/search/flavor/${flavorSelection}`
    fetch(flavorURL)
        .then(response => response.json())
        .then(flavorPosts => {

            let flavorItem = flavorPosts.map(function (flavor) {
                return `
                <div class="cardTest" id="thirdFlavor">
                    <div class="cardBody" class="card text-center">
                        <h4><b>${flavor.name}</b></h4>
                        <h6 class="card-subtitle mb-2 text-muted">${flavor.id}</h6>
                        <img id='weedLeaf' src='https://www.freepnglogos.com/uploads/weed-leaf-png/weed-leaf-weed-symbol-drawing-clipart-panda-clipart-images-23.png'>
                        <p class="card-text">${flavor.race}</p>
                        <p class="card-text">${flavor.flavor}</p>
                        </div>
                    </div>`
            })
            displayFlavorGif.innerHTML = ""
            displayDivFlavor.innerHTML = flavorItem.join("")
        }).catch((err) => {
            displayFlavorGif.innerHTML = `<h1 style="color: red">Oops, there was a problem getting the data!</h1>"`
        
        })
})

//--------------------------------------------------------------------
// CODE TO SEARCH DESCRIPTION BY STRAIN ID NUMBER 
//--------------------------------------------------------------------

// descButton.addEventListener("click", function () {
//     let descURL = `http://strainapi.evanbusse.com/0d4ocxj/strains/data/desc/${idTextBox.value}`
//     fetch(descURL)
//         .then(response => response.json())
//         .then(descPosts => {
//             console.log(descPosts)
//             let descVar = `<div class="card w-75" style="width: 18rem;">
//                             <div class="card-body" class="card text-center">
//                                 <h6 class="card-subtitle mb-2 text-muted">${idTextBox.value}</h6>
//                                 <h6>${descPosts.desc}</h6>
//                             </div>
//                         </div>`
//             displayDiv.innerHTML = descVar
//         })
// })

//--------------------------------------------------------------------
// CODE FOR STRAIN SELECTOR BY NAME
//--------------------------------------------------------------------
// descButton.addEventListener("click", function () {
//     let descURL = `http://strainapi.evanbusse.com/0d4ocxj/strains/data/desc/${idTextBox.value}`
//     fetch(descURL)
//         .then(response => response.json())
//         .then(descPosts => {
//             console.log(descPosts)
//             let descVar = `<div class="card w-75" style="width: 18rem;">
//                             <div class="card-body" class="card text-center">
//                                 <h6 class="card-subtitle mb-2 text-muted">${idTextBox.value}</h6>
//                                 <h6>${descPosts.desc}</h6>
//                             </div>
//                         </div>`
//             displayDiv.innerHTML = descVar
//         })
// })
//--------------------------------------------------------------------
// API ADDRESSES FOR REFERENCE 
// BOLD letters at the end of API address must have an input value 
// substituted for the BOLD word at the end.
// For example:
// http://strainapi.evanbusse.com/0d4ocxj/strains/data/desc/STRAIN_ID
// "STRAIN_ID" would have to have a number such as "3"
// http://strainapi.evanbusse.com/0d4ocxj/strains/data/desc/3
// STRAIN_ID 3 is named Afternoon Delight. 
// After the strain name, it would show a strain description on the website 
//--------------------------------------------------------------------

// http://strainapi.evanbusse.com/0d4ocxj/strains/search/effect/EFFECT
// http://strainapi.evanbusse.com/0d4ocxj/strains/search/flavor/FLAVOR

// http://strainapi.evanbusse.com/0d4ocxj/searchdata/effects
// http://strainapi.evanbusse.com/0d4ocxj/searchdata/flavors

// http://strainapi.evanbusse.com/0d4ocxj/strains/search/race/RACE
// http://strainapi.evanbusse.com/0d4ocxj/strains/data/desc/STRAIN_ID
// http://strainapi.evanbusse.com/0d4ocxj/strains/search/name/NAME
