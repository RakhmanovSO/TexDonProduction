"use strict";

export default class  CartController {


    constructor( $scope, CartService , SearchService, $state , $stateProvider ) {


        $scope.cart = [];

        $scope.totalPrice = 0;


        $scope.UpdateCartTotal = function ( ) {

            if ( $scope.cart.length !== 0){

                $scope.totalPrice = $scope.cart.reduce( ( previousValue, productItem) =>{
                    return previousValue + productItem.productPrice *  productItem.amount;
                }, 0 );

            }//if


        };


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
                    'amount': 1,
                    'isInCart': true

                });

                $scope.UpdateCartTotal();

                console.log('CART in CartController:', $scope.cart);

            }//if

        };



        $scope.RemoveProductFromCart = function (index) {

                event.stopPropagation();

            $scope.cart.splice(index , 1);

            $scope.UpdateCartTotal();

        };



        $scope.ChangeAmount = function (index, flag) {

           let product =  $scope.cart[index];

            if (flag === true) { // добавить (+ 1 ед.)

                product.amount++;
            }//if
            else if ($scope.cart[index].amount > 0 ) {  // убрать  (- 1 ед.)

                product.amount--;

                if( product.amount === 0){

                    $scope.RemoveProductFromCart(index);
                }

            }//else if

            event.stopPropagation();

            $scope.UpdateCartTotal();

        };


    }//constructor



}//  CartController