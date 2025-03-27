import { useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState({ name: '', email: '', phone: '', profilePic: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" />
      <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" />
      <input type="text" name="phone" value={user.phone} onChange={handleChange} placeholder="Phone" />
      <input type="file" name="profilePic" onChange={handleChange} />
    </div>
  );
};

export default Profile;
