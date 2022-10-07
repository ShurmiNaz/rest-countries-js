console.log('Explore countries with javascript.');
const loadCountries = () => {
     fetch('https://restcountries.com/v3.1/all')
          .then(res => res.json())
          .then(data => displayCountries(data))
};
loadCountries();

const displayCountries = (countries) => {
     const countriesHtml = countries.map(country => getCountriesHtml(country))
     console.log(countriesHtml);
};

const getCountriesHtml = (country) => {
     return ` <div>
          <h1>${country.name.common}</h1>
     </div> `

}