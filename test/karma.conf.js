module.exports = function(config) {
	config.set({

		basePath: "../",

		files: [
			"public/bower_components/angular/angular.min.js",
			"public/bower_components/lodash/dist/lodash.min.js",
			"public/bower_components/angular-mocks/angular-mocks.js",
			"public/js/game.js",
			"public/js/patterns.js",
			"public/js/rules.js",
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
