import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  const popularDishes = [
    "Pizza Margherita",
    "Veggie Burger",
    "Chicken Tikka",
    "Pasta Alfredo",
  ];
  const recentOrders = [
    { id: 1, customer: "John Doe", item: "Pizza Margherita", total: "$12.99" },
    { id: 2, customer: "Jane Smith", item: "Pasta Alfredo", total: "$10.49" },
    { id: 3, customer: "Emily Johnson", item: "Veggie Burger", total: "$9.25" },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Food Dashboard</h2>

      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Orders</h5>
              <p className="card-text display-6">1,250</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Revenue</h5>
              <p className="card-text display-6">$18,760</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-header">Popular Dishes</div>
            <ul className="list-group list-group-flush">
              {popularDishes.map((dish, index) => (
                <li key={index} className="list-group-item">
                  {dish}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-header">Recent Orders</div>
            <ul className="list-group list-group-flush">
              {recentOrders.map((order) => (
                <li key={order.id} className="list-group-item">
                  {order.customer} ordered <strong>{order.item}</strong> -{" "}
                  <span>{order.total}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
