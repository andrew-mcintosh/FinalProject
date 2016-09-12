(function(){

	angular
		.module('travel', ['ngRoute', 'ui.bootstrap']);

	angular
		.module('travel')
		.config(function($routeProvider,$sceDelegateProvider) {

			$routeProvider
				.when('/home', {
					templateUrl:'partials/home.html',
					controller: 'CitySearchCtrl as ctrl',
				})

				.when('/CityDetails/:City', {
					templateUrl: 'partials/Display_page.html',
					controller: 'CityDetailsCtrl as ctrl',
					resolve: {
						city: function(citySrv,$route) {
							console.log($route.current);
							return citySrv.getCity($route.current.params.City).then(function(res){
								console.log(res);
								return res
							})
						}
					}
				})
				.otherwise({
					redirectTo: '/home'
				});

	$sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'http://forecast.io/embed/**'
  		]);
	});
})();