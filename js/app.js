var products = [
    {
        name: "Dodecahedron",
        price: 2.95,
        description: "Some gems have hidden qualities beyond their lustre, beyond their shine... Dodecahedron is one of those gems.",
        canPurchase: false,
        images: [
            {
                full: "gem-01.gif"
            }
        ]
    },
    {
        name: "Pentagonal",
        price: 5.95,
        description: "The pentagonal gem's origin is unknown, hence its low price.",
        canPurchase: false,
        images: [
            {
                full: "gem-02.gif"
            }
        ]
    }
];

angular.module("myApp", []);

angular.module("myApp").controller("myController", function($scope){
    $scope.Model = products;
});

angular.module("myApp").controller("panelController", function($scope){
    $scope.tab = 1;
    $scope.selectTab = function(newTab) {
        $scope.tab = newTab;
    }
});

angular.module("myApp").directive("myDirective", function(){
    return {
        template: "<div>this is a custom directive</div>"
    };
});