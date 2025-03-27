import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DashboardV3 = () => {
  // Data for Total Sales Chart
  const totalSalesData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Total Sales',
        data: [50000, 52000, 60000, 64559.25],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Data for Conversion Rate Chart
  const conversionRateData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Conversion Rate',
        data: [2.5, 2.3, 2.2, 2.19],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Data for Store Sessions Chart
  const storeSessionsData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Store Sessions',
        data: [65000, 68000, 70000, 70719],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Data for Visitors Analytics Chart
  const visitorsAnalyticsData = {
    labels: ['Dec 29', 'Jan 4', 'Jan 15', 'Jan 27', 'Feb 7', 'Feb 19', 'Mar 3', 'Mar 16'],
    datasets: [
      {
        label: 'Unique Visitors',
        data: [20, 25, 30, 35, 40, 45, 50, 42],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
      {
        label: 'Page Views',
        data: [10, 15, 20, 25, 30, 35, 40, 35],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      tooltip: { mode: 'index', intersect: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
          <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Dashboard v3</h2>
        <div className="text-sm text-gray-500">
          Home / Dashboard / Dashboard v3
        </div>
      </div>

      {/* Date Range */}
      <div className="mb-6 ml-60 w-249">
        <select className="p-2 border rounded">
          <option>9 March 2025 - 16 March 2025</option>
          <option>1 March - 8 March 2025</option>
        </select>
        <span className="ml-2 text-gray-500">compared to 1 March - 8 March 2025</span>
      </div>

      {/* Main Dashboard Cards */}
      <div className="grid grid-cols-1 mb-10 ml-60 w-249 md:grid-cols-3 gap-6">
        {/* Total Sales */}
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium">TOTAL SALES <FaInfoCircle className="inline ml-1" /></h3>
          </div>
          <p className="text-2xl font-bold">$64,559.25</p>
          <p className="text-green-400">▲ 32.21% compare to last week</p>
          <div className="flex justify-between mt-4 text-sm">
            <div>Total sales order</div>
            <div>1,568</div>
          </div>
          <div className="flex justify-between text-sm">
            <div>Avg. sales per order</div>
            <div>$41.2</div>
          </div>
          <Line data={totalSalesData} options={options} />
        </div>

        {/* Conversion Rate */}
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium">CONVERSION RATE <FaInfoCircle className="inline ml-1" /></h3>
          </div>
          <p className="text-2xl font-bold">2.19%</p>
          <p className="text-red-400">▼ 0.5% compare to last week</p>
          <div className="mt-4 text-sm">
            <p><span className="text-red-500">●</span> Added to cart <span className="text-green-400">▲ 2.62%</span> 3.79%</p>
            <p><span className="text-orange-500">●</span> Reached checkout <span className="text-green-400">▲ 11%</span> 1.79%</p>
            <p><span className="text-green-500">●</span> Sessions converted <span className="text-green-400">▲ 5%</span> 2.19%</p>
          </div>
          <Line data={conversionRateData} options={options} />
        </div>

        {/* Store Sessions */}
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium">STORE SESSIONS <FaInfoCircle className="inline ml-1" /></h3>
          </div>
          <p className="text-2xl font-bold">70,719</p>
          <p className="text-green-400">▲ 9.5% compare to last week</p>
          <div className="mt-4 text-sm">
            <p><span className="text-green-500">●</span> Mobile <span className="text-green-400">▲ 25.7%</span> 53,210</p>
            <p><span className="text-blue-500">●</span> Desktop <span className="text-green-400">▲ 16%</span> 11,959</p>
            <p><span className="text-blue-500">●</span> Tablet <span className="text-green-400">▲ 7.9%</span> 5,545</p>
          </div>
          <Line data={storeSessionsData} options={options} />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {/* Visitors Analytics */}
        <div className="bg-gray-800 text-white mb-10 ml-60 w-249 p-4 rounded-lg col-span-2 inline-block">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium">VISITORS ANALYTICS <FaInfoCircle className="inline ml-1" /></h3>
          </div>
          <div className="flex justify-between mb-4">
            <p>New Visitors: 127.1K <span className="text-green-400">▲ 25.5% from previous 7d...</span></p>
            <p>Returning Visitors: 179.9K <span className="text-green-400">▲ 5.33% from previous 7d...</span></p>
            <p>Total Page Views: 766.8K <span className="text-red-400">▼ 0.323% from previous 7d...</span></p>
          </div>
          <Line data={visitorsAnalyticsData} options={options} />
        </div>

        {/* Session by Location */}
        <div className="bg-gray-800 mb-10 ml-60 w-249 text-white p-4 rounded-lg inline-block">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium">SESSION BY LOCATION <FaInfoCircle className="inline ml-1" /></h3>
          </div>
          {/* Placeholder for world map - you can use a library like react-simple-maps for this */}
          <div className="h-48 bg-gray-700 rounded flex items-center justify-center">
            <p>World Map Placeholder</p>
          </div>
          <div className="mt-4 text-sm">
            <p><span className="text-blue-500">●</span> United States 39.85%</p>
            <p><span className="text-red-500">●</span> China 14.23%</p>
            <p><span className="text-gray-500">●</span> Germany 12.83%</p>
            <p><span className="text-blue-500">●</span> France 11.14%</p>
            <p><span className="text-red-500">●</span> Japan 10.75%</p>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 ml-60 w-250 bg-green-300 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
         {/* Visitors Analytics */}
         <div className="bg-gray-800 text-white md:mb-10 w-166 p-4 rounded-lg col-span-2">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium">VISITORS ANALYTICS <FaInfoCircle className="inline ml-1" /></h3>
          </div>
          <div className="flex justify-between mb-4">
            <p>New Visitors: 127.1K <span className="text-green-400">▲ 25.5% from previous 7d...</span></p>
            <p>Returning Visitors: 179.9K <span className="text-green-400">▲ 5.33% from previous 7d...</span></p>
            <p>Total Page Views: 766.8K <span className="text-red-400">▼ 0.323% from previous 7d...</span></p>
          </div>
          <Line data={visitorsAnalyticsData} options={options} />
        </div>

        {/* Session by Location */}
        <div className="bg-gray-800 mb-10 w-80 text-white p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium">SESSION BY LOCATION <FaInfoCircle className="inline ml-1" /></h3>
          </div>
          {/* Placeholder for world map - you can use a library like react-simple-maps for this */}
          <div className="h-48 bg-gray-700 rounded flex items-center justify-center">
            <p>World Map Placeholder</p>
          </div>
          <div className="mt-4 text-sm">
            <p><span className="text-blue-500">●</span> United States 39.85%</p>
            <p><span className="text-red-500">●</span> China 14.23%</p>
            <p><span className="text-gray-500">●</span> Germany 12.83%</p>
            <p><span className="text-blue-500">●</span> France 11.14%</p>
            <p><span className="text-red-500">●</span> Japan 10.75%</p>
          </div>
        </div>
        <div className='make this'>
                 {/* Top Products by Units Sold */}
       <div className="bg-gray-800 mb-10 w-77  text-white p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium">TOP PRODUCTS BY UNITS SOLD <FaInfoCircle className="inline ml-1" /></h3>
          </div>
          <div className="space-y-2">
            <p>Apple iPhone XR (2025) <span className="float-right">195 sold</span> <span className="block text-gray-400">$799.00</span></p>
            <p>Apple iPhone XS (2025) <span className="float-right">185 sold</span> <span className="block text-gray-400">$1,199.00</span></p>
            <p>Apple iPhone XS Max (2025) <span className="float-right">129 sold</span> <span className="block text-gray-400">$3,399.00</span></p>
            <p>Huawei Y5 (2025) <span className="float-right">96 sold</span> <span className="block text-gray-400">$99.00</span></p>
            <p>Huawei Nova 4 (2025) <span className="float-right">55 sold</span> <span className="block text-gray-400">$499.00</span></p>
          </div>
        </div>
        {/* Top Products by Units Sold */}
        <div className="bg-gray-800 mb-10 w-77 text-white p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium">TOP PRODUCTS BY UNITS SOLD <FaInfoCircle className="inline ml-1" /></h3>
          </div>
          <div className="space-y-2">
            <p>Apple iPhone XR (2025) <span className="float-right">195 sold</span> <span className="block text-gray-400">$799.00</span></p>
            <p>Apple iPhone XS (2025) <span className="float-right">185 sold</span> <span className="block text-gray-400">$1,199.00</span></p>
            <p>Apple iPhone XS Max (2025) <span className="float-right">129 sold</span> <span className="block text-gray-400">$3,399.00</span></p>
            <p>Huawei Y5 (2025) <span className="float-right">96 sold</span> <span className="block text-gray-400">$99.00</span></p>
            <p>Huawei Nova 4 (2025) <span className="float-right">55 sold</span> <span className="block text-gray-400">$499.00</span></p>
          </div>
        </div>

        {/* Marketing Campaign */}
        <div className="bg-gray-800 mb-10 w-77 text-white p-4 rounded-lg col-span-2">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium">MARKETING CAMPAIGN <FaInfoCircle className="inline ml-1" /></h3>
          </div>
          <div className="space-y-4">
            <div>
              <p>Email Marketing Campaign</p>
              <p className="text-gray-400">Mon 12/6 - Sun 18/6</p>
              <div className="w-full bg-gray-600 rounded-full h-2.5">
                <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
              </div>
              <p className="text-sm">80% <span className="text-green-400">57.5% people click the email</span></p>
              <button className="mt-2 bg-orange-500 text-white px-4 py-1 rounded">View campaign</button>
            </div>
            <div>
              <p>Facebook Marketing Campaign</p>
              <p className="text-gray-400">Sat 10/6 - Sun 18/6</p>
              <div className="w-full bg-gray-600 rounded-full h-2.5">
                <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <p className="text-sm">60% <span className="text-green-400">+124k visitors from facebook</span></p>
              <button className="mt-2 bg-orange-500 text-white px-4 py-1 rounded">View campaign</button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardV3;