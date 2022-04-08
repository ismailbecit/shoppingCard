import React, { useEffect } from "react";
import { Grid, Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Products } from "../utils/products";
import { useDispatch } from "react-redux";
import { actionType } from "../redux/futures/order/orderType";

const Product = () => {
  const dispatch = useDispatch();

  const addCard = (product: {}) => {
    dispatch({ type: actionType.RQ_ADD_ORDER, payload: product });
  };

  return (
    <div>
      <h3>PRODUCTS</h3>
      <Grid container>
        {Products.map((product, key) => (
          <Grid
            key={key}
            item
            xs={12}
            md={4}
            lg={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Card
              sx={{
                width: "250px",
                height: 450,
                margin: 5,
              }}
            >
              <CardActionArea>
                <img
                  src={product.img}
                  alt="green iguana"
                  width={250}
                  height={250}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      height: "70px",
                    }}
                  >
                    {product.content.substr(1, 80)}... <br />
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Button
                  size="small"
                  color="primary"
                  onClick={() => addCard(product)}
                >
                  Add Card ( {product.price} TL)
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Product;
