'use strict';

angular.module('main', ['ui.router', 'ngMaterial'])
  .config(require('./config').default)
  //.run(require('./run').default)
  .constant('componentsPath', require('./constans').componentsPath)
  .controller('HomeCtrl', require('./views/home/home.controller').default)
  .controller('BookingCtrl', require('./views/booking/booking.controller').default)
  .directive('faStethoscopeImg', require('./components/stethoscopeImg/stethoscope.directive').default)
  .directive('faVirtualDocImg', require('./components/virtualDocImg/virtualDocImg.directive').default);
