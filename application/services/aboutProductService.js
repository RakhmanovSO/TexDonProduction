"use strict";

export  default  class  AboutProductService {


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