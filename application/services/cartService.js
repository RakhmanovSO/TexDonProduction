"use strict";

export  default  class CartService {


    constructor ($http, PARAMS){

        this._$http = $http;
        this._PARAMS = PARAMS;

    }//constructor categoryService

    async getCart (){

        try {



            return null;

        }// try
        catch (ex) {

            console.log("Exception", ex);
            return null;

        }//catch

    }//getCategories


}//CategoryService