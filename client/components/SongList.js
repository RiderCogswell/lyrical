import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client'

const query = gql`
  query getSongs {
    songs {
      title
    }
  }
`;

const SongList = () => {
  const { loading, error, data } = useQuery(query);
  console.log(data);
  if (error) return <p>Error!</p>
  if (loading) return <p>Loading...</p>

  return (
    <div>
      <h2>SongList</h2>
      {data.songs.map(({ title }) => (
        <div> 
          <h4>{title}</h4>
        </div>
      ))}
    </div>
  )
}


export default SongList;