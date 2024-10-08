app.directive('bullets', function($parse) {
    return {
        restrict: 'E',
        templateUrl: 'htmls/bullets.html',
        scope: {
            items: '=',
            bulletType: '=',
            title: '='
        },
        link: function(scope, element, attrs) {
        }
    };
});

app.directive('customTable', function($parse) {
    return {
        restrict: 'E',
        templateUrl: 'htmls/custom-table.html',
        scope: {
            table: '=',
            comment: '='
        },
        link: function(scope, element, attrs) {            
        }
    };
});

app.directive('breadcrumb', function($parse) {
    return {
        restrict: 'E',
        templateUrl: 'htmls/breadcrumb.html',
        scope: {
            pageTitle: '='
        },
        link: function(scope, element, attrs) {            
        }
    };
});
