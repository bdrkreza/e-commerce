import { gql } from "@apollo/client";

export const GET_ALL_PRODUCT = gql`
  query Products {
    products {
      _id
      name
      title
      image
      rating
      price
      quantity
      description
      slug
      stock
      onSale
      category
    }
  }
`;

export const GET_PRODUCT = gql`
  query Product($productId: ID) {
    product(id: $productId) {
      title
      name
      image
      price
      quantity
      description
      slug
      stock
      onSale
      category
      review {
        date
      }
    }
  }
`;

export const GET_ALL_CATEGORY = gql`
  query Categories {
    categories {
      _id
      image
      category
    }
  }
`;

export const GET_PRODUCT_BY_CATEGORY = gql`
  query Category($categoryId: ID!) {
    category(id: $categoryId) {
      products {
        _id
        name
        title
        image
        price
        rating
        quantity
        description
        category
        review {
          user
          date
          title
          comment
          rating
        }
      }
    }
  }
`;

export const GET_PRODUCT_SEARCH_NAME = gql`
  query Products($filters: ProductFiltersInput) {
    products(filters: $filters) {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;
