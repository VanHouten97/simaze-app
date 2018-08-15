(function() {
    'use strict';

    angular.module('SIMAZE.pages.dashboard')
        .controller('metaTrabalhoCtrl', metaTrabalhoCtrl);

    /** @ngInject */
    function metaTrabalhoCtrl($scope) {
        $scope.meta_d = 23;
        $scope.meta_s = 76;
        $scope.meta_m = 51;
    }
})();
