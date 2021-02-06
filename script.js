/*fetch('https://restcountries.eu/rest/v2/all')
.then(response => response.json())
.then(json => displayUsers(json)) 
  
function displayUsers(users){
  const userNames = users.map(user =>user.flag);
 
  
  const ul=document.getElementById("user-content");
  for(let i=0; i<userNames.length; i++){
    const username = userNames[i];
    const li=document.createElement("div");
    li.innerText=username;
    ul.appendChild(li);
  }
}*/

fetch('https://restcountries.eu/rest/v2/all')
.then(response => response.json())
.then(json => displayCountries(json)) 

const displayCountries=countries=>{
    const countriesDiv=document.getElementById('country');
    for(let i=0; i<countries.length; i++){
        const country = countries[i];
        const countryDiv=document.createElement('div');
        // const h3=document.createElement('h3');
        // h3.innerText=country.name;
        // const p=document.createElement('p');
        // p.innerText=country.capital;
        // const img=document.createElement('img');
        // img.src=country.flag;
        // countryDiv.appendChild(img)
        // countryDiv.appendChild(h3);
        // countryDiv.appendChild(p);
    
        countryDiv.className='countryStyle';
        const countryInfo= `
        <h3>${country.name}</h3>
        <button class="btn btn-primary" onClick="displayCountriesDetails('${country.name}')">Show Details</button>
        `
        countryDiv.innerHTML=countryInfo;
        countriesDiv.appendChild(countryDiv);
       
    }
}
const displayCountriesDetails=name=>{
    const url =`https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then (response=>response.json())
     .then(data=>countryAllInfo(data[0]));

};

const countryAllInfo=country=>{
    const countryDiv=document. getElementById("countryDetails")
     countryDiv.innerHTML= `
     <img  src="${country.flag}" class="flag">
    <p>Number of population ${country.population}</p>
    <p>Border Share - ${country.borders}</p>
    <p>Capital name- ${country.capital}</p>    
    <p>Region- ${country.region}</p>
    `
}