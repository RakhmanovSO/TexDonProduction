"use strict";

 export default class  MainController{


     constructor( $scope , NewsService , $state){

         $scope.MakeSearch = ()=>{

             console.log($scope.searchString);
             $state.go('search');

         };

         $scope.searchString = '';

         this._$scope = $scope;
         this._$scope.isActive = false;

         NewsService.getNews().then( news => {

             console.log('RESPONSE:' , news);
             $scope.newsList = news;

         } );

     }//constructor

}//MainController