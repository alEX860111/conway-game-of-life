module.exports = function(config) {
	config.set({

		basePath: "../",

		files: [
			"public/bower_components/angular/angular.min.js",
			"public/bower_components/underscore/underscore-min.js",
			"public/bower_components/angular-mocks/angular-mocks.js",
			"public/js/**/*.js",
			"test/unit/**/*.js"
		],

		frameworks: ["jasmine"],

		browsers: ["Chrome"],

		plugins: [
			"karma-chrome-launcher",
			"karma-jasmine"
		]

	});
};
