"use strict";

export  default  class ProductImagePath {


    constructor ($http, PARAMS){

        this._$http = $http;
        this._PARAMS = PARAMS;

    }//constructor ProductService


    async getProductsImagesPath (productID){

        try {

            let response = await  this._$http.get(
                `${this._PARAMS.SERVER_URL}${this._PARAMS}&productID=${productID}`
            );

            return response.data;

            // return response.data;

        }// try
        catch (ex) {

            console.log("Exception", ex);
            return null;

        }//catch

    }//getProductsImagesPath




}//ProductImagePath