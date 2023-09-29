import {ApolloClient, InMemoryCache} from "@apollo/client";

const createApolloClient = () => {
  // the endpoint will return some dummy data
  // we are not using it
  return new ApolloClient({
    uri: "https://countries.trevorblades.com",
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;