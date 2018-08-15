(function() {
    'use strict';

    angular.module('SIMAZE.pages.dashboard')
        .directive('dashboardMaps', dashboardMaps);

    /** @ngInject */
    function dashboardMaps() {
        return {
            restrict: 'E',
            templateUrl: 'app/pages/dashboard/maps/maps.html',
            controller: 'dashboardMapsCtrl'
        };
    }
})();
