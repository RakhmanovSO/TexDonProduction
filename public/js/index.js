/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./application/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/app.js":
/*!****************************!*\
  !*** ./application/app.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_MainController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/MainController */ "./application/controllers/MainController.js");
/* harmony import */ var _controllers_CartController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/CartController */ "./application/controllers/CartController.js");
/* harmony import */ var _services_categoryService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/categoryService */ "./application/services/categoryService.js");
/* harmony import */ var _services_subcategoryService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/subcategoryService */ "./application/services/subcategoryService.js");
/* harmony import */ var _services_productService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/productService */ "./application/services/productService.js");
/* harmony import */ var _services_newsService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/newsService */ "./application/services/newsService.js");
/* harmony import */ var _services_firmInfoService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/firmInfoService */ "./application/services/firmInfoService.js");
/* harmony import */ var _services_aboutProductService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/aboutProductService */ "./application/services/aboutProductService.js");
/* harmony import */ var _services_aboutNewsService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/aboutNewsService */ "./application/services/aboutNewsService.js");
/* harmony import */ var _services_contactsService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/contactsService */ "./application/services/contactsService.js");
/* harmony import */ var _services_searchService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/searchService */ "./application/services/searchService.js");
/* harmony import */ var _services_cartService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/cartService */ "./application/services/cartService.js");
/* harmony import */ var _filters_productFilter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./filters/productFilter */ "./application/filters/productFilter.js");


// =================== CONTROLLERS =================== //






// ==================== SERVICES ===================== //
















// ===================== FILTERS ===================== //



// =================== DERECTIVES =================== //


angular.module( 'TexDon.controllers' , []);
angular.module( 'TexDon.filters' , []);
angular.module( 'TexDon.services' , []);
angular.module( 'TexDon.directives' , []);
angular.module('TexDon.constants' , []);

angular.module('TexDon.controllers').controller('MainController' ,_controllers_CartController__WEBPACK_IMPORTED_MODULE_1__["default"], [
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
    _controllers_MainController__WEBPACK_IMPORTED_MODULE_0__["default"], _controllers_CartController__WEBPACK_IMPORTED_MODULE_1__["default"] ]);


angular.module( 'TexDon.services')
    .service('CategoryService',['$http', 'PARAMS', _services_categoryService__WEBPACK_IMPORTED_MODULE_2__["default"]]);

angular.module( 'TexDon.services')
    .service('SubcategoryService',['$http', 'PARAMS', _services_subcategoryService__WEBPACK_IMPORTED_MODULE_3__["default"]]);

angular.module( 'TexDon.services')
    .service('ProductService',['$http', 'PARAMS', _services_productService__WEBPACK_IMPORTED_MODULE_4__["default"]]);

angular.module( 'TexDon.services')
    .service('NewsService',['$http', 'PARAMS', _services_newsService__WEBPACK_IMPORTED_MODULE_5__["default"]]);


angular.module( 'TexDon.services')
    .service('FirmInfoService',['$http', 'PARAMS', _services_firmInfoService__WEBPACK_IMPORTED_MODULE_6__["default"]]);


angular.module( 'TexDon.services')
    .service('AboutProductService',['$http', 'PARAMS', _services_aboutProductService__WEBPACK_IMPORTED_MODULE_7__["default"]]);


angular.module( 'TexDon.services')
    .service('AboutNewsService',['$http', 'PARAMS', _services_aboutNewsService__WEBPACK_IMPORTED_MODULE_8__["default"]]);

angular.module( 'TexDon.services')
    .service('СontactsService',['$http', 'PARAMS', _services_contactsService__WEBPACK_IMPORTED_MODULE_9__["default"]]);


angular.module( 'TexDon.services')
    .service('CartService',['$http', 'PARAMS', 'localStorageService', _services_cartService__WEBPACK_IMPORTED_MODULE_11__["default"]]);


angular.module( 'TexDon.services')
    .service('SearchService',['$http', 'PARAMS', _services_searchService__WEBPACK_IMPORTED_MODULE_10__["default"]]);


angular.module('TexDon.controllers')
    .controller('MainController' , [ '$scope' , 'NewsService' , 'SearchService' , 'CartService' , '$state' , 'localStorageService' , _controllers_MainController__WEBPACK_IMPORTED_MODULE_0__["default"] ]);


