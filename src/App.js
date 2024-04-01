import React from "react";
import { useState } from "react";
import { Doughnut, Bar } from 'react-chartjs-2';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTachometerAlt, faBox, faUsers, faDollarSign, faBullhorn, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'

import './App.css'

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  // Static data for bar chart
  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Monthly Earning',
        data: [80, 70, 77, 90, 93, 50, 44, 67, 33, 78, 34, 60, 80], // Static data for the first two months
        backgroundColor: '#f0f0f0',
        borderRadius: 7,
        hoverBackgroundColor: '#1d1850',
        borderWidth: 1,
        barThickness: 'flex',
      },
    ]
  };

  // Static data for pie chart
  const pieChartData = {
    labels: ['2016', '2017', '2018'],
    datasets: [{

      data: [80000, 45677, 78888], // Static data for all years
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#7C7E81',
        '#9B59B6'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#7C7E81',
        '#9B59B6'
      ],
    }]
  };
  const options = {

    scales: {

      x: {
        grid: {
          display: false // Remove x-axis grid lines
        }
      },
      y: {
        grid: {
          display: false // Remove y-axis grid lines
        }
      },

    }
  };


  return (
    <>

      <div className={`container-fluid ${isSidebarOpen ? "sidebar-open" : ""}`}>
        {/* Hamburger Menu Button */}
        <div className="hamburger-menu" onClick={toggleSidebar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">

              <h4 className="dashboard"><i className="fa fa-globe"></i>Dashboard</h4>

              <div className="dashbox">
                <ul>
                  <li><i className="fa fa-globe"></i>Dashboard</li>
                  <li><i className="fa fa-cubes"></i>Product <span>&#62;</span></li>
                  <li><i className="fa fa-users"></i>Customers <span>&#62;</span></li>
                  <li><i className="fa fa-dollar"></i>Income <span>&#62;</span></li>
                  <li><i className="fa fa-bullhorn"></i>Promote <span>&#62;</span></li>
                  <li><i className="fa fa-question-circle"></i>Help<span>&#62;</span></li>

                  <li id="profile">
                    <img src="images/profile.jpg" alt="Profile Image" width="40" height="40" />
                    <span>Naveen Bellad</span>
                  </li>

                </ul>
              </div>
            </div>

            <div className="col-lg-10">
              <div class="name">
                <div class="hello-icon"><i class="fa fa-hand-paper"></i> <h5>Hello Shahrukh, </h5></div>
                <div class="search-bar">
                  <input type="text" placeholder="Search..." />
                  <button><i class="fa fa-search"></i></button>
                </div>

              </div>
              <div className="boxes">
                <div className="box1">
                  <div class="content">
                    <img src="images/dollor.png"  alt="loading" />
                    <div class="text">
                      <p>Earning</p>
                      <h3>$198k</h3>
                      <p className="re">&#x2191; 37.8% <span id="ree">this month</span></p>
                    </div>
                  </div>
                </div>

                <div className="box1">
                  <div class="content">
                    <img src="images/order.png" alt="loading"/>
                    <div class="text">
                      <p>orders</p>
                      <h3>$2.4k</h3>
                      <p className="red">&#8595; 2% <span id="ree">this month</span></p>
                    </div>
                  </div>
                </div>

                <div className="box1">
                  <div class="content">
                    <img src="images/wallet.jpg"  alt="loading"/>
                    <div class="text">
                      <p>Balance</p>
                      <h3>$2.4k</h3>
                      <p className="red">&#8595; 2% <span id="ree">this month</span></p>
                    </div>
                  </div>
                </div>

                <div className="box1">
                  <div class="content">
                    <img src="images/sales.png"  alt="loading"/>
                    <div class="text">
                      <p>Total sales</p>
                      <h3>$98k</h3>
                      <p className="re">&#x2191; 11% <span id="ree">this week</span></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-8">
                  <Bar data={barChartData} options={options} />
                </div>
                <div className="col-lg-4">
                  <div>
                    <h5>Customers</h5>
                  </div>
                  <Doughnut data={pieChartData} options={options} id="doughnut" />
                </div>
              </div>

              <div className="row" style={{ backgroundColor: "white" }} id="tablerow">
                <div class="container">
                  <div className="prod">
                    <h4>Product sell</h4>
                    <div className="sera">
                      <input type="text" placeholder="Search..." />
                      <select>
                        <option>Last 30 days</option>

                      </select>
                    </div>
                  </div>
                  <table>
                    <thead>
                      <tr>
                        <th>Product Name</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Sales</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>

                          <img src="images/product.jpg" alt="Product Image" width="50" />
                          <span>Abstarct 3d</span>
                          <p class="description">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </td>

                        <td>32 in stock</td>
                        <td>$44</td>
                        <td>20</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
