"use strict";

// =================== CONTROLLERS =================== //

import MainController from './controllers/MainController';
import CartController from './controllers/CartController';



// ==================== SERVICES ===================== //
import CategoryService from './services/categoryService';
import SubcategoryService from './services/subcategoryService';
import ProductService from './services/productService';
import NewsService from './services/newsService';
import FirmInfoService from "./services/firmInfoService";
import AboutProductService from "./services/aboutProductService";
import AboutNewsService from "./services/aboutNewsService";
import СontactsService from "./services/contactsService";
import SearchService from "./services/searchService";
import CartService from "./services/cartService";



// ===================== FILTERS ===================== //
import ProductFilter from "./filters/productFilter";


// =================== DERECTIVES =================== //


angular.module( 'TexDon.controllers' , []);
angular.module( 'TexDon.filters' , []);
angular.module( 'TexDon.services' , []);
angular.module( 'TexDon.directives' , []);
angular.module('TexDon.constants' , []);

angular.module('TexDon.controllers').controller('MainController', 'CartController', [
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
    'SearchService',
    MainController, CartController ]);


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
    .service('CartService',['$http', 'PARAMS', 'localStorageService', CartService]);


angular.module( 'TexDon.services')
    .service('SearchService',['$http', 'PARAMS', SearchService]);


angular.module('TexDon.controllers')
    .controller('MainController' , [ '$scope' , 'NewsService' , 'SearchService' , 'CartService' , '$state' , 'localStorageService' , MainController ]);


angular.module('TexDon.controllers')
    .controller('CartController' , [ '$scope' , 'NewsService' , 'SearchService', 'CartService', '$state' , 'localStorageService' , CartController ]);


/*

angular.module('TexDon.controllers', ['ngAnimate', 'ui.bootstrap'])
    .controller('CartController' , [ '$scope' , 'NewsService' , 'SearchService', 'CartService', '$state' , 'localStorageService' , CartController ]);

 */




