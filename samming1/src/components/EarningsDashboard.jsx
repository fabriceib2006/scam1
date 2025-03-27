const EarningsDashboard = ({ earningsData }) => {
  return (
    <div>
      <h3>Earnings Overview</h3>
      <p>Today: ${earningsData.today}</p>
      <p>This Week: ${earningsData.week}</p>
      <p>This Month: ${earningsData.month}</p>
      <p>This Year: ${earningsData.year}</p>
    </div>
  );
};

export default EarningsDashboard;
