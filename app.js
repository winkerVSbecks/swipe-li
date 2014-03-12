'use strict';

angular.module('swipeLiDemo', [
  'angularSwipeLi'
])
  .controller('MainCtrl', ['$scope', function ($scope) {

    $scope.list = [
    {
      name: 'Spectacles',
      doInvert: false
    },
    {
      name: 'Giraffe',
      doInvert: false
    },
    {
      name: 'Turtle',
      doInvert: false
    },
    {
      name: 'Shark',
      doInvert: false
    },
    {
      name: 'Lamp',
      doInvert: false
    },
    {
      name: 'Chocolate',
      doInvert: false
    },
    {
      name: 'Beef',
      doInvert: false
    },
    {
      name: 'Drawer',
      doInvert: false
    },
    {
      name: 'Brocolli',
      doInvert: false
    },
    {
      name: 'Tomato',
      doInvert: false
    },
    {
      name: 'Plate',
      doInvert: false
    },
    {
      name: 'Zebra',
      doInvert: false
    }];

    $scope.doInvert = false;

    $scope.done = function (item) {
      console.log('%s marked as accepted!', item);
      item.doInvert = true;
    };

    $scope.skip = function (item) {
      console.log('%s marked as rejected!', item);
      item.doInvert = true;
    };

  }]);