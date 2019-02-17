"use strict";

 export default class  MainController{


     constructor( $scope , NewsService){

         console.log($scope);

         this._$scope = $scope;
         this._$scope.isActive = false;

         NewsService.getNews().then( news => {

             console.log('RESPONSE:' , news);
             $scope.newsList = news;

         } );

     }//constructor

}//MainController