(function() {
    'use strict';

    angular.module('SIMAZE.pages.dashboard')
        .directive('metaTrabalho', metaTrabalho);

    /** @ngInject */
    function metaTrabalho() {
        return {
            restrict: 'E',
            templateUrl: 'app/pages/dashboard/meta_trab/meta_trab.html',
            controller: 'metaTrabalhoCtrl'
        };
    }
})();
