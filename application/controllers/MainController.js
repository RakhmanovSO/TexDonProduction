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



         $scope.cart = CartService.getCart();


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

                 if($scope.cart[i].productID===product.productID){
                     count++;
                 }//if

             }//for

             if(count === 0){

                 let newProduct = CartService._getSimpleProduct(product);

                 newProduct.isInCart=true;

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



         //// из примера   изменение кол-ва товара в корзине    ////
         $scope.ChangeProductAmount = function (product){

             if(product.amount == 0){
                 $scope.RemoveProduct(product);
             }

             $scope.$parent.$parent.Total = CartService.total();   // ????   $scope.$parent.$parent.Total

             CartService.changeStorageService($scope.cart);
         };




         /////////////////   изменение кол-ва товара в корзине

         $scope.ChangeAmountProductInCart = function (index, flag) {

             let product =  $scope.cart[index];

             if (flag === true) { // добавить (+ 1 ед.)

                 product.amountProduct++;
             }//if
             else if ($scope.cart[index].amountProduct > 0 ) {  // убрать  (- 1 ед.)

                 product.amountProduct--;

                 if( product.amountProduct === 0){

                    // $scope.RemoveProductFromCart(index);

                     $scope.RemoveProduct(product);

                 }

             }//else if

             event.stopPropagation();

             $scope.UpdateCartTotal();

         }; // ChangeAmount



         $scope.totalPrice = 0;


         $scope.UpdateCartTotal = function ( ) {

             if ( $scope.cart.length !== 0){

                 $scope.totalPrice = $scope.cart.reduce( ( previousValue, productItem) =>{
                     return previousValue + productItem.productPrice *  productItem.amountProduct;
                 }, 0 );

             }//if


         };// UpdateCartTotal

        ////////////////////////////////////////////////////



            ///  Оформить заказ ///

         $scope.ConfirmOrder = function() {

             console.log( 'infoOrder:', $scope.userFirstAndLastName,  $scope.userEmail, $scope.userContactNumberPhone);

             $state.go( 'cart', {'userFirstAndLastName': $scope.userFirstAndLastName, 'userEmail': $scope.userEmail, 'userContactNumberPhone': $scope.userContactNumberPhone,  'deliveryAddressOrder': $scope.deliveryAddressOrder, 'commentToTheOrder': $scope.commentToTheOrder} );

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