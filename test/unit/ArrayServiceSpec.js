describe('ArrayService', function() {

  var service;

  beforeEach(function() {
    module('services');
  });

  beforeEach(inject(function(arrayService) {
    service = arrayService;
  }));

  describe('createArray', function() {
    it('should create an array with two strings', function() {
      expect(service.createArray(2, function() {
        return "test";
      })).toEqual(
        ["test", "test"]);
    });

    it('should create an array with two numbers', function() {
      expect(service.createArray(2, function() {
        return 1;
      })).toEqual(
        [1, 1]);
    });
  });

  describe('createMatrix', function() {
    it('should create a two dimensional matrix', function() {
      expect(service.createMatrix(2, function() {
        return 1;
      })).toEqual([
        [1, 1],
        [1, 1]
      ]);
    });
  });





});
