import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import Cart from '../screens/Cart';
import Modal from '../Modal'
import { useCart } from '../components/ContextReducer'

export default function Navbar() {
  const [cartView, setCartView] = useState(false);
  let data = useCart();

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/")
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fw-bold px-4 fst-italic" to="/">Saffron</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link  active fs-4" aria-current="page" to="http://localhost:3000/">Home</Link>
              </li>

              {(localStorage.getItem("authToken")) ?
                <li className="nav-item">
                  <Link className="nav-link  active fs-4" aria-current="page" to="/myOrder">My Orders</Link>
                </li>
                : ""}
            </ul>
            {
              (!localStorage.getItem("authToken")) ?
                <div className='d-flex'>
                  <Link className="btn bg-black text-white fs-5 mx-1" to="/Login">login</Link>
                  <div className='btn bg-black fs-4 mx-1 '>/</div>
                  <Link className="btn bg-black text-white  fs-5 mx-1" to="/CreateUser">SignUp</Link>
                </div>
                :
                <div>
                  <div className="btn bg-black fs-5 text-white mx-2" onClick={() => setCartView(true)}>
                    My Cart {" "}
                    <Badge pill bg="danger">{data.length}</Badge>
                  </div>

                  {cartView ? <Modal onClose={() => setCartView(false)}><Cart /></Modal> : null}
                  <div className="btn bg-danger fs-5 text-white mx-1" onClick={handleLogout}>
                    logout
                  </div>
                </div>
            }

          </div>
        </div>
      </nav>
    </div>
  )
}
