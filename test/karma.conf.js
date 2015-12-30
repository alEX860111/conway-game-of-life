module.exports = function(config) {
	config.set({

		basePath: "../",

		files: [
			"public/bower_components/angular/angular.min.js",
			"public/bower_components/lodash/lodash.min.js",
			"public/bower_components/angular-mocks/angular-mocks.js",
			"public/js/arrayGenerator.js",
			"public/js/matrixGenerator.js",
			"public/js/cellGenerator.js",
			"public/js/boardGenerator.js",
			"public/js/boardService.js",
			"public/js/app.js",
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
