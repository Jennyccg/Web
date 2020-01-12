var mymap = L.map('mapid').setView([9.9082784,-83.9865866], 13);





var OpenStreetMap_HOT= L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
	accessToken: 'pk.eyJ1Ijoic3RlcGhiZDIyIiwiYSI6ImNrNTQzanVhZzBmZnYzbG53a2RiYmw2MzAifQ.t8U9pqo4-ZOvpTYk-FDUJA'
}).addTo(mymap);


//Catedral
var marker = L.marker([9.9328047,-84.0791596]).addTo(mymap).bindPopup("Catedral Metropolitana de San José<br>San José");

// San pedro

var marker = L.marker([9.9325615,-84.0544059]).addTo(mymap).bindPopup("Iglesia de San Pedro Apostol<br> San Pedro,San José ");

// Tres ríos

var marker = L.marker([9.9082784,-83.9865866]).addTo(mymap).addTo(mymap).bindPopup("Parroquia nuestra Señora del Pilar<br> Tres Ríos, Cartago ");

// Cruz Roja
var cruz = L.icon({
    iconUrl: 'cr.png',
    shadowUrl: '',

    iconSize:     [50, 50], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var marker = L.marker([9.896845, -83.944233], {icon: cruz}).addTo(mymap).bindPopup(" Cruz Roja");

// Taras
var marker = L.marker([9.8746112,-83.9358663]).addTo(mymap).addTo(mymap).bindPopup("Iglesia de San Nicolás de Tolentino <br> Taras, Cartago");

//Basilica
var marker = L.marker([9.86417,-83.91310]).addTo(mymap).addTo(mymap).bindPopup("Basilica nuestra señora de los Angeles<br>Cartago ");



var polygon = L.polygon([
	[9.9328047,-84.0791596],
	[9.9325615,-84.0544059],
	[9.9082784,-83.9865866],
	[9.897204, -83.944254],
	[9.8746112,-83.9358663],
	[9.86417,-83.91310]




]).addTo(mymap);








