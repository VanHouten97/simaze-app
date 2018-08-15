(function() {
    'use strict';

    angular.module('SIMAZE.pages.dashboard')
        .controller('dashboardMapsCtrl', dashboardMapsCtrl);

        /** @ngInject */
        function dashboardMapsCtrl($timeout) {
            function initialize() {
                L.Icon.Default.imagePath = 'assets/img/theme/vendor/leaflet/dist/images';
                var map = L.map(document.getElementById('leaflet-map')).setView([-19.444689, -44.246002], 13);
                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                }).addTo(map);

                L.marker([-19.444689, -44.246002]).addTo(map);

                map.setZoom(16);
            }

            $timeout(function(){
            initialize();
            }, 100);
        }
})();
