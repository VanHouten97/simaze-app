(function() {
  'use strict';

  angular.module('SIMAZE.pages.dashboard', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'app/pages/dashboard/dashboard.html',
          title: 'Painel de Controle',
          sidebarMeta: {
            icon: 'fa fa-bar-chart',
            order: 0,
          },
        });
  }

})();
