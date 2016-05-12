/**
 * Created by 明多牧 on 2016/5/4.
 */
'use strict';


var testApp = angular.module('testApp', ['ngRoute', 'ngResource'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/:id', {
                templateUrl: 'page/testApp.html',
                controller: 'testCtrl'
            });
    })
    .factory(
        'testServe',
        ['$resource',
            function ($resource) {
                return $resource("http://localhost:10086", {}, {
                    post: {
                        method: 'POST',
                        cache: false,
                        isArray: false
                    },
                    get:{
                        method:'GET',
                        cache:false
                    }
                })
            }]
    )
    .controller('testCtrl', function ($scope, $routeParams, testServe) {
        $scope.haha=1;
        testServe.post({}, function (data) {
            console.log(data);
            $scope.name = $routeParams.id + "45"+data.key;
        }, function (data) {
            console.log('Fail' + data)
        });
    });