angular.module('TexDon.controllers')
    .controller('CartController' , [ '$scope' , 'NewsService' , 'SearchService', 'CartService', '$state' , 'localStorageService' , _controllers_CartController__WEBPACK_IMPORTED_MODULE_1__["default"] ]);


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
        POST_REGISTRATION_NEW_ORDER_URL:`ctrl=OrderApi&act=AddOrder&XDEBUG_SESSION_START=13821`,

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

/*
                        $scope.products.forEach( p=>{

                            for(let i=0; i<$scope.cart.length; i++){

                                if(p.productID === $scope.cart[i].productID){

                                    p.isInCart=true;
                                    p.amountProduct=$scope.cart[i].amountProduct;

                                }//if
                            }
                        });

                          */


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






                        /*
                        localStorageService.set('cart' , [
                            {
                                productID: 1,
                                amount: 2
                            }
                        ]);
                        */

                       // localStorage.clear();
                        /*
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

                        */

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


                        $scope.ChangeProductAmount = function  (){

                            $scope.Total = CartService.total();

                            CartService.changeStorageService($scope.cart);

                        };


                        $scope.regName=true;
                        $scope.regMail=true;
                        $scope.regPhone=true;
                        $scope.regAddress=true;
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

                            let regEmail = /^[a-z0-9A-Z_.@]{5,20}$/;

                            if(regEmail.test($scope.userEmail)) {
                                $scope.regMail=true;
                            }//if
                            else {
                                $scope.regMail=false;
                            }

                        };///RegEmail

                        /*
                        $scope.RegPhone = function () {

                            let regPhone = /^[0-9()-]{8,18}$/i;

                            if(regPhone.test($scope.userContactNumberPhone)) {

                                $scope.regPhone=true;
                            }//if
                            else {
                                $scope.regPhone=false;
                            }

                        };///RegPhone
                         */

                        $scope.RegAddress = function  (){

                            let regAddress = /^[A-ZА-Яа-яa-z-/..,,:;:()№ёЁ\s]{5,220}$/i;

                            if(regAddress.test($scope.deliveryAddressOrder)) {
                                $scope.regAddress=true;
                            }//if
                            else {
                                $scope.regAddress=false;
                            }

                        };///RegAddress


                        $scope.RegComment = function  (){

                            let regComment = /^[a-zA-Z0-9\sа-яА-ЯЁё_.,.,()-;::;!?№+*$&@]{5,895}$/i;

                            if(regComment.test($scope.commentToTheOrder)) {
                                $scope.regComment=true;
                            }//if
                            else {
                                $scope.regComment=false;
                            }

                        };///RegComment



                    }],

                    'params' : {

                        'userFirstAndLastName': 'some default',
                        'userEmail': 'some default',
                        'userContactNumberPhone': 'some default',
                        'deliveryAddressOrder': 'some default',
                        'commentToTheOrder': 'some default'

                    }


                },
            },
            'resolve':{

                'news': [ 'NewsService' , '$stateParams' , function( NewsService , $stateParams){
                    return NewsService.getNews();
                } ],

                'cart':['CartService', '$stateParams' , function (CartService, $stateParams) {

                    return CartService.registrationNewOrder($stateParams.userFirstAndLastName, $stateParams.userEmail, $stateParams.userContactNumberPhone, $stateParams.deliveryAddressOrder, $stateParams.commentToTheOrder);
                }]

            }

        });// stateProvider.state('cart')




    } ] );  // app.config


app.run( [
    '$rootScope', '$state', '$stateParams', 'localStorageService',
     function ($rootScope, $state, $stateParams, localStorageService) {

     }
   ]);  // app.run




/***/ }),

