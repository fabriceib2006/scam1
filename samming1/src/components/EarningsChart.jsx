const EarningsDashboard = ({ earningsData }) => {
    return (
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Earnings Overview</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold">Today's Earnings: ${earningsData.today}</h3>
          <p className="text-gray-600">This Week: ${earningsData.week}</p>
          <p className="text-gray-600">This Month: ${earningsData.month}</p>
          <p className="text-gray-600">This Year: ${earningsData.year}</p>
        </div>
      </div>
    );
  };
  
  export default EarningsDashboard;
  