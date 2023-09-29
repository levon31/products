import React from "react";
import List from "components/products/List";

import {gql} from "@apollo/client";
import createApolloClient from "apollo-client";
// import products from "api/data";

/**
 *
 * This function fetches a list of products from the GraphQL API.
 *
 */
export async function getServerSideProps() {
  // Create an Apollo client.
  const client = createApolloClient();

  // sample query for products
  // which won't return anything
  // instead added sample data
  // in api/data.js for demonstration purposes
  // to see how the ui looks like just uncomment lin 6
  // and in line 38  return products
  const {data} = await client.query({
    query: gql`
      query Products {
        products {
          name
          price
          category
         }
      }
    `,
  });


  return {
    props: {
      products: data,
    },
  };
}

export default function Home({products}) {

  return (
    <List data={products}/>
  );
}