/***/ "./application/controllers/CartController.js":
/*!***************************************************!*\
  !*** ./application/controllers/CartController.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CartController; });


class  CartController {


    constructor( $scope, NewsService, SearchService, CartService , $state, localStorageService  ) {

        this._$scope = $scope;

        this._$scope.isActive = false;

        $scope.localStorageService = localStorageService;



        ///  Оформить заказ ///

        $scope.ConfirmOrder = function() {

            console.log( 'infoOrder - ', $scope.userFirstAndLastName,  $scope.userEmail, $scope.userContactNumberPhone, $scope.deliveryAddressOrder , $scope.commentToTheOrder);

            $state.go( 'cart', {'userFirstAndLastName': $scope.userFirstAndLastName, 'userEmail': $scope.userEmail, 'userContactNumberPhone': $scope.userContactNumberPhone,  'deliveryAddressOrder': $scope.deliveryAddressOrder, 'commentToTheOrder': $scope.commentToTheOrder} );

        };

        /*
        this._$scope = $scope;

        $scope.cart = [];

        $scope.totalPrice = 0;


        $scope.UpdateCartTotal = function ( ) {

            if ( $scope.cart.length !== 0){

                $scope.totalPrice = $scope.cart.reduce( ( previousValue, productItem) =>{
                    return previousValue + productItem.productPrice *  productItem.amountProduct;
                }, 0 );

            }//if


        };// UpdateCartTotal


        $scope.AddProductToCart = function (product) {

            let productExist = $scope.cart.some ( (pr) => {

                return pr.productID === product.productID;

                } );


            if (!productExist){

               // $scope.cart.push(product);

                $scope.cart.push({
                    'productID': product.productID,
                    'productTitle': product.productTitle,
                    'productPrice': product.productPrice,
                    'amountProduct': 1,
                    'isInCart': true

                });

                $scope.UpdateCartTotal();

                console.log('CART in CartController:', $scope.cart);

            }//if

        }; // AddProductToCart



        $scope.RemoveProductFromCart = function (index) {

                event.stopPropagation();

            $scope.cart.splice(index , 1);

            $scope.UpdateCartTotal();

        }; // RemoveProductFromCart



        $scope.ChangeAmount = function (index, flag) {

           let product =  $scope.cart[index];

            if (flag === true) { // добавить (+ 1 ед.)

                product.amountProduct++;
            }//if
            else if ($scope.cart[index].amountProduct > 0 ) {  // убрать  (- 1 ед.)

                product.amountProduct--;

                if( product.amountProduct === 0){

                    $scope.RemoveProductFromCart(index);
                }

            }//else if

            event.stopPropagation();

            $scope.UpdateCartTotal();

        }; // ChangeAmount



*/

    }//constructor



}//  CartController

/***/ }),

