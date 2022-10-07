console.log('Explore countries with javascript.');
const loadCountries = () => {
     fetch('https://restcountries.com/v3.1/all')
          .then(res => res.json())
          .then(data => displayCountries(data))
};
loadCountries();

const displayCountries = (countries) => {
     const countriesHtml = countries.map(country => getCountriesHtml(country));
     const container = document.getElementById('countries');
     container.innerHTML = countriesHtml.join(' ');
     // console.log(countriesHtml);
};

const getCountriesHtml = (country) => {
     return ` <div class="country">
               <h1>${country.name.common}</h1>
               <img src="${country.flags.png}">
           </div> `

}