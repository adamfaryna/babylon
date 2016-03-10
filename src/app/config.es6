'use strict';

export default function($stateProvider, $urlRouterProvider, $httpProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/home');

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'app/views/home/home.html',
    controller: 'HomeCtrl'

  }).state('booking', {
    url: '/booking',
    templateUrl: 'app/views/booking/booking.html',
    controller: 'BookingCtrl'
  });

  $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
}
