"use strict";

export  default  class ProductFilter {



    async  productByFilter ( ) {

        return function ( products , age , brandProduct ) {

            let resultProducts = products.filter( (product)=>{


                return product.age > age || product.brandProduct.indexOf(brandProduct) !== -1;

            } );


            return resultProducts;
        };
    };


}// ProductFilter