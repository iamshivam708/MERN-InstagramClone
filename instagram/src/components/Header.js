import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: sessionStorage.getItem('profile')
    };
  }

  componentDidMount = () => {};

  handleLogout = (e) => {
    e.preventDefault();
   sessionStorage.removeItem('email');
   sessionStorage.removeItem('username');
   sessionStorage.removeItem('loggedIn');
   window.location.reload();
  };

  render() {
    return (
      <div className="Header">
        <div className="container">
          <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <Link
              to="/"
              className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
            >
              <img
                src="/logo.png"
                className=""
                width="150px"
                height="50px"
                alt="logo"
              />
            </Link>

            <div className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <form>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search"
                />
              </form>
            </div>

            <ul className="nav col-md-3 mb-2 justify-content-center mb-md-0 text-end">
              <li>
                <Link to="/" className="nav-link px-2 link-secondary">
                  <i className="fas fa-home fa-2x"></i>
                </Link>
              </li>
              <li>
                <Link to="/create" className="nav-link mt-1 px-2 link-secondary">
                  <i className="fas fa-plus-square fa-2x"></i>
                </Link>
              </li>
              <li>
                <a href="." className="nav-link px-2 link-dark mt-1">
                  <i className="far fa-envelope fa-2x"></i>
                </a>
              </li>
              {/* <li>
                <a href="." className="nav-link px-2 link-dark mt-1">
                  <i className="far fa-heart fa-2x"></i>
                </a>
              </li> */}
              <li>
                <div className="dropdown mt-2">
                  <button
                    style={{ background: "none", border: "none" }}
                    id="dLabel"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      alt="user"
                      src={"/user/"+ this.state.user}
                      height="40px"
                      width="40px"
                      style={{borderRadius:"50%"}}
                    />
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dLabel">
                    <li className="nav-link px-2 link-dark">
                      <Link
                        to="/user"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        <i className="fas fa-user"></i>&nbsp;&nbsp;Profile
                      </Link>
                    </li>
                    <li
                      style={{ cursor: "pointer" }}
                      onClick={this.handleLogout}
                      className="nav-link px-2 link-dark"
                    >
                      <i className="fas fa-sign-out-alt"></i>&nbsp;&nbsp;Logout
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </header>
        </div>
      </div>
    );
  }
}

export default Header;
