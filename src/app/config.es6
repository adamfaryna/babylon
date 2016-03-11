'use strict';

export default function($stateProvider, $urlRouterProvider, $httpProvider, $mdThemingProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
    url: '/home',
    templateUrl: 'app/views/home/home.html',
    controller: 'HomeCtrl'

  }).state('booking', {
    url: '/booking',
    templateUrl: 'app/views/booking/booking.html',
    controller: 'BookingCtrl'
  });

  $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

  $mdThemingProvider.definePalette('customPrimary', {
    '50': 'ffebee',
    '100': 'ffcdd2',
    '200': 'ef9a9a',
    '300': 'e57373',
    '400': 'ef5350',
    '500': '806491',
    '600': 'e53935',
    '700': 'd32f2f',
    '800': 'c62828',
    '900': '806491',
    'A100': 'ff8a80',
    'A200': 'ff5252',
    'A400': 'ff1744',
    'A700': 'd50000',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
      '200', '300', '400', 'A100'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });

  $mdThemingProvider.definePalette('customAccent', $mdThemingProvider.extendPalette('indigo', {
    '500': 'ffebee',
    'default': '500'
  }));

  //$mdThemingProvider.definePalette('customWarn', $mdThemingProvider.extendPalette('indigo', {
  //  '200': 'ffebee',
  //  'default': '200'
  //}));

  //$mdThemingProvider.definePalette('customBackground', $mdThemingProvider.extendPalette('', {
    //'200': 'ffebee',
    //'default': '200'
  //}));

  $mdThemingProvider.theme('default')
    .primaryPalette('customPrimary')
    .accentPalette('customAccent')
    .backgroundPalette('grey');
      //.warnPalette('customWarn');
}
