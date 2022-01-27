import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Categories } from "../components/category/Categories";
import { Pagination } from "../components/pagination/Pagination";
import { Product } from "../components/product/Product";
import { SearchBar } from "../components/searchBar/SearchBar";
import { GET_ALL_PRODUCT } from "../gqlOperation/Query";

/**
 * @author
 * @function home
 **/

export const Home = (props) => {
  const [page, setPage] = useState(1);
  const { loading, error, data, refetch } = useQuery(GET_ALL_PRODUCT, {
    variables: {
      pagination: {
        page: page,
        pageSize: 2,
      },
    },
  });

  useEffect(() => {
    if (page !== 1) {
      refetch();
    }
  }, [page]);
  
  const updatePage = (page) => {
    setPage(page);
  };

  if (loading) {
    return <h1>Loading .......</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      <SearchBar />
      <Categories />
      <Product data={data?.products.data} />
      <Pagination
        pageCount={data?.products.meta.pagination.pageCount}
        updatePage={updatePage}
      />
    </div>
  );
};
