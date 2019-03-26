"use strict";

export default class  CartController {


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