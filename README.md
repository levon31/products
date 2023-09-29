### Test Next.js App with GraphQL and Product Count

This is a Next.js app that fetches data from a GraphQL API and displays it in a list.

#### Installation

``
npm install
``


#### Running the app

To run the app in development mode, run the following command:

``
npm run dev
``

### Usage

To use the app, visit the index page in your browser. You will see a list of products. Click on a product to increase or decrease its count.

### How it works

The app uses the following technologies:

- Next.js: A React framework for building server-rendered and static web applications
- GraphQL: A query language for APIs
- Tailwind css 

The app fetches data from the GraphQL API using the `getServerSideProps` function. This function is called on the server and the results are passed to the index component.

The index component renders a List component, passing the data as props.

The `List` component loops over the data and renders a `Product` component for each item.

The `Product` component renders the product card and a button to increase or decrease the count.

When the user clicks on the button, the toggleCount function is called. This function updates the product count.

### Conclusion 

This is a simple example of how to build a Next.js app with GraphQL.

The app can be extended to include more features, such as `useQuery` from client side

