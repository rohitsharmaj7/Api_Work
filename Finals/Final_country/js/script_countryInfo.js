function CountryInfo()
{
  var nameOfNation=document.getElementById('nameOfNation');
  var callCode=document.getElementById('callingCodes');
  var capital=document.getElementById('capital');
  var population=document.getElementById('population');
  var timeZone=document.getElementById('timezone');
  var domain=document.getElementById('domain');
  var currency=document.getElementById('currency');

  var y=document.getElementById('yourCountry').value;
  const url = 'https://restcountries.eu/rest/v2/name/'+y+'?fullText=true';

  fetch(url).then((resp)=>resp.json()).then(function(data){
  	let fetchCountryInfo=data;
    console.log(fetchCountryInfo);
    nameOfNation.innerHTML=fetchCountryInfo[0].name;
    callCode.innerHTML=fetchCountryInfo[0].callingCodes;
    capital.innerHTML=fetchCountryInfo[0].capital;
    population.innerHTML=fetchCountryInfo[0].population;
    timeZone.innerHTML=fetchCountryInfo[0].timezones;
    domain.innerHTML=fetchCountryInfo[0].topLevelDomain;
    currency.innerHTML=fetchCountryInfo[0].currencies[0].code+","+fetchCountryInfo[0].currencies[0].name+","+fetchCountryInfo[0].currencies[0].symbol;
  })
  .catch(function(error){
  	console.log(JSON.stringify(error));
  })
}