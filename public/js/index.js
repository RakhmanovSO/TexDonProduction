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
/* harmony import */ var _services_categoryService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/categoryService */ "./application/services/categoryService.js");
/* harmony import */ var _services_subcategoryService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/subcategoryService */ "./application/services/subcategoryService.js");
/* harmony import */ var _services_productService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/productService */ "./application/services/productService.js");
/* harmony import */ var _services_newsService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/newsService */ "./application/services/newsService.js");
/* harmony import */ var _services_firmInfoService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/firmInfoService */ "./application/services/firmInfoService.js");
/* harmony import */ var _services_aboutProductService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/aboutProductService */ "./application/services/aboutProductService.js");
/* harmony import */ var _services_aboutNewsService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/aboutNewsService */ "./application/services/aboutNewsService.js");
/* harmony import */ var _services_contactsService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/contactsService */ "./application/services/contactsService.js");
/* harmony import */ var _services_cartService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/cartService */ "./application/services/cartService.js");


// =================== CONTROLLERS =================== //



// ==================== SERVICES ===================== //














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
    _controllers_MainController__WEBPACK_IMPORTED_MODULE_0__["default"] ]);


angular.module( 'TexDon.services')
    .service('CategoryService',['$http', 'PARAMS', _services_categoryService__WEBPACK_IMPORTED_MODULE_1__["default"]]);

angular.module( 'TexDon.services')
    .service('SubcategoryService',['$http', 'PARAMS', _services_subcategoryService__WEBPACK_IMPORTED_MODULE_2__["default"]]);

angular.module( 'TexDon.services')
    .service('ProductService',['$http', 'PARAMS', _services_productService__WEBPACK_IMPORTED_MODULE_3__["default"]]);

angular.module( 'TexDon.services')
    .service('NewsService',['$http', 'PARAMS', _services_newsService__WEBPACK_IMPORTED_MODULE_4__["default"]]);


angular.module( 'TexDon.services')
    .service('FirmInfoService',['$http', 'PARAMS', _services_firmInfoService__WEBPACK_IMPORTED_MODULE_5__["default"]]);


angular.module( 'TexDon.services')
    .service('AboutProductService',['$http', 'PARAMS', _services_aboutProductService__WEBPACK_IMPORTED_MODULE_6__["default"]]);


angular.module( 'TexDon.services')
    .service('AboutNewsService',['$http', 'PARAMS', _services_aboutNewsService__WEBPACK_IMPORTED_MODULE_7__["default"]]);


angular.module( 'TexDon.services')
    .service('СontactsService',['$http', 'PARAMS', _services_contactsService__WEBPACK_IMPORTED_MODULE_8__["default"]]);

angular.module( 'TexDon.services')
    .service('CartService',['$http', 'PARAMS', _services_cartService__WEBPACK_IMPORTED_MODULE_9__["default"]]);





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
                            'controller': ['$scope', '$sce', 'FirmInfoService',  'firmInfo' , function( $scope , $sce , FirmInfoService,  firmInfo){


                            $scope.firmInfo = $sce.trustAsHtml(firmInfo.data.text);
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

                        $scope.products = product.data;

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

                            $scope.products.product.forEach( function ( product ) {

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

                        $scope.singleProduct = moreAboutProduct.data;

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


     constructor( $scope  ){

         this._$scope = $scope;

     }//constructor

}//MainController

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


    constructor ($http, PARAMS){

        this._$http = $http;
        this._PARAMS = PARAMS;

    }//constructor categoryService

    async getCart (){

        try {



            return null;

        }// try
        catch (ex) {

            console.log("Exception", ex);
            return null;

        }//catch

    }//getCategories


}//CategoryService

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


    async getProductsBySubcategoryId (subcategoryID){

        try {

            let response = await  this._$http.get(
                `${this._PARAMS.SERVER_URL}${this._PARAMS.GET_PRODUCTS_BY_SUBCATEGORY_ID_URL}&subcategoryID=${subcategoryID}`
            );

            return response.data;

           // return response.data;

        }// try
        catch (ex) {

            console.log("Exception", ex);
            return null;

        }//catch

    }//getProductsBySubcategoryId




}//ProductService

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