(function () {
  'use strict';

  angular.module('SIMAZE.pages', [
    'ui.router',

    'SIMAZE.pages.dashboard',
    'SIMAZE.pages.municipio',
    'SIMAZE.pages.atcampo',
    'SIMAZE.pages.suporte'

  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/dashboard');
    }
})();
