

var mymap = L.map('mapid').setView([40.802226, -73.969144], 15);
// tiles to map:

L.tileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png', {
    attribution: 'sdfsd',
    maxZoom: 18,
}).addTo(mymap);

//marker format
var houseIcon = L.Icon.extend({
  options: {
  shadowUrl: 'static/symbols/shadow.png',

  iconSize:     [38, 95], // size of the icon
  shadowSize:   [38, 50], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [6, 52],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
}
    });

//markers
var house1Icon = new houseIcon({iconUrl: 'static/symbols/symbol1.png'});
var house2Icon = new houseIcon({iconUrl: 'static/symbols/symbol2.png'});
var house3Icon = new houseIcon({iconUrl: 'static/symbols/symbol3.png'});

var markersarray = [house1Icon, house2Icon, house3Icon];
// mansions
/*
var schinasi = L.marker([40.803226, -73.969144], {icon: house1Icon}).addTo(mymap);
schinasi.bindPopup("Schinasi Mansion.");
schinasi.on("click", test);

var rivermansion = L.marker([40.802216, -73.969998], {icon: house2Icon}).addTo(mymap);
rivermansion.bindPopup("River Mansion.");

var davis = L.marker([40.801809, -73.970240], {icon: house3Icon}).addTo(mymap);
davis.bindPopup("Borchardt House.");
*/
var mansions = [
  ["Schinasi Mansion", 40.803226, -73.969144, "A marble behemoth."],
  ["River Mansion", 40.802216, -73.969998, "Beautiful brick mansion."],
  ["Borchardt House", 40.801809, -73.970240, "Beaux Arts beauty."],
  ["Rice Mansion", 40.791671508359755, -73.97850638679263, "One of two freestanding mansions on Riverside Drive."],
  ["266 West End", 40.78021464088023, -73.9840054901639, "A limestone beauty with glass roof."]
]

//iterate through array of icon choices
// var j = 0;
// for (var i=0; i < mansions.length; i++){
//
//   if (j > 2){j = 0;}
// //populate map with items from mansions
//   var item = mansions[i];
//   var iconmark = markersarray[j];
//
//   marker = new L.marker([item[1], item[2]], {
//     icon: iconmark
//   }).bindPopup(item[0]).addTo(mymap);
//   marker.on("click", test(item[3]));
//   j++;
// }

//this is supposed to replace the sidebar text with the associated house description each time a marker is clicked,
//instead it just replaces the text while the map is populating and then it's done
//how do i get it to work?
//i think i need to pass an ID for each marker onclick, and then get the associated info from my mansions list somehow.

function test(text){

  const lit = text
  const u = document.querySelector('p');
  const description = document.createElement('p');
  description.innerHTML = lit;
  console.log(description)
  u.replaceWith(description);
}

//clicks

// add geojson
// from here https://gis.stackexchange.com/questions/68489/loading-external-geojson-file-into-leaflet-map

fetch('beauxartsdata')
.then(function(response) {
return response.json();
})
.then(function(data) {
L.geoJSON(data, {onEachFeature: onEachFeature}).addTo(mymap);
});

//got this from https://codepen.io/dagmara223/pen/BVBGKG

function onEachFeature(feature, layer) {
  layer.on('click', function(e) {
    const image = document.createElement('img');
    image.src = feature.properties.Images;
    image.width = "300";


    $(".name").html(feature.properties.Name);
    $(".image").html(image);
    $(".description").html(feature.properties.Description);
  });
}

//add elements to sidebar


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}


mymap.on('click', onMapClick);
