"use strict";

export  default  class NewsService {


    constructor ($http, PARAMS){

        this._$http = $http;
        this._PARAMS = PARAMS;

    }//constructor NewsService

    async getNews (){

        try {

            let response = await  this._$http.get(
                `${this._PARAMS.SERVER_URL}${this._PARAMS.GET_NEWS_URL}`
            );

            return response.data.data;

        }// try
        catch (ex) {

            console.log("Exception", ex);
            return null;

        }//catch

    }//getNews


}//NewsService