import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Categories } from "../components/category/Categories";
import { Hero } from "../components/hero/Hero";
import { Product } from "../components/product/Product";
import { GET_ALL_PRODUCT } from "../gqlOperation/Query";

/**
 * @author
 * @function home
 **/

export const Home = (props) => {
  const [page, setPage] = useState(1);
  const { loading, error, data, refetch } = useQuery(GET_ALL_PRODUCT);
  useEffect(() => {
    if (page !== 1) {
      refetch();
    }
  }, [page]);

  const updatePage = (page) => {
    setPage(page);
  };

  if (loading) {
    return (
      <h3 className=" card-panel cyan-text center-align">
        Product are loading...
      </h3>
    );
  }
  if (error) {
    return <h3 className=" card-panel red-text cyan-text">{error.message}</h3>;
  }
  return (
    <div>
      <Hero data={data.products} />
      <div className="container cyan-text">
        <h1>category</h1>
      </div>
      <Categories />
      <div className="container cyan-text">
        <h1>product</h1>
      </div>
      <Product data={data?.products} />
    </div>
  );
};
