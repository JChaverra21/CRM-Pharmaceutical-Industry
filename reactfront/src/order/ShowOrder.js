import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = "http://localhost:3001/orders/";

const CompShowOrder = () => {
  const [orders, setOrder] = useState([]);
  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    const res = await axios.get(URI);
    setOrder(res.data);
  };

  const deleteOrder = async (id) => {
    await axios.delete(`${URI}${id}`);
    getOrders();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/create" className="btn btn-primary mt-2 mb-2">
            <i className="fas fa-plus"></i>
          </Link>
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th>ID Order</th>
                <th>ID Client</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Products</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.id_client}</td>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>{order.phone}</td>
                  <td>{order.address}</td>
                  <td>{order.products}</td>
                  <td>{order.price}</td>
                  <td>
                    <Link to={`/edit/${order.id}`} className="btn btn-info">
                      <i className="fas fa-edit"></i>
                    </Link>
                    <button
                      onClick={() => deleteOrder(order.id)}
                      className="btn btn-danger"
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompShowOrder;
