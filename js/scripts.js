var url = 'https://restcountries.eu/rest/v1/name/'; 
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
  var countryName = $('#country-name').val(); if(!countryName.length) countryName = 'Poland';
  $.ajax({
    url: url + countryName, 
    method: 'GET', 
    success: showCountriesList }); 
}
function showCountriesList(resp) {
  countriesList.empty();
  resp.forEach(function(item) 
  { 
  
    $('<h3>').text(item.name).appendTo(countriesList);
    $('<img>').attr('src', '' + 'http://www.geonames.org/flags/x/' + item.alpha2Code.toLowerCase() + ".gif").appendTo(countriesList);
    $('<h4>').html('<span>capital </span>of ' + item.name + ' is <span> ' + item.capital +'</span>').appendTo(countriesList);
    $('<li>').html('<span>population: </span> ' + item.population + ' people').appendTo(countriesList);
    $('<li>').html('<span>timezone:</span> ' + item.timezones).appendTo(countriesList);
    $('<li>').html('<span>land area:</span> '+ item.area + ' km²').appendTo(countriesList);
    $('<li>').html('<span>currencies:</span> '+ item.currencies).appendTo(countriesList);
    $('<li>').html('<span>languages:</span> '+ item.languages).appendTo(countriesList);
    $('<li>').html('<span>domain:</span> '+ item.topLevelDomain).appendTo(countriesList);
    // $('<li>').html('<span>code: </span>' + item.alpha2Code).appendTo(countriesList);
    
     
  });        

 }
