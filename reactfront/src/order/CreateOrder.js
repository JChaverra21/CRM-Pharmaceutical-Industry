import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:3001/orders/";

const CompCreateOrder = () => {
  const [id_client, setid_client] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [products, setproducts] = useState("");
  const [price, setprice] = useState("");
  const navigate = useNavigate();

  //procedimiento guardar
  const store = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      id_client: id_client,
      name: name,
      email: email,
      phone: phone,
      address: address,
      products: products,
      price: price,
    });
    navigate("/");
  };

  /*function validarString(text) {
    if (text.match("[0-9]") == null) {
      return true;
    } else {
      return false;
    }
  }

  function validarInt(text) {
    if (text.match("[A-Za-z]") != null) {
      return false;
    } else {
      return true;
    }
  }

  function validarEmail(text) {
    if (
      text.match("[a-z]") == null ||
      text.match("[0-9]") == null ||
      text.match("[^A-Za-z0-9]") == null
    ) {
      return false;
    } else {
      return true;
    }
  }

  function validarAddress(text) {
    if (text.match("[A-Za-z]") == null && text.match("[0-9]") == null) {
      return false;
    } else {
      return true;
    }
  }

  function validarCampo(text) {
    if (text == null || text.length == 0) {
      return false;
    } else {
      return true;
    }
  }

  function camposValidados() {
    if (
      validarCampo(id_client) == false ||
      validarCampo(name) == false ||
      validarCampo(email) == false ||
      validarCampo(phone) == false ||
      validarCampo(address) == false ||
      validarCampo(products) == false ||
      validarCampo(price) == false
    ) {
      return false;
    } else {
      return true;
    }
  }*/

  return (
    <div className="container">
      <h3>Create POST</h3>
      <form onSubmit={store} className="needs-validation" noValidate>
        <div className="row g-3">
          <div className="mb-6 col-md-6">
            <label className="form-label">ID Client</label>
            <input
              required
              value={id_client}
              onChange={(e) => setid_client(e.target.value)}
              type="text"
              className="form-control"
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="mb-3 col-md-6">
            <label className="form-label">Name</label>
            <input
              required
              value={name}
              onChange={(e) => setname(e.target.value)}
              type="text"
              className="form-control"
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6 ">
            <label className="form-label">Email</label>
            <div className="input-group">
              <div className="input-group-text">@</div>
              <input
                required
                value={email}
                onChange={(e) => setemail(e.target.value)}
                type="text"
                className="form-control"
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
          </div>
          <div className="mb-3 col-md-6">
            <label className="form-label">Phone</label>
            <input
              required
              value={phone}
              onChange={(e) => setphone(e.target.value)}
              type="text"
              className="form-control"
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              required
              value={address}
              onChange={(e) => setaddress(e.target.value)}
              type="text"
              className="form-control"
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Products</label>
            <textarea
              required
              rows="3"
              value={products}
              onChange={(e) => setproducts(e.target.value)}
              type="text"
              className="form-control"
            ></textarea>
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <div className="input-group mb-3">
              <span className="input-group-text">$</span>
              <input
                required
                value={price}
                onChange={(e) => setprice(e.target.value)}
                type="text"
                className="form-control"
              />
              <span className="input-group-text">.00</span>
              <div className="valid-feedback">Looks good!</div>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Store
        </button>
      </form>
    </div>
  );
};

export default CompCreateOrder;