/***/ "./application/controllers/MainController.js":
/*!***************************************************!*\
  !*** ./application/controllers/MainController.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainController; });


 class  MainController{

     constructor( $scope, NewsService, SearchService, CartService , $state, localStorageService  ){

         this._$scope = $scope;

         this._$scope.isActive = false;

         $scope.localStorageService = localStorageService;


         NewsService.getNews().then( news => {

             console.log('NEWS in MainController :' , news);

             $scope.newsList = news;

         } );



         $scope.MakeSearch = function() {

             console.log( 'SearchString in MainController:', $scope.searchString);

             $state.go( 'search', { 'searchString': $scope.searchString } );

         };



/*
         ///  Оформить заказ ///

         $scope.ConfirmOrder = function() {

             console.log( 'infoOrder', $scope.userFirstAndLastName,  $scope.userEmail, $scope.userContactNumberPhone, $scope.deliveryAddressOrder , $scope.commentToTheOrder);

             $state.go( 'cart', {'userFirstAndLastName': $scope.userFirstAndLastName, 'userEmail': $scope.userEmail, 'userContactNumberPhone': $scope.userContactNumberPhone,  'deliveryAddressOrder': $scope.deliveryAddressOrder, 'commentToTheOrder': $scope.commentToTheOrder} );

         };


*/


         $scope.cart = CartService.getCart();


         $scope.changeAmount = function ( newAmount ){

             $scope.product.amount = newAmount;


         };



         $scope.ChangeAmount = function (product) {

             for(let i=0; i<$scope.cart.length; i++){

                 if($scope.cart[i].productID === product.productID){

                     $scope.cart[i].amountProduct = product.amountProduct;

                 }//if
             }//for

             CartService.changeStorageService($scope.cart);

         }; //ChangeAmount


         $scope.AddProductToCart = function (product) {

             let count=0;

             for(let i=0; i<$scope.cart.length; i++){

                 if($scope.cart[i].productID === product.productID){
                     count++;
                 }//if

             }//for

             if(count === 0){

                 let newProduct = CartService._getSimpleProduct(product);

                 newProduct.isInCart = true;

                 newProduct.amountProduct = 1;

                 CartService.addProduct(newProduct);

             }//if


         }; //AddProductToCart



         $scope.RemoveProduct = function (product){

             let index=-1;
             for(let i=0; i<$scope.cart.length; i++){
                 if($scope.cart[i]['productID'] === product.productID) {
                     index = i;
                 }
             }

             $scope.cart.splice( index , 1 );
             CartService.changeStorageService($scope.cart);

         };



         $scope.ChangeProductAmount = function (product){

             if(product.amount == 0){
                 $scope.RemoveProduct(product);
             }

             $scope.$parent.Total = CartService.total();   // ????   $scope.$parent.$parent.Total

             CartService.changeStorageService($scope.cart);
         };





         /////////////////////////////////////////////////////////////////////////////////////////////////


             /*

         $scope.cart = [];

         $scope.totalPrice = 0;


         $scope.UpdateCartTotal = function ( ) {

             if ( $scope.cart.length !== 0){

                 $scope.totalPrice = $scope.cart.reduce( ( previousValue, productItem) =>{
                     return previousValue + productItem.productPrice *  productItem.amountProduct;
                 }, 0 );

             }//if


         };// UpdateCartTotal


         $scope.AddProductToCart = function (product) {

             let productExist = $scope.cart.some ( (pr) => {

                 return pr.productID === product.productID;

             } );


             if (!productExist){

                 // $scope.cart.push(product);

                 $scope.cart.push({
                     'productID': product.productID,
                     'productTitle': product.productTitle,
                     'productPrice': product.productPrice,
                     'amountProduct': 1,
                     'isInCart': true

                 });

                 $scope.UpdateCartTotal();

                 console.log('CART in CartController:', $scope.cart);

             }//if

         }; // AddProductToCart



         $scope.RemoveProductFromCart = function (index) {

             event.stopPropagation();

             $scope.cart.splice(index , 1);

             $scope.UpdateCartTotal();

         }; // RemoveProductFromCart



         $scope.ChangeAmount = function (index, flag) {

             let product =  $scope.cart[index];

             if (flag === true) { // добавить (+ 1 ед.)

                 product.amountProduct++;
             }//if
             else if ($scope.cart[index].amountProduct > 0 ) {  // убрать  (- 1 ед.)

                 product.amountProduct--;

                 if( product.amountProduct === 0){

                     $scope.RemoveProductFromCart(index);
                 }

             }//else if

             event.stopPropagation();

             $scope.UpdateCartTotal();

         }; // ChangeAmount



*/


     }//constructor

}//MainController

/***/ }),

/***/ "./application/filters/productFilter.js":
/*!**********************************************!*\
  !*** ./application/filters/productFilter.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductFilter; });


class ProductFilter {



    async  productByFilter ( ) {

        return function ( products , age , brandProduct ) {

            let resultProducts = products.filter( (product)=>{


                return product.age > age || product.brandProduct.indexOf(brandProduct) !== -1;

            } );


            return resultProducts;
        };
    };


}// ProductFilter

/***/ }),

/***/ "./application/services/aboutNewsService.js":
/*!**************************************************!*\
  !*** ./application/services/aboutNewsService.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AboutNewsService; });


class AboutNewsService {


    constructor ($http, PARAMS){

        this._$http = $http;
        this._PARAMS = PARAMS;

    }//constructor


    async getNewsByID (newsID){

        try {

            let response = await  this._$http.get(
                `${this._PARAMS.SERVER_URL}${this._PARAMS.GET_NEWS_BY_ID_URL}&newsID=${newsID}`
            );

            return response.data;

        }// try
        catch (ex) {

            console.log("Exception", ex);
            return null;

        }//catch

    }//getAllNewsListMenu



}//AboutNewsService

/***/ }),

/***/ "./application/services/aboutProductService.js":
/*!*****************************************************!*\
  !*** ./application/services/aboutProductService.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AboutProductService; });


class  AboutProductService {


    constructor ($http, PARAMS){

        this._$http = $http;
        this._PARAMS = PARAMS;

    }//constructor

    async getProductByID (productID){

        try {

            let response = await  this._$http.get(
                `${this._PARAMS.SERVER_URL}${this._PARAMS.GET_MORE_ABOUT_PRODUCT_URL}&productID=${productID}`
            );

            return response.data;

        }// try
        catch (ex) {

            console.log("Exception", ex);
            return null;

        }//catch

    }//getProductByID


}//aboutProductService

/***/ }),

