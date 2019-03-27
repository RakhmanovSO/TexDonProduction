"use strict";

export  default  class ProductService {


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