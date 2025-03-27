import { useState } from 'react';

const AdViewing = ({ adData }) => {
  const [earnings, setEarnings] = useState(0);

  const handleAdWatch = () => {
    setEarnings(earnings + 0.05);
    // Logic to track ad views and update earnings
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      <h3 className="text-2xl font-semibold mb-4">Watch This Ad</h3>
      <video
        className="w-full rounded-lg"
        src={adData.videoUrl}
        controls
        onEnded={handleAdWatch}
      />
      <p className="mt-4 text-xl">Earnings from this ad: ${earnings}</p>
    </div>
  );
};

export default AdViewing;
