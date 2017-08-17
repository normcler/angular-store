angular.module("storeProducts", []);

//camel casing in declaration of storePanels, snake casing when it's called in html
angular.module("storeProducts").directive("storePanels", function(){
    return {
        templateUrl: "templates/store-panels.html",
        controller: function($scope){
            $scope.tab = 1;
            $scope.selectTab = function(newTab) {
                $scope.tab = newTab;
            }
        }
    }
});

angular.module("storeProducts").directive("storeReviews", function(){
    return {
        templateUrl: "templates/store-reviews.html",
        controller: function($scope){
                $scope.newReview = {};
    
                $scope.addReview = function(product) {

                    $scope.reviewForm.body.$setDirty();
                    $scope.reviewForm.author.$setDirty();
                    $scope.reviewForm.stars.$setDirty();

                    if ($scope.reviewForm.$valid) {
                        if (!product.reviews) {
                            product.reviews = [];
                        }
                        product.reviews.push($scope.newReview);

                        firebase.database().ref('/products/'+CryptoJS.MD5(product.name)+'/reviews/'+CryptoJS.MD5($scope.newReview.author)).set($scope.newReview);
                        
                        $scope.newReview = {};
                        $scope.reviewForm.$setPristine();
                    }
            }
        }
    }
});