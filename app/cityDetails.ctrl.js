(function(){
	angular
		.module('travel')
		.controller('CityDetailsCtrl', CityDetailsCtrl);


function CityDetailsCtrl($scope,citySrv,$routeParams,$location, $http, city){
	var citydetailsVm = this;

	citydetailsVm.city = city;
	citydetailsVm.Lat = parseFloat(citydetailsVm.city.Lat);
	citydetailsVm.Lng = parseFloat(citydetailsVm.city.Lng);

	citydetailsVm.click = function(){
		$location.path("/home");
		};

	var mapsDiv = document.getElementById('maps');
	citydetailsVm.map = new google.maps.Map(mapsDiv, {
            center: {lat: citydetailsVm.Lat, lng: citydetailsVm.Lng},
            zoom: 11,
        });

	citydetailsVm.url = "http://forecast.io/embed/#lat="+citydetailsVm.Lat+"&lon="+citydetailsVm.Lng+"&name="+citydetailsVm.city.City+"&units=ca";


	citydetailsVm.myInterval = 4000;
	citydetailsVm.noWrapSlides = false;
	citydetailsVm.active = 0;
	
	}
})();
