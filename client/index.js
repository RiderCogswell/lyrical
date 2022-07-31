import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient} from '@apollo/client';
import { ApolloProvider, ApolloCache } from '@apollo/client';
import SongList from './components/SongList';

const client = new ApolloClient({
  cache: ApolloCache
});
const Root = () => {
  return (
    <ApolloProvider client={client}> 
      <SongList />
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
