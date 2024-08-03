var app = angular.module("app", []);

app.controller("AntibiogramController", ['$scope', '$rootScope', '$http', '$timeout', function($scope, $rootScope, $http, $timeout) {    
    const ctrl = this;
    window.ctrl = this;
    ctrl.sections = [];
    ctrl.searchQuery = '';
    ctrl.urlSuffix = window.location.href.indexOf("localhost") > -1 ||
                     window.location.href.indexOf("127.0.0.1") > -1 ? ".html" : "";

    function init() {        
        $http.get('./data/antibiogram.json').then(function(response) {
            ctrl.sections = response.data.sections;
        })
        .catch(function(error) {
            console.log('Error fetching protocols list data file:', error);
        });
    }

    ctrl.openUrl = function(link) {
        window.location.href = link + ctrl.urlSuffix;
    };

    init();
}]);