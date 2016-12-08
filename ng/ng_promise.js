angular.module('myapp', ['user'])
//创建service
.service('user.service', function($http,$q) {
    var userInfo = null;
    return {
        getUserInfo: function () {
            return $q(function (resolve) {
                if (userInfo) {
                    resolve(userInfo);
                }else {
                    $http.get('/user/getProfile', {}).then(function (resp) {
                        userInfo = {
                            userId:resp.data.user.id,
                            name:resp.data.user.name,
                            group_id:resp.data.groups[0].id,
                            supervisor_id:resp.data.groups[0].supervisor_id,
                        };
                        resolve(userInfo);
                    });
                }
            });
        }
    };
})
//使用这个service
.controller('xxx',['user.service',function (service) {
    service.getUserInfo().then(function (userInfo) {
        console.log(userInfo);
    });
}]);