var mymap = L.map('mapid').setView([40.802226, -73.969144], 18)

// tiles to map:

L.tileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png', {
    attribution: 'sdfsd',
    maxZoom: 18,
}).addTo(mymap);



//markers
var house1Icon = L.icon({
    iconUrl: 'static/symbols/symbol1.png',
    shadowUrl: 'static/symbols/shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [38, 50], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [6, 52],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


var house2Icon = L.icon({
    iconUrl: 'static/symbols/symbol2.png',
    shadowUrl: 'static/symbols/shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [38, 50], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [6, 52],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


var house3Icon = L.icon({
    iconUrl: 'static/symbols/symbol3.png',
    shadowUrl: 'static/symbols/shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [38, 50], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [6, 52],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


var schinasi = L.marker([40.803226, -73.969144], {icon: house1Icon}).addTo(mymap);
schinasi.bindPopup("Schinasi Mansion.").openPopup();

var rivermansion = L.marker([40.802216, -73.969998], {icon: house2Icon}).addTo(mymap);
rivermansion.bindPopup("River Mansion.").openPopup();

var davis = L.marker([40.801809, -73.970240], {icon: house3Icon}).addTo(mymap);
davis.bindPopup("Borchardt House.").openPopup();
// mansions
