"use strict";

export  default  class СontactsService {


    constructor ($http, PARAMS){

        this._$http = $http;
        this._PARAMS = PARAMS;

    }//constructor categoryService

    async getСontacts (){

        try {

            let response = await  this._$http.get(
                `${this._PARAMS.SERVER_URL}${this._PARAMS.GET_ALL_CONTACTS_URL}`
            );

            return response.data;

        }// try
        catch (ex) {

            console.log("Exception", ex);
            return null;

        }//catch

    }//getСontacts


}//СontactsService