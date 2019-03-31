"use strict";

export  default  class CartService {


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

                let orderDetails = new FormData();

                orderDetails.append('orderDetails', JSON.stringify(this.localStorageService.get('cartProduct')));

                orderDetails.append('userFirstAndLastName', userFirstAndLastName);
                orderDetails.append('userEmail', userEmail);
                orderDetails.append('userContactNumberPhone', userContactNumberPhone);
                orderDetails.append('deliveryAddressOrder', deliveryAddressOrder);
                orderDetails.append('commentToTheOrder', commentToTheOrder);


                let response = await  this._$http({

                        method: 'POST',

                        url:  `${this._PARAMS.SERVER_URL}${this._PARAMS.POST_REGISTRATION_NEW_ORDER_URL}`,

                        data:  orderDetails,

                        headers: {'Content-Type': undefined }
            });

                return response.data;


                /*
           let response = await  this._$http.get(
               `${this._PARAMS.SERVER_URL}${this._PARAMS.POST_REGISTRATION_NEW_ORDER_URL}&userFirstAndLastName=${userFirstAndLastName}&userEmail=${userEmail}&userContactNumberPhone=${userContactNumberPhone}&deliveryAddressOrder=${deliveryAddressOrder}&commentToTheOrder=${commentToTheOrder}&orderDetails=${orderDetails}`
           );
            */



            }// try
            catch (ex) {

                console.log("Exception", ex);
                return null;

            }//catch

        }//registrationNewOrder


}//CartService