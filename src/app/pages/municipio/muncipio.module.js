(function() {
    'use strict'

    angular.module('SIMAZE.pages.municipio', [
        'SIMAZE.pages.municipio.c_residencia',
        'SIMAZE.pages.municipio.ed_residencia',
        'SIMAZE.pages.municipio.requisicao'

    ]).config(routeConfig);

    /** @ingInject*/
    function routeConfig($stateProvider) {
        $stateProvider
            .state('municipio', {
                url: '/municipio',
                abstract: true,
                template: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
                title: 'Município',
                sidebarMeta: {
                    icon: 'fa fa-bank',
                    order: 2,
                },
            });

    }
})();
