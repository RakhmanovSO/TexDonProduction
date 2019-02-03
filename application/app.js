"use strict";

// =================== CONTROLLERS =================== //

import MainController from './controllers/MainController';

// ==================== SERVICES ===================== //
import CategoryService from './services/categoryService';
import SubcategoryService from './services/subcategoryService';
import ProductService from './services/productService';
import NewsService from './services/newsService';
import FirmInfoService from "./services/firmInfoService";
import AboutProductService from "./services/aboutProductService";
import AboutNewsService from "./services/aboutNewsService";
import СontactsService from "./services/contactsService";
import CartService from "./services/cartService";





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
    'AboutProductService',
    'AboutNewsService',
    'СontactsService',
    'CartService',
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


angular.module( 'TexDon.services')
    .service('AboutProductService',['$http', 'PARAMS', AboutProductService]);


angular.module( 'TexDon.services')
    .service('AboutNewsService',['$http', 'PARAMS', AboutNewsService]);


angular.module( 'TexDon.services')
    .service('СontactsService',['$http', 'PARAMS', СontactsService]);

angular.module( 'TexDon.services')
    .service('CartService',['$http', 'PARAMS', CartService]);





angular.module('TexDon.services')
    .constant('PARAMS', {

        SERVER_URL: `/TexDon/index.php?`,
        GET_NEWS_URL:`ctrl=NewsApi&act=GetNewsList`,
        GET_ALL_NEWS_MENU_URL:`ctrl=NewsApi&act=GetAllNewsForMenu`,
        GET_ALL_CONTACTS_URL:`ctrl=ContactsApi&act=GetAllContacts`,
        GET_NEWS_BY_ID_URL:`ctrl=NewsApi&act=GetNewsByID`,
        GET_ALL_CATEGORIES_URL:`ctrl=CategoryApi&act=GetAllCategory`,
        GET_SUBCATEGORY_BY_CATEGORY_ID_URL:`ctrl=SubcategoryApi&act=GetAllSubcategories`,
        GET_PRODUCTS_BY_SUBCATEGORY_ID_URL:`ctrl=ProductApi&act=GetProductsList`,
        GET_FIRM_INFO_URL:`ctrl=InfoFirmApi&act=GetFirmInfo`,
        GET_MORE_ABOUT_PRODUCT_URL:`ctrl=ProductApi&act=GetAboutProduct`,

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

                    'controller': ['$scope', 'NewsService', 'news' , function( $scope , NewsService , news){

                        $scope.newsSingle = news;

                        console.log($scope.newsSingle)

                    } ],

                },
                "content": {
                    'templateUrl':"templates/home.html",
                            'controller': ['$scope',  'FirmInfoService',  'firmInfo' , function( $scope , FirmInfoService,  firmInfo){


                            $scope.firmInfo = firmInfo;
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



        $stateProvider.state('news' , {

            'url': '/news',
            'views':{
                "header": {
                    'templateUrl':"templates/header.html",
                    'controller': ['$scope', 'NewsService', 'news' , function( $scope , NewsService , news){

                        $scope.newsSingle = news;

                        console.log($scope.newsSingle)

                    } ],

                },
                "content": {
                    "templateUrl":"templates/news/news.html",
                    'controller': ['$scope', 'NewsService','news', function ($scope, NewsService, news) {

                        $scope.news = news;

                        console.log($scope.news)
                    }],
                },
                "footer": {
                    'templateUrl':"templates/footer.html",
                }
            },
            'resolve':{
                'newsSingle': [ 'NewsService' , '$stateParams' , function( NewsService , $stateParams){
                    return NewsService.getNews();
                } ],
                'news':['NewsService', '$stateParams' , function (NewsService, $stateParams) {
                    return NewsService.getAllNewsListMenu();
                }]
            }

        });//stateProvider.state('news')




        $stateProvider.state('contacts' , {

            'url': '/contacts',
            'views':{
                "header": {
                    'templateUrl':"templates/header.html",
                    'controller': ['$scope', 'NewsService', 'news' , function( $scope , NewsService , news){

                        $scope.newsSingle = news;

                        console.log($scope.newsSingle)

                    } ],

                },
                "content": {
                    "templateUrl":"templates/contacts/contacts.html",
                    'controller': ['$scope', 'СontactsService','contacts', function ($scope, СontactsService, contacts) {

                        $scope.contact = contacts;

                        console.log($scope.contact)
                    }],
                },
                "footer": {
                    'templateUrl':"templates/footer.html",
                }
            },
            'resolve':{
                'news': [ 'NewsService' , '$stateParams' , function( NewsService , $stateParams){
                    return NewsService.getNews();
                } ],
                'contacts':['СontactsService', '$stateParams' , function (СontactsService, $stateParams) {
                    return СontactsService.getСontacts();
                }]
            }

        });//stateProvider.state('contacts')




        $stateProvider.state('category' , {

            'url': '/category',
            'views':{
                "header": {
                    'templateUrl':"templates/header.html",

                    'controller': ['$scope', 'NewsService', 'news' , function( $scope , NewsService , news){

                        $scope.newsSingle = news;

                        console.log($scope.newsSingle)

                    } ],

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

                'news': [ 'NewsService' , '$stateParams' , function( NewsService , $stateParams){
                    return NewsService.getNews();
                } ],

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

                    'controller': ['$scope', 'NewsService', 'news' , function( $scope , NewsService , news){

                        $scope.newsSingle = news;

                        console.log($scope.newsSingle)

                    } ],

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

                'news': [ 'NewsService' , '$stateParams' , function( NewsService , $stateParams){
                    return NewsService.getNews();
                } ],

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

                    'controller': ['$scope', 'NewsService', 'news' , function( $scope , NewsService , news){

                        $scope.newsSingle = news;

                        console.log($scope.newsSingle)

                    } ],

                },
                "content": {
                    "templateUrl":"templates/product/product.html",
                    'controller': ['$scope', 'localStorageService', 'ProductService','product', function ($scope, localStorageService , ProductService, product) {

                        $scope.products = product;

                        console.log($scope.products);


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

                    }],
                },
                "footer": {
                    'templateUrl':"templates/footer.html",
                }
            },
            'resolve':{

                'news': [ 'NewsService' , '$stateParams' , function( NewsService , $stateParams){
                    return NewsService.getNews();
                } ],


                'product':['ProductService', '$stateParams' , function (ProductService, $stateParams) {
                    return ProductService.getProductsBySubcategoryId($stateParams.id);
                }]
            }

        });// stateProvider.state('product')



        $stateProvider.state('moreAboutProduct' , {

            'url': '/moreAboutProduct/:id',
            'views':{
                "header": {
                    'templateUrl':"templates/header.html",

                    'controller': ['$scope', 'NewsService', 'news' , function( $scope , NewsService , news){

                        $scope.newsSingle = news;

                        console.log($scope.newsSingle)

                    } ],

                },
                "content": {
                    "templateUrl":"templates/moreAboutProduct/moreAboutProduct.html",
                    'controller': ['$scope', 'localStorageService', 'AboutProductService','moreAboutProduct', function ($scope, localStorageService, AboutProductService, moreAboutProduct) {

                        $scope.singleProduct = moreAboutProduct;

                        console.log($scope.singleProduct)


                    }],
                },
                "footer": {
                    'templateUrl':"templates/footer.html",
                }
            },
            'resolve':{

                'news': [ 'NewsService' , '$stateParams' , function( NewsService , $stateParams){
                    return NewsService.getNews();
                } ],


                'moreAboutProduct':['AboutProductService', '$stateParams' , function (AboutProductService, $stateParams) {
                    return AboutProductService.getProductByID($stateParams.id);
                }]
            }

        });// stateProvider.state('moreAboutProduct')




        $stateProvider.state('moreAboutNews' , {

            'url': '/moreAboutNews/:id',
            'views':{
                "header": {
                    'templateUrl':"templates/header.html",

                    'controller': ['$scope', 'NewsService', 'news' , function( $scope , NewsService , news){

                        $scope.newsSingle = news;

                        console.log($scope.newsSingle)

                    } ],

                },
                "content": {
                    "templateUrl":"templates/moreAboutNews/moreAboutNews.html",
                    'controller': ['$scope',  'AboutNewsService','moreAboutNews', function ($scope, AboutNewsService, moreAboutNews) {

                        $scope.SingleNews = moreAboutNews;

                        console.log($scope.SingleNews)
                    }],
                },
                "footer": {
                    'templateUrl':"templates/footer.html",
                }
            },
            'resolve':{

                'news': [ 'NewsService' , '$stateParams' , function( NewsService , $stateParams){
                    return NewsService.getNews();
                } ],

                'moreAboutNews':['AboutNewsService', '$stateParams' , function (AboutNewsService, $stateParams) {
                    return AboutNewsService.getNewsByID($stateParams.id);
                }]
            }

        });// stateProvider.state('moreAboutNews')




        $stateProvider.state('cart' , {

            'url': '/cart',
            'views':{
                "header": {
                    'templateUrl':"templates/header.html",

                    'controller': ['$scope', 'NewsService', 'news' , function( $scope , NewsService , news){

                        $scope.newsSingle = news;

                        console.log($scope.newsSingle)

                    } ],

                },
                "content": {
                    "templateUrl":"templates/cart/cart.html",
                    'controller': ['$scope',  'CartService', 'cart', function ($scope, CartService, cart) {

                        $scope.cart = cart;

                        console.log($scope.cart)
                    }],
                },
                "footer": {
                    'templateUrl':"templates/footer.html",
                }
            },
            'resolve':{

                'news': [ 'NewsService' , '$stateParams' , function( NewsService , $stateParams){
                    return NewsService.getNews();
                } ],

                'cart':['CartService', '$stateParams' , function (CartService, $stateParams) {
                    return CartService.getCart();
                }]
            }

        });// stateProvider.state('moreAboutNews')






    } ] );  // app.config


app.run(
    [
    '$rootScope', '$state', '$stateParams',
     function ($rootScope, $state, $stateParams) {
         
     }   
]);  // app.run


