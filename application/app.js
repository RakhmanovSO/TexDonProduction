"use strict";

// =================== CONTROLLERS =================== //

import MainController from './controllers/MainController';

// ==================== SERVICES ===================== //
import CategoryService from './services/categoryService';
import SubcategoryService from './services/subcategoryService';
import ProductService from './services/productService';
import NewsService from './services/newsService';
import FirmInfoService from "./services/firmInfoService";



// ===================== FILTERS ===================== //


// =================== DERECTIVES =================== //


angular.module( 'TexDon.controllers' , []);
angular.module( 'TexDon.filters' , []);
angular.module( 'TexDon.services' , []);
angular.module( 'TexDon.directives' , []);
angular.module('TexDon.constants' , []);

angular.module('TexDon.controllers').controller('MainController' , [
    '$scope' ,
    'CategoryService',
    'SubcategoryService',
    'ProductService',
    'NewsService',
    'FirmInfoService',
    MainController ]);

angular.module( 'TexDon.services')
    .service('CategoryService',['$http', 'PARAMS', CategoryService]);

angular.module( 'TexDon.services')
    .service('SubcategoryService',['$http', 'PARAMS', SubcategoryService]);

angular.module( 'TexDon.services')
    .service('ProductService',['$http', 'PARAMS', ProductService]);

angular.module( 'TexDon.services')
    .service('NewsService',['$http', 'PARAMS', NewsService]);


angular.module( 'TexDon.services')
    .service('FirmInfoService',['$http', 'PARAMS', FirmInfoService]);



angular.module('TexDon.services')
    .constant('PARAMS', {
        SERVER_URL: `/TexDon/index.php?`,
        GET_NEWS_URL:`ctrl=NewsApi&act=GetNewsList`,
        GET_ALL_CATEGORIES_URL:`ctrl=CategoryApi&act=GetAllCategory`,
        GET_SUBCATEGORY_BY_CATEGORY_ID_URL:`ctrl=SubcategoryApi&act=GetAllSubcategories`,
        GET_PRODUCTS_BY_SUBCATEGORY_ID_URL:`ctrl=ProductApi&act=GetProductsList`,
        GET_FIRM_INFO_URL:`ctrl=InfoFirmApi&act=GetFirmInfo`,

});


let app = angular.module('TexDon', [
    'angular-loading-bar',
    'LocalStorageModule',
    'TexDon.filters',
    'TexDon.services',
    'TexDon.controllers',
    'TexDon.directives',
    'TexDon.constants',
    'ngRoute',
    'ui.router'
]);


app.config([
    '$locationProvider',
    '$stateProvider' ,
    '$urlRouterProvider' ,
    'localStorageServiceProvider' ,
    'cfpLoadingBarProvider' ,
    ($locationProvider , $stateProvider, $urlRouterProvider, localStorageServiceProvider, cfpLoadingBarProvider) => {

        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/home');

        cfpLoadingBarProvider.includeSpinner = true;
        cfpLoadingBarProvider.includeBar = true;

        localStorageServiceProvider.setStorageCookie(7, '/');
        localStorageServiceProvider.setStorageCookieDomain('localhost');

        $stateProvider.state('home' , {

            'url': '/home',
            'views':{
                "header": {
                    "templateUrl":"templates/header.html",
                },
                "content": {
                    'templateUrl':"templates/home.html",
                    'controller': ['$scope', 'NewsService', 'FirmInfoService', 'news', 'firmInfo', function( $scope , NewsService ,FirmInfoService, news, firmInfo){

                        $scope.news = news;
                        $scope.firmInfo = firmInfo;
                        console.log($scope.news)
                        console.log($scope.firmInfo)

                    } ],
                },
                "footer": {
                    'templateUrl':"templates/footer.html",
                }

            },

            'resolve': {

                'news': [ 'NewsService' , '$stateParams' , function( NewsService , $stateParams){
                    return NewsService.getNews();
                } ],
                'firmInfo': [ 'FirmInfoService' , '$stateParams' , function( FirmInfoService, $stateParams){
                    return FirmInfoService.getFirmInfo();
                } ]
            }

        }); // stateProvider.state('home')

        $stateProvider.state('category' , {

            'url': '/category',
            'views':{
                "header": {
                    'templateUrl':"templates/header.html",
                },
                "content": {
                    "templateUrl":"templates/category/category.html",
                    'controller': ['$scope', 'CategoryService','category', function ($scope, CategoryService, category) {

                        $scope.category = category;

                        console.log($scope.category)
                    }],
                },
                "footer": {
                    'templateUrl':"templates/footer.html",
                }
            },
            'resolve':{
                'category':['CategoryService', '$stateParams' , function (CategoryService, $stateParams) {
                    return CategoryService.getCategories();
                }]
            }

        });//stateProvider.state('category')


        $stateProvider.state('subcategory' , {

            'url': '/subcategory/:id',
            'views':{
                "header": {
                    'templateUrl':"templates/header.html",
                },
                "content": {
                    "templateUrl":"templates/subcategory/subcategory.html",
                    'controller': ['$scope', 'SubcategoryService','subcategory', function ($scope, SubcategoryService, subcategory) {

                        $scope.subcategory = subcategory;

                        console.log($scope.subcategory)
                    }],
                },
                "footer": {
                    'templateUrl':"templates/footer.html",
                }
            },
            'resolve':{
                'subcategory':['SubcategoryService', '$stateParams' , function (SubcategoryService, $stateParams) {
                    return SubcategoryService.getSubcategoryByCategoryId($stateParams.id);
                }]
            }

        });// stateProvider.state('subcategory')


        $stateProvider.state('product' , {

            'url': '/product/:id',
            'views':{
                "header": {
                    'templateUrl':"templates/header.html",
                },
                "content": {
                    "templateUrl":"templates/product/product.html",
                    'controller': ['$scope', 'localStorageService', 'ProductService','product', function ($scope, localStorageService , ProductService, product) {

                        $scope.products = product;

                        localStorageService.set('cart' , [
                            {
                                productID: 1,
                                amount: 2
                            }
                        ]);

                        let cart = localStorageService.get('cart');

                        console.log('cart' , cart);

                        if( cart ){

                            $scope.products.forEach( function ( product ) {

                                let p = cart.find( pr => +pr.productID  === +product.productID );

                                if( p ){

                                    product.isInCart = true;

                                }//if
                                else{

                                    product.isInCart = false;

                                }//else

                            } );


                        }//if


                        console.log($scope.products);

                    }],
                },
                "footer": {
                    'templateUrl':"templates/footer.html",
                }
            },
            'resolve':{
                'product':['ProductService', '$stateParams' , function (ProductService, $stateParams) {
                    return ProductService.getProductsBySubcategoryId($stateParams.id);
                }]
            }

        });// stateProvider.state('product')



    } ] );


app.run(
    [
    '$rootScope', '$state', '$stateParams',
     function ($rootScope, $state, $stateParams) {
         
     }   
]);


