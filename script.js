//OPPGAVE 1:
// Steg 1: Lag en async funskjon som heter fetchData
// Steg 2: Lag en variabel som bruker await for å ta i mot en array med objects
// Steg 3: Retuner den variabelen

// OPPGAVE 2:
// Steg 1: Lag en async funskjon som heter dataRecieved
// Steg 2: Lag en variabel som bruker await for å ta i mot funksjonen getData
// Steg 3: Logg ut denne dataen
// Steg 4: Legg til denne dataen på siden

//
//

async function getBandInfo() {
  const bands = [
    {
      bandName: 'Led Zeppelin',
      guitar: 'Jimmy Page',
    },

    {
      bandName: 'AZ/DC',
      guitar: 'Angus Young',
    },
  ];
  return bands;
}

async function rockData() {
  const response = await getBandInfo();
  console.log(response);
  console.log(response[1].guitar);
}

setTimeout(rockData, 4000);

//
// //
// / fetch data fra Catfact
async function fetchApi() {
  // API-link: https://catfact.ninja/facts
// /venter på at svar kommer tilbake, fetch spør om informasjon på netside og sender informasjon tilbake
  const data = await fetch('https://catfact.ninja/facts');
  // Parser fra JSON til array
  let response = await data.json();
 // console.log(response);
  console.log(response);
  console.log(response.data);

  // 
  // // Hele arrayet
 
  // // Vi velger et spesifikt array
  // console.log(Aray(response));
  // console.log(Array(response.data[4]));
  // // Vi finner fact
  // console.log(Array(response.data[4].fact));
  const responseData = response.data;

  //forEach for å få ut hver fact på siden
  responseData.forEach((item) => {
    const factItem = item.fact;

    console.log(factItem);
    const viewCatFact = document.createElement('p');

    viewCatFact.textContent = factItem;
    // finne id som heter displayCatFact og hente den inn med querySelector
    const displayCatFact = document.querySelector('#displayCatFact');

    displayCatFact.appendChild(viewCatFact);
  });
}
// /dette gjør at den function aktiveres
fetchApi();

//VI LAGER EN CHUCK NORRIS KNAPP

const ChuckBtn = document.querySelector('#ChuckBtn'); //Henter knapp
const ChuckText = document.querySelector('#ChuckText'); //Henter p som viser teksten

async function ChuckNorrisApi() {
  //API-link: https://api.chucknorris.io/jokes/random
  
  const response = await fetch('https://api.chucknorris.io/jokes/random'); //API for Chuck Norris facts
  // Parser fra JSON til array
  let data = await response.json();
  // /sjekke om det funker
  console.log(data);

  ChuckText.textContent = data.value; //Finner string med random setning
}

ChuckBtn.addEventListener('click', function () {
  ChuckNorrisApi(); //Legger til funksjonen i knappen, så den kjører når vi trykker på knappen
});
