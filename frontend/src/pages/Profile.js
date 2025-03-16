import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    profilePicture: ''
  });

  useEffect(() => {
    // Fetch user data from the server
    const fetchUserData = async () => {
      try {
        const res = await axios.get('/api/users/profile');
        setUser(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };
    fetchUserData();
  }, []);

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.put('/api/users/profile', user);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" value={user.name} onChange={onChange} placeholder="Name" required />
      <input type="email" name="email" value={user.email} onChange={onChange} placeholder="Email" required />
      <input type="text" name="phone" value={user.phone} onChange={onChange} placeholder="Phone" />
      <input type="file" name="profilePicture" onChange={e => setUser({ ...user, profilePicture: e.target.files[0] })} />
      <button type="submit">Update Profile</button>
    </form>
  );
}

export default Profile;
