(function() {
  'use strict';

  angular.module('SIMAZE.pages.suporte', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('suporte', {
          url: '/suporte',
          templateUrl: 'app/pages/suporte/suporte.html',
          title: 'Suporte',
          sidebarMeta: {
            icon: 'fa fa-support',
            order: 3,
          },
        });
  }

})();
