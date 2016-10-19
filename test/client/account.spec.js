'use strict';
//comment for integration
describe('account', function () {
  describe('AccountController', function() {
    beforeEach(module('lvmApp'));
  
    var $controller;
  
    beforeEach(inject(function(_$controller_){
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $controller = _$controller_;
    }));
  
    describe('form.changePassword();', function() {
      it('should update the password on success', function() {
        var $scope = {};
        var thenObj = jasmine.createSpyObj('then', ['then']);
        thenObj.then.and.callFake(function (success, error) {
          var response = {
            data : []
          };
          return success(response);
        });
        var $http = jasmine.createSpy('$http').and.returnValue(thenObj);
        var controller = $controller('AccountController', { $scope: $scope, $http: $http });
        $scope.password = 'testing';
        controller.updatePassword('test');
        expect($http).toHaveBeenCalledWith(jasmine.any(Object));
        expect(thenObj.then).toHaveBeenCalledWith(jasmine.any(Function), jasmine.any(Function));
        expect(controller.updateStatus).toEqual(true);
        expect($scope.password).toEqual("");
      }); 
      
      it('should report an error if unable to change the password', function() {
        var $scope = {};
        var thenObj = jasmine.createSpyObj('then', ['then']);
        thenObj.then.and.callFake(function (success, error) {
          var response = {data: 'A new password is required.'};
          return error(response);
        });
        var $http = jasmine.createSpy('$http').and.returnValue(thenObj);
        var controller = $controller('AccountController', { $scope: $scope, $http: $http });
        $scope.password = 'testing';
        controller.updatePassword('test');
        expect($http).toHaveBeenCalledWith(jasmine.any(Object));
        expect(thenObj.then).toHaveBeenCalledWith(jasmine.any(Function), jasmine.any(Function));
        expect(controller.updateStatus).toEqual(false);
        expect(controller.errorMessage).toEqual('A new password is required.');
        expect($scope.password).toEqual('testing');
      });
    });
  });
});
