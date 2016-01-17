describe("stepControl", function() {

	var scope;

	beforeEach(module("myapp"));

	beforeEach(inject(function($templateCache) {
		$templateCache.put("views/stepControl.html", "<div></div>");
	}));

	beforeEach(inject(function($compile, $rootScope) {
		$rootScope.min = 1;
		$rootScope.max = 3;
		$rootScope.step = 3;
		$rootScope.value = 2;
		var element = $compile("<step-control min='min' max='max' step='step' value='value'></step-control>")($rootScope);
		$rootScope.$digest();
		scope = element.isolateScope();
	}));

	describe("dec()", function() {
		it("should decrement the value", function() {
			expect(scope.value).toEqual(2);
			scope.dec();
			expect(scope.value).toEqual(1);
			scope.dec();
			expect(scope.value).toEqual(1);
		});
	});

	describe("inc()", function() {
		it("should increment the value", function() {
			expect(scope.value).toEqual(2);
			scope.inc();
			expect(scope.value).toEqual(3);
			scope.inc();
			expect(scope.value).toEqual(3);
		});
	});

});
