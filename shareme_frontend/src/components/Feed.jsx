import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../client';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';
import { searchQuery, feedQuery } from '../utils/data';

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);
  const { categoryId } = useParams();

  //It will initiate on change of categoryId
  useEffect(() => {
    setLoading(true);
    if (categoryId) {
      const query = searchQuery(categoryId);
      client.fetch(query).then(data => {
        setPins(data);
        setLoading(false);
      });
    } else {
      client.fetch(feedQuery).then(data => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);

  if (loading)
    return <Spinner message="we are adding new ideas to your feed" />;

  return (
    <div>
      {pins?.length > 0 ? (
        <MasonryLayout pins={pins} />
      ) : (
        <h1 className="flex flex-row justify-center">
          No pins added for this category{' '}
        </h1>
      )}
    </div>
  );
};

export default Feed;
