import { gql } from "@apollo/client";

export const GET_ALL_PRODUCT = gql`
  query getAllProduct($pagination: PaginationArg) {
    products(pagination: $pagination) {
      data {
        id
        attributes {
          name
          description
          price
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
      meta {
        pagination {
          page
          pageSize
          pageCount
          total
        }
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query Product($productId: ID) {
    product(id: $productId) {
      data {
        id
        attributes {
          name
          price
          description
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ALL_CATEGORY = gql`
  query Categories {
    categories {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;

export const GET_PRODUCT_BY_CATEGORY = gql`
  query Category($categoryId: ID) {
    category(id: $categoryId) {
      data {
        attributes {
          products {
            data {
              id
              attributes {
                name
                price
                description
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
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
