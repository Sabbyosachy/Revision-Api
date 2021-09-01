function LoadCountry() {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => DisplayCountry(data));
}
LoadCountry();

function DisplayCountry(data) {
    const Conatiner = document.getElementById('country');
    for (const Info of data) {
        console.log(Info);
        const div = document.createElement('div');
        div.classList.add('AllCountry');
        div.innerHTML = `<h3>${Info.name}</h3>
        <p>${Info.capital}</p>
        <button onclick="DetailsByname('${Info.name}')">Details</button>`

        Conatiner.appendChild(div);
    }
}

function DetailsByname(name) {
    const url = `
   https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => LoadInfo(data[0]))
}

function LoadInfo(countries) {
    const Container = document.getElementById('Countrydetail');
    Container.innerHTML = `<h4>${countries.name}</h4> <p>${countries.capital}</p> <p>${countries.population}</p> <img width="200px" src="${countries.flag}" alt="" srcset="">`
}