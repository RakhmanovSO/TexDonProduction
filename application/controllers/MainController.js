"use strict";

 export default class  MainController{

     constructor( $scope, NewsService, SearchService, CartService , $state  ){

         this._$scope = $scope;

         this._$scope.isActive = false;

         NewsService.getNews().then( news => {

             console.log('NEWS in MainController :' , news);

             $scope.newsList = news;

         } );



         $scope.MakeSearch = function() {

             console.log( 'SearchString in MainController:', $scope.searchString);

             $state.go( 'search', { 'searchString': $scope.searchString } );

         };

// http://qaru.site/questions/55150/how-to-send-and-retrieve-parameters-using-statego-toparams-and-stateparams

             /*
          SearchService.getSearchProductByText($scope.searchString).then( search => {

              console.log('RESPONSE_Search:' , search );

              $scope.productsList = search.data.products;

          } );
                 */

         //$scope.searchString = '';



     }//constructor

}//MainController