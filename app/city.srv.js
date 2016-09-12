(function(){
	angular
		.module('travel')
		.service('citySrv', CityService);

	function CityService($http){
		var self = this;

		self.cities = [];
		self.getCities = getCities;
		self.getCity = getCity;
		self.currentCity = self.cities[0];

		function getCities(){
			return $http.get('/api/cities')
			.then(function(response){
				self.cities = response.data;
				return response.data;
			});
		};

		function getCity(city){
			console.log(city);
			return $http.get('/api/getcity/'+city)
			.then(function(response){
				self.currentCity = response.data;
				return response.data;
			});
		};
	}
})();
