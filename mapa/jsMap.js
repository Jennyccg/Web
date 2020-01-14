var mymap = L.map('mapid').setView([9.9082784,-83.9865866], 13);





var OpenStreetMap_HOT= L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
	accessToken: 'pk.eyJ1Ijoic3RlcGhiZDIyIiwiYSI6ImNrNTQzanVhZzBmZnYzbG53a2RiYmw2MzAifQ.t8U9pqo4-ZOvpTYk-FDUJA'
}).addTo(mymap);


//Ruta1
puntosSalida=[
//
{
	"punto":[9.9328047,-84.0791596],
	"nombre":"Catedral Metropolitana de San José<br>San José",
	"icono":"catedral.png"
},
//
{
	"punto":[9.9325615,-84.0544059],
	"nombre":"Iglesia de San Pedro Apostol<br> San Pedro,San José",
	"icono":"sanpedro.png"
},
//
{
	"punto":[9.9082784,-83.9865866],
	"nombre":"Parroquia nuestra Señora del Pilar<br> Tres Ríos, Cartago",
	"icono":"tresri.png"
},
//
{
	"punto":[9.896845, -83.944233],
	"nombre":"Cruz Roja",
	"icono":"cruz.png"
},
//
{
	"punto":[9.8746112,-83.9358663],
	"nombre":"Iglesia de San Nicolás de Tolentino <br> Taras, Cartago",
	"icono":"taras.png"
},
{
	"punto":[9.86417,-83.91310],
	"nombre":"Basilica nuestra señora de los Angeles<br>Cartago",
	"icono":"basilica.png"

},

{
	"punto":[9.856666, -83.932168],
	"nombre":"Sagrado corazón de Jesus<br>Cartago",
	"icono":"sagrado.png"
},
//
{
	"punto":[9.844363, -83.938037],
	"nombre":"Basilica inmaculada concepción<br> Tejar, Cartago",
	"icono":"tejar.png"
},
//igl
{
	"punto":[9.373836, -83.702701],
	"nombre":"Perez Zeledon",
	"icono":"perez.png"
},
//
{
	"punto":[9.307487, -83.661641],
	"nombre":"San Isidro",
	"icono":"osa.png"
},
//
{
	"punto":[9.669371, -83.852676],
	"nombre":"Cruz Roja",
	"icono":"cruz.png"
},

//
{
	"punto":[9.86417,-83.91310],
	"nombre":"Basilica nuestra señora de los Angeles<br>Cartago",
	"icono":"basilica.png"

}

]

var listadoPuntos=[];
var listadoPuntos2=[];
var listadoPuntos3=[];

puntosSalida.forEach(rut => {
	var [lat,lon]= rut.punto;
	listadoPuntos.push( [lat,lon]);
	var nombre = rut.nombre;
	var imag=rut.icono;

	var cruz = L.icon({
    iconUrl: imag, 
    iconSize: [50, 50]  
   
	});

	var marker = L.marker([lat,lon],{icon: cruz}).addTo(mymap).bindPopup(nombre);
});

var polygon = L.polygon(listadoPuntos).addTo(mymap);
for (var k=0; k<6; k++ ){
	listadoPuntos2[k]=listadoPuntos[k];

}

var polygon = L.polygon(listadoPuntos2).addTo(mymap);


var trayecto = [];

listadoPuntos2.forEach(rut => {
    trayecto.push(L.latLng(rut[0], rut[1]));
})

L.Routing.control({
    waypoints: trayecto
}).addTo(mymap);





//--------------------------------------

for (var k=6; k<12; k++ ){
	listadoPuntos3[k-6]=listadoPuntos[k];
	

}


var polygon = L.polygon(listadoPuntos3).addTo(mymap);



listadoPuntos3.forEach(rut => {
    trayecto.push(L.latLng(rut[0], rut[1]));
})

L.Routing.control({
    waypoints: trayecto
}).addTo(mymap);





//--------------------------------------------------------------------



