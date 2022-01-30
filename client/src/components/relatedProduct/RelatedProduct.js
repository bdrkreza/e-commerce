import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_PRODUCT_BY_CATEGORY } from '../../gqlOperation/Query';

/**
* @author
* @function RelatedProduct
**/

export const RelatedProduct = ({productId}) => {
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_CATEGORY, {
    variables: {
      categoryId: productId,
    },
  });

  if (loading) {
    return <h3 className=" card-panel cyan-text center-align">category are loading...</h3>;
  }
  if (error) {
    return <h3 className=" card-panel red-text">{error.message}</h3>;
  }
  return(
    <div>RelatedProduct</div>
   )

 }