/**
 * Created by Leon Stam on 1-12-2015.
 */
describe('Directive: feedback', function() {
  var $scope, $compile, $window;
  beforeEach(function() {
    module('angularJsApp.directives');
    inject(function(_$compile_, _$window_, $rootScope) {
      $compile = _$compile_;
      $window = _$window_;
      $scope = $rootScope.$new();
      spyOn($window, 'alert');
    });
  });

  it('should send feedback to a web service', function() {
    // Arrange
    var element = $compile('<feedback></feedback>')($scope);
    var isolateScope = element.isolateScope();
    // Act
    isolateScope.feedback = { type: 'positive', message: 'super' };
    isolateScope.sendFeedback();
    // Assert
    expect($window.alert).toHaveBeenCalled();
  });

  it('should support printing feedback to the console', function() {
    // Arrange
    var element = $compile('<feedback debug></feedback>')($scope);
    var isolateScope = element.isolateScope();
    // Act
    isolateScope.feedback = { type: 'positive', message: 'super' };
    isolateScope.sendFeedback();
    // Assert
    expect($window.alert).not.toHaveBeenCalled();
  });

});
