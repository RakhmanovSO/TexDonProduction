"use strict";

export  default  class AboutNewsService {


    constructor ($http, PARAMS){

        this._$http = $http;
        this._PARAMS = PARAMS;

    }//constructor


    async getNewsByID (newsID){

        try {

            let response = await  this._$http.get(
                `${this._PARAMS.SERVER_URL}${this._PARAMS.GET_NEWS_BY_ID_URL}&newsID=${newsID}`
            );

            return response.data;

        }// try
        catch (ex) {

            console.log("Exception", ex);
            return null;

        }//catch

    }//getAllNewsListMenu



}//AboutNewsService