/***/ "./application/services/cartService.js":
/*!*********************************************!*\
  !*** ./application/services/cartService.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CartService; });


class CartService {


    constructor ($http, PARAMS, localStorageService){


        if(localStorageService.get('cartProduct')){

            this.cart = localStorageService.get('cartProduct');

        }//if
        else{
            this.cart = [];
        }//else


        this._$http = $http;
        this._PARAMS = PARAMS;
        this.localStorageService = localStorageService;


    }//constructor CartService



    getCart(){
        return this.cart;
    }//getCart


    addProduct( product ){

        this.cart.push( product );

        this.localStorageService.set( 'cartProduct' , this.cart );

    }//addProduct


    deleteProduct (index){

        this.cart.splice(index , 1);

        this.localStorageService.removeItem(index);

        this.localStorageService.clear(index);

    }//deleteProduct


    changeStorageService(cart){

        let cartNew=[];

        for(let i=0; i<cart.length; i++){

            cartNew.push(this._getSimpleProduct(cart[i]));

        }

        this.localStorageService.set( 'cartProduct' , cartNew );

    }//changeStorageService

    _getSimpleProduct(product){
        return {

            "productID" :    product.productID,
            "productTitle" : product.productTitle,
            "productPrice" : product.productPrice,
            "amountProduct" : product.amountProduct,
            "isInCart"     :  product.isInCart,

        };

    }// getSimpleProduct


    total(){

        let Total={
            totalAmount: 0,
            totalPrice:  0
        };


        for(let i=0; i<this.cart.length; i++){

            Total.totalAmount+=+this.cart[i].amountProduct;

            Total.totalPrice+=this.cart[i].amountProduct*this.cart[i].productPrice;

        }

        return Total;

    } // total




        async registrationNewOrder (userFirstAndLastName, userEmail, userContactNumberPhone, deliveryAddressOrder, commentToTheOrder){

            try {


                debugger;

                let orderDetails = new FormData();

                orderDetails.append('orderDetails', this.localStorageService.get('cartProduct'));


                let response = await  this._$http.get(
                    `${this._PARAMS.SERVER_URL}${this._PARAMS.POST_REGISTRATION_NEW_ORDER_URL}&userFirstAndLastName=${userFirstAndLastName}&userEmail=${userEmail}&userContactNumberPhone=${userContactNumberPhone}&deliveryAddressOrder=${deliveryAddressOrder}&commentToTheOrder=${commentToTheOrder}&orderDetails=${orderDetails}`
                );


                   /*
                let response = await  this._$http(
                    {
                        method: 'POST',
                        url:  `${this._PARAMS.SERVER_URL}${this._PARAMS.POST_REGISTRATION_NEW_ORDER_URL}`,

                        data:    $.param({
                            userFirstAndLastName: userFirstAndLastName,
                            userEmail: userEmail,
                            userContactNumberPhone: userContactNumberPhone,
                            deliveryAddressOrder:  deliveryAddressOrder,
                            commentToTheOrder: commentToTheOrder,
                            orderDetails: orderDetails

                        }),
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            });
                  */

                return response.data;



            }// try
            catch (ex) {

                console.log("Exception", ex);
                return null;

            }//catch

        }//registrationNewOrder


}//CartService

/***/ }),

/***/ "./application/services/categoryService.js":
/*!*************************************************!*\
  !*** ./application/services/categoryService.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CategoryService; });


class CategoryService {


    constructor ($http, PARAMS){

        this._$http = $http;
        this._PARAMS = PARAMS;

    }//constructor categoryService

    async getCategories (){

        try {

            let response = await  this._$http.get(
                `${this._PARAMS.SERVER_URL}${this._PARAMS.GET_ALL_CATEGORIES_URL}`
            );

            return response.data.data;

        }// try
        catch (ex) {

            console.log("Exception", ex);
            return null;

        }//catch

    }//getCategories


}//CategoryService

/***/ }),

/***/ "./application/services/contactsService.js":
/*!*************************************************!*\
  !*** ./application/services/contactsService.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return СontactsService; });


class СontactsService {


    constructor ($http, PARAMS){

        this._$http = $http;
        this._PARAMS = PARAMS;

    }//constructor categoryService

    async getСontacts (){

        try {

            let response = await  this._$http.get(
                `${this._PARAMS.SERVER_URL}${this._PARAMS.GET_ALL_CONTACTS_URL}`
            );

            return response.data;

        }// try
        catch (ex) {

            console.log("Exception", ex);
            return null;

        }//catch

    }//getСontacts


}//СontactsService

/***/ }),

