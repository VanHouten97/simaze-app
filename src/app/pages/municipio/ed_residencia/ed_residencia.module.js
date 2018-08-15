(function() {
    'use strict';

    angular.module('SIMAZE.pages.municipio.ed_residencia', [])
        .config(routeConfig);

    /** @ingInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('municipio.ed_residencia', {
              url: '/edresidencia',
              templateUrl: 'app/pages/municipio/ed_residencia/ed_residencia.html',
              title: 'Edt. Residência',
              sidebarMeta: {
                  order: 1,
              },
          });
        }
})();
