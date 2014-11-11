describe('myctrl', function() {

  var scope;

  beforeEach(function() {
    module('myapp');
  });

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    $controller('myctrl', {
      $scope: scope
    });
  }));

  it('', function() {
    expect(scope.board.length).toEqual(5);
  });

});
