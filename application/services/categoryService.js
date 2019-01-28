"use strict";

export  default  class CategoryService {


    constructor ($http, PARAMS){

        this._$http = $http;
        this._PARAMS = PARAMS;

    }//constructor categoryService

    async getCategories (){

        try {

            let response = await  this._$http.get(
                    `${this._PARAMS.SERVER_URL}${this._PARAMS.GET_ALL_CATEGORIES_URL}`
            );

            return response.data.data;

        }// try
        catch (ex) {

            console.log("Exception", ex);
            return null;

        }//catch

    }//getCategories


}//CategoryService