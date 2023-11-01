import React, { createRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Navbar.css";
// import "./Shop/NavbarShop.css";
import { useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutFn } from "../store/isLogin";
import {
  addItemFn,
  removeItemFn,
  clearCartFn,
  addItemCountFn,
  subtractItemCountFn,
} from "../store/cartInfo";
import { removeFromCartFn, removeAllCartFn } from "../store/dataInfo";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import glasses from "../data/data_origin";
import { ConnectingAirportsOutlined } from "@mui/icons-material";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const loginState = useSelector((state) => state.isLoginStore.isLogin);
  const cartState = useSelector((state) => state.cartInfoStore.cartInfo);
  const dispatch = useDispatch();
  const iptRef = createRef();

  let totalAmount = 0;
  // for (let i = 0; i < cartState.length; i++) {
  //   totalAmount += cartState[i].cnt * glasses[cartState[i].id]; glasses[v.id].price
  //   console.log("total", cartState[i]);
  // }
  for (let v of cartState) {
    totalAmount += glasses[v.id].price * v.cnt;
  }

  const logoutBtn = () => {
    dispatch(logoutFn());
  };

  const removeBtn = (i) => {
    dispatch(removeItemFn(i));
    dispatch(removeFromCartFn(cartState[i].id));
  };

  const clearCartBtn = () => {
    dispatch(clearCartFn());
    dispatch(removeAllCartFn());
  };

  const addItemCntBtn = (i) => {
    dispatch(addItemCountFn(i));
  };

  const subtractItemCntBtn = (i) => {
    dispatch(subtractItemCountFn(i));
  };

  const keyDownBtn = (event) => {
    if (event.key == "Enter") {
      console.log("keydown");
      console.log(iptRef.current.value);
      navigate(`/search/${iptRef.current.value}`);
    }
  };

  // drawer
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ right: open });
  };

  const list = (
    <Box
      // sx={{ width: 568 }}
      role="presentation"
      // onClick={() => toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className="basket">
        <div className="basket-list">
          <div className="basket-header">
            <h3 className="basket-header-title">
              My Basket &nbsp;<span>{cartState.length} items</span>
            </h3>
            <span
              className="basket-toggle button button-border button-border-gray button-small"
              role="presentation"
              onClick={toggleDrawer(false)}
              style={{ cursor: "pointer" }}
            >
              Close
            </span>
            <button
              className="basket-clear button button-border button-border-gray button-small"
              type="button"
            >
              <span onClick={clearCartBtn}>Clear Basket</span>
            </button>
          </div>

          {cartState.map((v, i) => {
            return (
              <div className="basket-item" key={v.id}>
                <div className="basket-item-control">
                  <button
                    className="button button-border button-border-gray button-small basket-control basket-control-add"
                    type="button"
                    onClick={() => {
                      addItemCntBtn(i);
                    }}
                  >
                    <span
                      role="img"
                      aria-label="plus"
                      className="anticon anticon-plus"
                      style={{ fontSize: "9px" }}
                    >
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="plus"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <defs>
                          <style></style>
                        </defs>
                        <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path>
                        <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path>
                      </svg>
                    </span>
                  </button>
                  <button
                    className="button button-border button-border-gray button-small basket-control basket-control-minus"
                    type="button"
                    onClick={() => {
                      subtractItemCntBtn(i);
                    }}
                  >
                    <span
                      role="img"
                      aria-label="minus"
                      className="anticon anticon-minus"
                      style={{ fontSize: "9px" }}
                    >
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="minus"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="basket-item-wrapper">
                  <div className="basket-item-img-wrapper">
                    <img
                      alt="Burnikk"
                      className="basket-item-img is-img-loaded"
                      src={process.env.PUBLIC_URL + glasses[v.id].img}
                    />
                  </div>
                  <div className="basket-item-details">
                    <a href="/product/7l3FMZqY8JdfssalDgx2">
                      <h4 className="underline basket-item-name">
                        {glasses[v.id].name}
                      </h4>
                    </a>
                    <div className="basket-item-specs">
                      <div>
                        <span className="spec-title">Quantity</span>
                        <h5 className="my-0">{v.cnt}</h5>
                      </div>
                      <div>
                        <span className="spec-title">Size</span>
                        <h5 className="my-0">{glasses[i].size[v.size]} mm</h5>
                      </div>
                      <div>
                        <span className="spec-title">Color</span>
                        <div
                          style={{
                            backgroundColor: glasses[i].color[v.color],
                            width: "15px",
                            height: "15px",
                            borderRadius: "50%",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="basket-item-price">
                    <h4 className="my-0">
                      ${glasses[v.id].price * cartState[i].cnt}
                    </h4>
                  </div>
                  <button
                    className="basket-item-remove button button-border button-border-gray button-small"
                    type="button"
                    onClick={() => {
                      removeBtn(i);
                    }}
                  >
                    <span
                      role="img"
                      aria-label="close"
                      className="anticon anticon-close"
                    >
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="close"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="basket-checkout"
          style={{ borderTop: "1px solid #e1e1e1" }}
        >
          <div className="basket-total">
            <p className="basket-total-title">Subtotal Amout:</p>
            <h2 className="basket-total-amount">${totalAmount}</h2>
          </div>
          <button className="basket-checkout-button button" type="button">
            Check Out
          </button>
        </div>
      </div>

      <Divider />
    </Box>
  );

  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              alt="Logo"
              src="https://salinaka-ecommerce.web.app/images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png"
              style={{ width: "85%" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div>
                  <NavLink
                    className={({ isActive }) => {
                      return isActive ? "active nav-link" : "default nav-link";
                    }}
                    to="/home"
                  >
                    Home
                  </NavLink>
                </div>
              </li>
              <li className="nav-item">
                <div>
                  <NavLink
                    className={({ isActive }) => {
                      return isActive ? "active nav-link" : "default nav-link";
                    }}
                    to="/shop"
                  >
                    Shop
                  </NavLink>
                </div>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link disabled">Featured</a> */}
                <div>
                  <NavLink
                    className={({ isActive }) => {
                      return isActive ? "active nav-link" : "default nav-link";
                    }}
                    to="/featured"
                  >
                    Featured
                  </NavLink>
                </div>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link disabled">Recommended</a> */}
                <div>
                  <NavLink
                    className={({ isActive }) => {
                      return isActive ? "active nav-link" : "default nav-link";
                    }}
                    to="/recommended"
                  >
                    Recommended
                  </NavLink>
                </div>
              </li>
            </ul>
            <div
              className="d-flex"
              role="search"
              style={{ position: "relative" }}
            >
              {location.pathname === "/shop" ? (
                <span
                  role="img"
                  aria-label="search"
                  className="anticon anticon-search searchbar-icon"
                  style={{ left: "10.6rem" }}
                >
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="search"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                  </svg>
                </span>
              ) : (
                <span
                  role="img"
                  aria-label="search"
                  className="anticon anticon-search searchbar-icon"
                  style={{ left: "1.6rem" }}
                >
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="search"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                  </svg>
                </span>
              )}

              {location.pathname === "/shop" && (
                <div>
                  <div className="filters-toggle" role="presentation">
                    <button className="button-muted button-small" type="button">
                      Filters &nbsp;
                      <span
                        role="img"
                        aria-label="filter"
                        className="anticon anticon-filter"
                      >
                        <svg
                          viewBox="64 64 896 896"
                          focusable="false"
                          data-icon="filter"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              )}

              <input
                className="search-input searchbar-input me-4"
                type="search"
                placeholder="Search Products..."
                onKeyDown={keyDownBtn}
                ref={iptRef}
              />

              <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-baseline">
                <li className="me-5">
                  <div style={{ position: "relative" }}>
                    <span
                      role="img"
                      aria-label="shopping"
                      className="anticon anticon-shopping"
                      style={{ fontSize: "2.4rem" }}
                      onClick={toggleDrawer(true)}
                    >
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="shopping"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z"></path>
                      </svg>
                    </span>
                    {cartState.length > 0 ? (
                      <span className="badge-count">{cartState.length}</span>
                    ) : (
                      <></>
                    )}

                    <Drawer
                      anchor="right"
                      open={state.right}
                      onClose={toggleDrawer(false)}
                    >
                      {list}
                    </Drawer>
                  </div>
                </li>
                <li className="nav-item ms-5 me-3">
                  <div className="nav-link button" aria-current="page" href="#">
                    <NavLink
                      style={{ backgroundColor: "transparent", color: "white" }}
                      to="/signup"
                    >
                      Sign&nbsp;Up
                    </NavLink>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link button button-muted" href="#">
                    {/* <NavLink to="/signin">Sign&nbsp;In</NavLink> */}
                    {loginState ? (
                      <NavLink to="/home" onClick={logoutBtn}>
                        Log&nbsp;Out
                      </NavLink>
                    ) : (
                      <NavLink to="/signin">Sign&nbsp;In</NavLink>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
