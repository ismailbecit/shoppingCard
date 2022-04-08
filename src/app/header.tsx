import React, { useEffect, useState } from "react";
import { Grid, Card, Badge, Modal, Typography, Button } from "@mui/material";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { actionType } from "../redux/futures/order/orderType";
import { Box } from "@mui/system";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { FaTimesCircle } from "react-icons/fa";
const Header = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const order = useSelector((state: RootState) => state.order);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const topBalance = () => {
    let total = 0;
    order.map((item) => (total += item.price));
    return total;
  };
  return (
    <div>
      <Grid item xs={12}>
        <Card
          sx={{
            padding: "50px",
            background: "gray",
          }}
        >
          <Grid container item xs={12}>
            <Grid item xs={10} sm={10} md={10} lg={10}>
              {/* <Link to={"/"} style={{ textDecoration: "none" }}> */}
              <span style={{ color: "white" }}> Shop</span>
              {/* </Link> */}
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <Badge
                data-testid="shoppingCard"
                badgeContent={order ? order.length : "0"}
                color="secondary"
              >
                <BiShoppingBag
                  style={{
                    fontSize: 25,
                    color: "white",
                    textAlign: "right",
                  }}
                  onClick={handleOpen}
                />
              </Badge>

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className="modal">
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Orders
                  </Typography>
                  {order
                    ? order.map((item, key) => (
                        <div key={key}>
                          <div
                            style={{
                              marginTop: "15px",
                              display: "flex",
                              flexDirection: "row",
                              padding: "15px",
                            }}
                          >
                            <img
                              src={item.img}
                              alt="order"
                              width={80}
                              height={80}
                            />
                            <label style={{ padding: 15 }}> {item.title}</label>
                            <label style={{ padding: 15 }}>
                              {" "}
                              {
                                <CgMathMinus
                                  onClick={() => {
                                    dispatch({
                                      type: actionType.RQ_DECREMENT_ORDER,
                                      payload: item,
                                    });
                                  }}
                                />
                              }
                            </label>
                            <label style={{ padding: 15 }}> {item.count}</label>
                            <label style={{ padding: 15 }}>
                              {" "}
                              {
                                <CgMathPlus
                                  onClick={() => {
                                    dispatch({
                                      type: actionType.RQ_INCREMENT_ORDER,
                                      payload: item,
                                    });
                                  }}
                                />
                              }
                            </label>
                            <label style={{ padding: 15 }}>
                              {" "}
                              {item.price} TL
                            </label>
                            <label style={{ padding: 15 }}>
                              {
                                <FaTimesCircle
                                  style={{ color: "red" }}
                                  onClick={() =>
                                    dispatch({
                                      type: actionType.RQ_DEL_ORDER,
                                      payload: item.id,
                                    })
                                  }
                                />
                              }
                            </label>
                          </div>
                          <hr />
                        </div>
                      ))
                    : ""}{" "}
                  <div>
                    <label>Toplam Tutar: {topBalance()} TL</label>
                  </div>
                </Box>
              </Modal>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </div>
  );
};

export default Header;
