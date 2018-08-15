(function() {
    'use strict';

    angular.module('SIMAZE.pages.municipio.c_residencia', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('municipio.c_residencia', {
              url: '/cresidencia',
              templateUrl: 'app/pages/municipio/c_residencia/c_residencia.html',
              title: 'Cad. Residência',
              sidebarMeta: {
                  order: 0,
              },
          });
        }
})();