/***/ "./application/services/firmInfoService.js":
/*!*************************************************!*\
  !*** ./application/services/firmInfoService.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FirmInfoService; });


class FirmInfoService {


    constructor ($http, PARAMS){

        this._$http = $http;
        this._PARAMS = PARAMS;

    }//constructor NewsService

    async getFirmInfo (){

        try {

            let response = await  this._$http.get(
                `${this._PARAMS.SERVER_URL}${this._PARAMS.GET_FIRM_INFO_URL}`
            );

            return response.data;

        }// try
        catch (ex) {

            console.log("Exception", ex);
            return null;

        }//catch

    }//getNews


}//FirmInfoService

/***/ }),

/***/ "./application/services/newsService.js":
/*!*********************************************!*\
  !*** ./application/services/newsService.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewsService; });


class NewsService {


    constructor ($http, PARAMS){

        this._$http = $http;
        this._PARAMS = PARAMS;

    }//constructor NewsService

    async getNews (){

        try {

            let response = await  this._$http.get(
                `${this._PARAMS.SERVER_URL}${this._PARAMS.GET_NEWS_URL}`
            );

            return response.data.data;

        }// try
        catch (ex) {

            console.log("Exception", ex);
            return null;

        }//catch

    }//getNews



    async getAllNewsListMenu (){

        try {

            let response = await  this._$http.get(
                `${this._PARAMS.SERVER_URL}${this._PARAMS.GET_ALL_NEWS_MENU_URL}`
            );

            return response.data.data;

        }// try
        catch (ex) {

            console.log("Exception", ex);
            return null;

        }//catch

    }//getAllNewsListMenu


}//NewsService

/***/ }),

/***/ "./application/services/productService.js":
/*!************************************************!*\
  !*** ./application/services/productService.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductService; });


class ProductService {


    constructor ($http, PARAMS){

        this._$http = $http;
        this._PARAMS = PARAMS;

    }//constructor ProductService


    async getProductsBySubcategoryId (subcategoryID, limit , offset){

        try {

            let response = await  this._$http.get(
                `${this._PARAMS.SERVER_URL}${this._PARAMS.GET_PRODUCTS_BY_SUBCATEGORY_ID_URL}&subcategoryID=${subcategoryID}&limit=${limit}&offset=${offset}`
            );

            return response.data;


        }// try
        catch (ex) {

            console.log("Exception", ex);
            return null;

        }//catch

    }//getProductsBySubcategoryId




}//ProductService

/***/ }),

/***/ "./application/services/searchService.js":
/*!***********************************************!*\
  !*** ./application/services/searchService.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchService; });


class  SearchService {


    constructor ($http, PARAMS){

        this._$http = $http;
        this._PARAMS = PARAMS;

    }//constructor


    async getSearchProductByText (searchString){

        try {

            let response = await  this._$http.get(
                `${this._PARAMS.SERVER_URL}${this._PARAMS.SEARCH_PRODUCTS_URL}&productTitle=${searchString}`
            );

            return response.data;

        }// try
        catch (ex) {

            console.log("Exception", ex);
            return null;

        }//catch

    }//getSearchProductByText

 }

/***/ }),

/***/ "./application/services/subcategoryService.js":
/*!****************************************************!*\
  !*** ./application/services/subcategoryService.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubcategoryService; });


class SubcategoryService {


    constructor ($http, PARAMS){

        this._$http = $http;
        this._PARAMS = PARAMS;

    }//constructor SubcategoryService

    async getSubcategoryByCategoryId (categoryID){

        try {

            let response = await  this._$http.get(
                `${this._PARAMS.SERVER_URL}${this._PARAMS.GET_SUBCATEGORY_BY_CATEGORY_ID_URL}&categoryID=${categoryID}`
            );

            //return response.data;

            return response.data.data;

        }// try
        catch (ex) {

            console.log("Exception", ex);
            return null;

        }//catch

    }//getSubcategoryByCategoryId


}//SubcategoryService

/***/ })

/******/ });
//# sourceMappingURL=index.js.map