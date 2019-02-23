"use strict";

export  default  class  SearchService {


    constructor ($http, PARAMS){

        this._$http = $http;
        this._PARAMS = PARAMS;

    }//constructor


    async getSearchProductByText (searchString){

        try {

            let response = await  this._$http.get(
                `${this._PARAMS.SERVER_URL}${this._PARAMS.SEARCH_PRODUCTS_URL}&productTitle=${searchString}`
            );

            return response.data;

        }// try
        catch (ex) {

            console.log("Exception", ex);
            return null;

        }//catch

    }//getSearchProductByText

 }