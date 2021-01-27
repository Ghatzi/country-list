import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import GetCountries from './countries';

import { Box, Container, Avatar, Typography } from '@material-ui/core';
import './App.css';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const link = from([
  errorLink,
  new HttpLink({ uri: 'https://countries-274616.ew.r.appspot.com/' })
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Container>
        <Box textAlign="center" m={2}>
          <Avatar alt="George Hatzi" src="logo.jpg" className="logo" />
          <Typography variant="h3">Country Details</Typography>
          <Typography variant="body1">by George Hatzi</Typography>
        </Box>
        <GetCountries />
      </Container>
    </ApolloProvider>
  );
}

export default App;
