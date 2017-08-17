angular.module("avatar", []);

angular.module("avatar").factory("AvatarFactory", function() {
    var size = "80";
    var url = "http://en.gravatar.com/avatar/";
    
    return {
        generate: function(email) {
            return url + CryptoJS.MD5(email) + "?size=" + size;
        }
    };
});