(function(){

	angular
		.module('travel')
		.filter('firstLetterFilter', firstLetterFilter);

		function firstLetterFilter() {
				return function(firstLetterFilter){
					console.log(firstLetterFilter);
					return firstLetterFilter.charAt(0).toUpperCase() + firstLetterFilter.substr(1, firstLetterFilter.length);
				};
			}
			return firstLetterFilter;
		})();