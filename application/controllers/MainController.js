"use strict";

 export default class  MainController{

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

             $scope.$parent.Total = CartService.total();

             CartService.changeStorageService($scope.cart);
         };


     }//constructor

}//MainController