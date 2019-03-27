"use strict";

export  default  class SubcategoryService {


    constructor ($http, PARAMS){

        this._$http = $http;
        this._PARAMS = PARAMS;

    }//constructor SubcategoryService

    async getSubcategoryByCategoryId (categoryID){

        try {

            let response = await  this._$http.get(
                `${this._PARAMS.SERVER_URL}${this._PARAMS.GET_SUBCATEGORY_BY_CATEGORY_ID_URL}&categoryID=${categoryID}`
            );

            //return response.data;

            return response.data.data;

        }// try
        catch (ex) {

            console.log("Exception", ex);
            return null;

        }//catch

    }//getSubcategoryByCategoryId


}//SubcategoryService