(function() {
    'use strict';

    angular.module('SIMAZE.pages.atcampo', [])
        .config(routeConfig);

        /** @ngInject */
        function routeConfig($stateProvider) {
            $stateProvider
                .state('atcampo', {
                    url: '/atcampo',
                    templateUrl: 'app/pages/atcampo/atcampo.html',
                    title: 'Atividade de Campo',
                    sidebarMeta: {
                        icon: 'fa fa-newspaper-o',
                        order: 1,
                    },
                });
        }
})();
