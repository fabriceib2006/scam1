import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [userData, setUserData] = useState({});
  const [watchHistory, setWatchHistory] = useState([]);
  const [rewards, setRewards] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get('/api/user');
        setUserData(userResponse.data);
        const watchResponse = await axios.get('/api/watch');
        setWatchHistory(watchResponse.data);
        const rewardsResponse = await axios.get('/api/rewards');
        setRewards(rewardsResponse.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl mb-4">Dashboard</h1>
      <div className="mb-4">
        <h2 className="text-2xl">Account Information</h2>
        <p>Username: {userData.username}</p>
        <p>Email: {userData.email}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl">Watch History</h2>
        <ul>
          {watchHistory.map((ad, index) => (
            <li key={index}>
              {ad.title} - {ad.duration} minutes
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl">Rewards</h2>
        <p>Current Reward Balance: {rewards} points</p>
      </div>
    </div>
  );
};

export default Dashboard;
