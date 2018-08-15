(function() {
    'use strict';

    angular.module('SIMAZE.pages.municipio.requisicao', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('municipio.requisicao', {
                url: '/requisicao',
                templateUrl: 'app/pages/municipio/requisicao/requisicao.html',
                title: 'Requisições',
                sidebarMeta: {
                    order: 2,
                },
            });
    }
})();
