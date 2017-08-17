angular.module("myApp", ["storeProducts", "avatar", "ngRoute"]);

angular.module("myApp").config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) { //$locationProvider.html5Mode(true);
    $routeProvider.when("/", {
        templateUrl: "templates/main.html"
    }).when("/page1", {
        templateUrl: "templates/page1.html"
    }).when("/page2", {
        templateUrl: "templates/page2.html",
        controller: function () {}
    });
}])

angular.module("myApp").controller(
    "myController", ['$scope', '$http', 'AvatarFactory', function ($scope, $http, AvatarFactory) {
        $scope.Register = function () {
            firebase.auth().createUserWithEmailAndPassword($scope.email, $scope.password).catch(function (error) {
                varerrorCode = error.code;
                varerrorMessage = error.message; //...
            });
        }
        $scope.Login = function () {
            firebase.auth().signInWithEmailAndPassword($scope.email, $scope.password).catch(function (error) {
                varerrorCode = error.code;
                varerrorMessage = error.message; //...
            });
        }
        $scope.Logout = function () {
            firebase.auth().signOut();
        }
        $scope.OnAuthStateChanged = firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                $scope.authenticated = true;
                $scope.$apply();
            } else {
                $scope.authenticated = false;
                $scope.$apply();
            }
        })
        
        $scope.Avatar = AvatarFactory;

        $http.get("data/products.json").then(function (result) {
            $scope.Model = result.data;
        }, function (error) {
            console.log(error.message);
        });
                    }]
);
