import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VideoAd = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [metadata, setMetadata] = useState({});
  const [watchTime, setWatchTime] = useState(0);

  useEffect(() => {
    const fetchAd = async () => {
      try {
        const response = await axios.get('/api/ads');
        setVideoUrl(response.data.url);
        setMetadata(response.data.metadata);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAd();
  }, []);

  const handleWatchTime = (e) => {
    setWatchTime(e.target.currentTime);
  };

  const handleVideoEnd = async () => {
    try {
      await axios.post('/api/watch', { watchTime });
      // Update rewards or notify user
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">{metadata.title}</h2>
        <video
          src={videoUrl}
          controls
          onTimeUpdate={handleWatchTime}
          onEnded={handleVideoEnd}
          className="w-full"
        />
        <p className="mt-4">Watch Time: {watchTime} seconds</p>
      </div>
    </div>
  );
};

export default VideoAd;
