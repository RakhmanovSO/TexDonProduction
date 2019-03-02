"use strict";

export  default  class CartService {


    constructor ($http, PARAMS){

        this._$http = $http;
        this._PARAMS = PARAMS;

    }//constructor CartService

    async registrationNewOrder (userFirstAndLastName, userEmail, userContactNumberPhone, deliveryAddressOrder, commentToTheOrder, orderDetailsNew){

        try {

            let orderDetails = new FormData();

            orderDetails.append('orderDetails', orderDetailsNew);


            let response = await  this._$http.post(
                `${this._PARAMS.SERVER_URL}${this._PARAMS.POST_REGISTRATION_NEW_ORDER_URL}&userFirstAndLastName=${userFirstAndLastName}&userEmail=${userEmail}&userContactNumberPhone=${userContactNumberPhone}&deliveryAddressOrder=${deliveryAddressOrder}&commentToTheOrder=${commentToTheOrder}&orderDetails=${orderDetails}`
            );

            return response.data;


        }// try
        catch (ex) {

            console.log("Exception", ex);
            return null;

        }//catch

    }//registrationNewOrder


}//CartService