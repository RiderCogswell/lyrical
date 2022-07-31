import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient} from '@apollo/client';
import { ApolloProvider, ApolloCache } from '@apollo/client';

const client = new ApolloClient({
  cache: ApolloCache
});
const Root = () => {
  return (
    <ApolloProvider client={client}> 
      <div>Lyrical</div>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