/*
angular.module( 'TexDon.filrers')
    .filter('ProductFilter', ProductFilter);
*/



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
        SEARCH_PRODUCTS_URL:`ctrl=SearchApi&act=GetSearchProduct`,
        POST_REGISTRATION_NEW_ORDER_URL:`ctrl=OrderApi&act=AddOrder`,

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
    'ui.router',
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
                "content": {
                    'templateUrl':"templates/home.html",
                            'controller': ['$scope', '$sce', 'FirmInfoService',  'firmInfo' , 'CartService', function( $scope , $sce , FirmInfoService,  firmInfo, CartService){

                                $scope.cart = CartService.getCart();

                                console.log($scope.cart);

                            $scope.firmInfo = $sce.trustAsHtml(firmInfo.data.text);

                            console.log($scope.firmInfo);


                    } ],
                }
            },

            'resolve': {

                'news': [ 'NewsService' , '$stateParams' , function( NewsService , $stateParams){
                    return NewsService.getNews();
                } ],

                'firmInfo': [ 'FirmInfoService' , '$stateParams' , function( FirmInfoService, $stateParams){
                    return FirmInfoService.getFirmInfo();

                } ],
                'search': [ 'SearchService' , '$stateParams' , function( SearchService , $stateParams){
                    return SearchService.getSearchProductByText($stateParams.searchString);
                } ]
            }

        }); // stateProvider.state('home')


        $stateProvider.state('search' , {

            'url': '/search/:searchString',
            'views':{
                "content": {
                    "templateUrl":"templates/search/search.html",
                    'controller': ['$scope', '$state', 'SearchService','search', 'localStorageService', 'CartService', function ($scope,  $state, SearchService, search, localStorageService, CartService) {


                       let cart = $scope.cart = CartService.getCart();


                        $scope.productsList = search.data.products;

                        console.log($scope.productsList);

                        if( cart ){

                            $scope.productsList.forEach( function ( product ) {

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
                    'params' : {
                        'searchString': 'some default'
                    }
                },

            },
            'resolve':{
                'news':['NewsService', '$stateParams' , function (NewsService, $stateParams) {
                    return NewsService.getAllNewsListMenu();
                }],

                'search': [ 'SearchService' , '$stateParams' , function( SearchService , $stateParams){
                    return SearchService.getSearchProductByText($stateParams.searchString);
                } ],
            }

        });//stateProvider.state('search')


        $stateProvider.state('news' , {

            'url': '/news',
            'views':{
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
                "content": {

                    "templateUrl":"templates/product/product.html",
                    'controller': ['$scope', 'localStorageService', 'ProductService', 'product', 'CartService' , '$stateParams', function ($scope, localStorageService , ProductService, product, CartService, $stateParams) {


                        $scope.limit = 4;
                        $scope.offset = 0;

                        let cart = $scope.cart = CartService.getCart();

                        console.log( $scope.cart);


                        $scope.products = product.data.products;

                        console.log($scope.products);

                        $scope.getMoreProducts = async function () {

                            $scope.offset +=  $scope.limit;
                            let moreProducts = await ProductService.getProductsBySubcategoryId($stateParams.id, $scope.limit , $scope.offset);



                            moreProducts.data.products.forEach( (p) => {

                                let pchek = cart.find( pr => +pr.productID  === +p.productID );

                                if( pchek ){

                                    p.isInCart = true;

                                }//if
                                else{

                                   p.isInCart = false;

                                }//else

                                $scope.products.push( p );

                            } );


                        };



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
                }
            },
            'resolve':{

                'news': [ 'NewsService' , '$stateParams' , function( NewsService , $stateParams){
                    return NewsService.getNews();
                } ],


                'product':['ProductService', '$stateParams' , function (ProductService, $stateParams) {
                    return ProductService.getProductsBySubcategoryId($stateParams.id, 4 , 0);
                }]
            }

        });// stateProvider.state('product')



        $stateProvider.state('moreAboutProduct' , {

            'url': '/moreAboutProduct/:id',
            'views':{
                "content": {
                    "templateUrl":"templates/moreAboutProduct/moreAboutProduct.html",
                    'controller': ['$scope', 'localStorageService', 'AboutProductService','moreAboutProduct', 'CartService', function ($scope, localStorageService, AboutProductService, moreAboutProduct, CartService) {

                        let cart = $scope.cart = CartService.getCart();

                        console.log($scope.cart);

                        $scope.singleProduct = moreAboutProduct.data;

                        console.log($scope.singleProduct);


                        if( cart ){

                            let pchek = cart.find( pr => +pr.productID  === +$scope.singleProduct.product.productID );

                            if( pchek ){

                                $scope.singleProduct.isInCart = true;

                            }//if
                            else{

                                $scope.singleProduct.isInCart = false;

                            }//else
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


                'moreAboutProduct':['AboutProductService', '$stateParams' , function (AboutProductService, $stateParams) {
                    return AboutProductService.getProductByID($stateParams.id);
                }]
            }

        });// stateProvider.state('moreAboutProduct')




        $stateProvider.state('moreAboutNews' , {

            'url': '/moreAboutNews/:id',
            'views':{
                "content": {
                    "templateUrl":"templates/moreAboutNews/moreAboutNews.html",
                    'controller': ['$scope',  'AboutNewsService', 'moreAboutNews', function ($scope, AboutNewsService, moreAboutNews) {

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
                "content": {
                    "templateUrl":"templates/cart/cart.html",
                    'controller': ['$scope', '$state', 'CartService', 'localStorageService', function ($scope, $state , CartService, localStorageService) {


                        $scope.cart = CartService.getCart();

                        $scope.Total = CartService.total();

                        $scope.$watch( 'cart.length' , function (){

                            $scope.Total = CartService.total();

                        } );


                        console.log('cart' ,  $scope.cart);

                        $scope.ChangeProductAmount = function  (product){

                            if (isNaN(+product.amountProduct)){

                                product.amountProduct = 1;

                            }//if

                            $scope.Total = CartService.total();

                            CartService.changeStorageService($scope.cart);

                        };

/*
                        $scope.regName=false;
                        $scope.regMail=false;
                        $scope.regPhone=true;
                        $scope.regAddress=false;
                        $scope.regComment=true;

                        $scope.RegName = function  (){

                            let regEng =  /^[a-z\s]{2,145}$/i;

                            let regRus =  /^[а-я\s]{2,145}$/i;


                            if(regEng.test($scope.userFirstAndLastName) || regRus.test($scope.userFirstAndLastName)) {
                                $scope.regName=true;
                            }//if
                            else {
                                $scope.regName=false;
                            }

                        };//RegName

                        $scope.RegEmail=function  (){

                            //let regEmail = /^[a-z0-9A-Z_]+@[a-z0-9A-Z_.]{0,20}$/;

                            let regEmail = /^[a-z0-9A-Z_.@]{0,20}$/i;

                            if(regEmail.test($scope.userEmail)) {
                                $scope.regMail=true;
                            }//if
                            else {
                                $scope.regMail=false;
                            }

                        };///RegEmail


                        $scope.RegPhone = function () {

                            let regPhone = /^[()-+0-9\s]{6,18}$/i;

                            if(regPhone.test($scope.userContactNumberPhone)) {

                                $scope.regPhone=true;
                            }//if
                            else {
                                $scope.regPhone=false;
                            }

                        };///RegPhone


                        $scope.RegAddress = function  (){

                            let regAddress = /^[A-ZА-Я0-9а-яa-z-/..,,:;:()№ёЁ\s]{5,220}$/i;

                            if(regAddress.test($scope.deliveryAddressOrder)) {
                                $scope.regAddress=true;
                            }//if
                            else {
                                $scope.regAddress=false;
                            }

                        };///RegAddress


                        $scope.RegComment = function  (){

                            let regComment = /^[a-zA-Z0-9а-яА-ЯЁё_.,.,()-;::;!?№+*$&@\s]{0,895}$/i;

                            if(regComment.test($scope.commentToTheOrder)) {
                                $scope.regComment=true;
                            }//if
                            else {
                                $scope.regComment=false;
                            }

                        };///RegComment

                        */

                    }],

                    /*
                    'params' : {

                        'userFirstAndLastName': 'some default',
                        'userEmail': 'some default',
                        'userContactNumberPhone': 'some default',
                        'deliveryAddressOrder': 'some default',
                        'commentToTheOrder': 'some default'

                    }
                    */


                },
            },
            'resolve':{

                'news': [ 'NewsService' , '$stateParams' , function( NewsService , $stateParams){
                    return NewsService.getNews();
                } ],

                /*
                'cart':['CartService', '$stateParams' , function (CartService, $stateParams) {

                    return CartService.registrationNewOrder($stateParams.userFirstAndLastName, $stateParams.userEmail, $stateParams.userContactNumberPhone, $stateParams.deliveryAddressOrder, $stateParams.commentToTheOrder);
                }]
                */

            }

        });// stateProvider.state('cart')





        $stateProvider.state('successfulOrder' , {

            'url': '/successfulOrder/:text',
            'views':{
                "content": {
                    "templateUrl":"templates/successfulOrder/successfulOrder.html",
                    'controller': ['$scope', '$state', 'CartService', 'localStorageService', 'successfulOrder', '$route',  function ($scope, $state , CartService, localStorageService, successfulOrder, $route) {


                        $scope.localStorageService = localStorageService;

                        $scope.cart = CartService.getCart();

                        $scope.cart.length = 0;

                        // localStorageService.clearAll();


                        // '$route',
                       // $route.reload();

                         // $window.location.reload();

                        /// $state.reload();



                        $scope.text = successfulOrder;

                        console.log('text :' ,   $scope.text);


                    }],
                    'params' : {
                        'text': 'some default'
                    }

                },
            },
            'resolve':{

                'news': [ 'NewsService' , '$stateParams' , function( NewsService , $stateParams){
                    return NewsService.getNews();
                } ],

                'successfulOrder': [ 'CartService' , '$stateParams' , function( CartService , $stateParams){
                return CartService.returnText($stateParams.text);
    } ],

            }

        });// stateProvider.state('successfulOrder')






    } ] );  // app.config


app.run( [
    '$rootScope', '$state', '$stateParams', 'localStorageService',
     function ($rootScope, $state, $stateParams, localStorageService) {

     }
   ]);  // app.run


