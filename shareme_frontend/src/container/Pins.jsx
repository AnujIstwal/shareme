import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Navbar,
  Feed,
  PinDetail,
  CreatePin,
  Search,
} from '../components/index';

import { client } from '../client';
import { userQuery } from '../utils/data';
import { fetchUser } from '../utils/fetchUser';

const Pins = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState(null);

  const userInfo = fetchUser();

  useEffect(() => {
    const query = userQuery(userInfo?.email);
    client.fetch(query).then(data => {
      setUser(data[0]);
    });
  }, [userInfo?.email]);

  return (
    <div className="px-2 md:px-5">
      <div className="bg-gray-100">
        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          user={user && user}
        />
      </div>
      <div className="h-full">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/category/:categoryId" element={<Feed />} />
          <Route
            path="/pin-detail/:pinId"
            element={<PinDetail user={user} />}
          />
          <Route path="/create-pin" element={<CreatePin user={user} />} />
          <Route
            path="/search"
            element={
              <Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                user={user}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Pins;
