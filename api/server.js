var express = require('express');
var models = require('./models');


var app = express();
app.use(express.static(__dirname + './../app/'));

app.listen(8080, function() {
	console.log('Server Started  on http://localhost:8080');
	console.log('Press CTRL + C to stop server');
});

//Routes
app.get('/api/cities/',function(request,response){
		models.cities.findAll().then(function(foundAllCities){
			response.json(foundAllCities);
		});
	});

app.get('/api/dataupload/', function(request,response){
      for (var i = 0; i < CITY_DATA.length; i++){
            models.cities.create(CITY_DATA[i]).then(function(city){
                  console.log(city);
            });
      }
      response.json(CITY_DATA);
});

app.get('/api/getcity/:city', function(request,response){
	console.log(request.params);
	var city = {where:{City:request.params.city}};
	models.cities.find(city).then(function(getCity){
		response.json(getCity);
			});
		})

var CITY_DATA = [{
	"Id": "1",
	"City": "Amsterdam",
	"Country": "Netherlands",
	"Lat": "52.3740300",
	"Lng": "4.8896900",
	"Images": "/images/CityImages/amsterdam1.jpg",
}, {
	"Id": "2",
	"City": "Bangkok",
	"Country": "Thailand",
	"Lat": "13.7539800",
	"Lng": "100.5014400",
	"Images": "./images/CityImages/bangkok2.jpg",
}, {
	"Id": "3",
	"City": "Barcelona",
	"Country": "Spain",
	"Lat": "41.3887900",
	"Lng": "2.1589900",
	"Images": "./images/CityImages/barcelona1.jpg",
}, {
	"Id": "4",
	"City": "Beijing",
	"Country": "China",
	"Lat": "39.9075000",
	"Lng": "116.3972300",
	"Images": "./images/CityImages/beijing1.jpg",
}, {
	"Id": "5",
	"City": "Berlin",
	"Country": "Germany",
	"Lat": "52.5243700",
	"Lng": "13.4105300",
	"Images": "./images/CityImages/Berlin2.jpg",
}, {
	"Id": "6",
	"City": "Buenos Aires",
	"Country": "Argentina",
	"Lat": "-34.6131500",
	"Lng": "-58.3772300",
	"Images": "./images/CityImages/buenos-aires1.jpg",
}, {
	"Id": "7",
	"City": "Cairo",
	"Country": "Egypt",
	"Lat": "30.0626300",
	"Lng": "31.2496700",
	"Images": "./images/CityImages/cairo1.jpg",
}, {
	"Id": "8",
	"City": "Cape Town",
	"Country": "South Africa",
	"Lat": "-33.9258400",
	"Lng": "18.4232200",
	"Images": "./images/CityImages/cape-town2.jpg",
}, {
	"Id": "9",
	"City": "Caracas",
	"Country": "Venezuela",
	"Lat": "10.4880100",
	"Lng": "-66.8791900",
	"Images": "./images/CityImages/caracas2.jpg",
}, {
	"Id": "10",
	"City": "Dublin",
	"Country": "Ireland",
	"Lat": "53.3330600",
	"Lng": " -6.2488900",
	"Images": "./images/CityImages/Dublin2.jpg",
}, {
	"Id": "11",
	"City": "Frankfurt",
	"Country": "Germany",
	"Lat": "50.1155200",
	"Lng": "8.6841700",
	"Images": "./images/CityImages/Frankfurt1.jpg",
}, {
	"Id": "12",
	"City": "Havana",
	"Country": "Cuba",
	"Lat": "23.1330200",
	"Lng": "-82.3830400",
	"Images": "./images/CityImages/havana2.jpg",
}, {
	"Id": "13",
	"City": "Helsinki",
	"Country": "Finland",
	"Lat": "60.1695200",
	"Lng": "24.9354500",
	"Images": "./images/CityImages/Helsinki1.jpg",
}, {
	"Id": "14",
	"City": "Hong Kong",
	"Country": "China",
	"Lat": "22.2855200",
	"Lng": "114.1576900",
	"Images": "./images/CityImages/hongkong2.jpg",
}, {
	"Id": "15",
	"City": "London",
	"Country": "England",
	"Lat": "51.5085300",
	"Lng": "-0.1257400",
	"Images": "/images/CityImages/london3.jpg",
}, {
	"Id": "16",
	"City": "Madrid",
	"Country": "Spain",
	"Lat": "40.4165000",
	"Lng": "-3.7025600",
	"Images": "/images/CityImages/madrid1.jpg",
}, {
	"Id": "17",
	"City": "Nairobi",
	"Country": "Kenya",
	"Lat": "-1.2833300",
	"Lng": "36.8166700",
	"Images": "/images/CityImages/nairobi3.jpg",
}, {
	"Id": "18",
	"City": "Paris",
	"Country": "France",
	"Lat": "48.8534100",
	"Lng": "2.3488000",
	"Images": "/images/CityImages/paris1.jpg",
}, {
	"Id": "19",
	"City": "Rio",
	"Country": "Brazil",
	"Lat": "-22.9027800",
	"Lng": "-43.2075000",
	"Images": "/images/CityImages/Rio4.jpg",
}, {
	"Id": "20",
	"City": "Sydney",
	"Country": "Australia",
	"Lat": "-33.8678500",
	"Lng": "151.2073200",
	"Images": "/images/CityImages/sydney_skyline_bridge.jpeg",
}, {
	"Id": "21",
	"City": "Tokyo",
	"Country": "Japan",
	"Lat": "35.6895000",
	"Lng": "139.6917100",
	"Images": "/images/CityImages/Tokyo1.jpg",
}, {
	"Id": "22",
	"City": "Chicago",
	"Country": "United States",
	"Lat": "41.8500300",
	"Lng": "-87.6500500",
	"Images": "/images/CityImages/chicago2.jpg",
}, {
	"Id": "23",
	"City": "Los Angeles",
	"Country": "United States",
	"Lat": "34.0522300",
	"Lng": "-118.2436800",
	"Images": "/images/CityImages/LA1.jpg",
}, {
	"Id": "24",
	"City": "Montreal",
	"Country": "Canada",
	"Lat": "45.5088400",
	"Lng": "-73.5878100",
	"Images": "/images/CityImages/montreal3.jpg",
}, {
	"Id": "25",
	"City": "New York City",
	"Country": "United States",
	"Lat": "40.7142700",
	"Lng": "-74.0059700",
	"Images": "/images/CityImages/NYC-Skyline.jpg",
}, {
	"Id": "26",
	"City": "San Francisco",
	"Country": "United States",
	"Lat": "37.7749300",
	"Lng": "-122.4194200",
	"Images": "/images/CityImages/sanfran1.jpg",
}, {
	"Id": "27",
	"City": "Toronto",
	"Country": "Canada",
	"Lat": "43.7001100",
	"Lng": "-79.4163000",
	"Images": "/images/CityImages/toronto2.jpg",
}, {
	"Id": "28",
	"City": "Vancouver",
	"Country": "Canada",
	"Lat": "49.2496600",
	"Lng": "-123.1193400",
	"Images": "/images/CityImages/vancouver1.jpg",
}, {
	"Id": "29",
	"City": "Washington DC",
	"Country": "United States",
	"Lat": "38.8951100",
	"Lng": "-77.0363700",
	"Images": "/images/CityImages/washington2.jpg",
}, {
	"Id": "30",
	"City": "Shanghai",
	"Country": "China",
	"Lat": "31.2222200",
	"Lng": "121.4580600",
	"Images": "/images/CityImages/shanghai2.jpg",
}]