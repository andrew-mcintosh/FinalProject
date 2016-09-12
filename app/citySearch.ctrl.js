(function(){
	angular
		.module('travel')
		.controller('CitySearchCtrl', CitySearchCtrl);
		

function CitySearchCtrl($location,citySrv) {
	var cityVm = this;

	cityVm.findByCity = findByCity;
	cityVm.notFound = false;
	cityVm.reloadPage = reloadPage;

	cityVm.search = "";

	citySrv.getCities();

	function findByCity(City){
	cityVm.notFound = false;
	console.log(citySrv.cities);
	for (var i=0; i < citySrv.cities.length; i++) {
		if (citySrv.cities[i].City.toLowerCase() === City.toLowerCase()) {
			citySrv.currentCity = citySrv.cities[i];
			$location.path('CityDetails/'+citySrv.cities[i].City);
			return
			}
		}

	cityVm.notFound = true;
	}

	function reloadPage(){
		location.reload();
		};
}

		

})();