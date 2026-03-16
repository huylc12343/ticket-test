"use client";

import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions
} from "@mui/material";

const merchList = [
  {
    id: 1,
    name: "Indie Band T-Shirt",
    price: 250000,
    image: "/images/merch/shirt1.jpg",
  },
  {
    id: 2,
    name: "Band Hoodie",
    price: 450000,
    image: "/images/merch/hoodie1.jpg",
  },
  {
    id: 3,
    name: "Concert Cap",
    price: 150000,
    image: "/images/merch/cap1.jpg",
  },
  {
    id: 4,
    name: "Limited Poster",
    price: 100000,
    image: "/images/merch/poster1.jpg",
  },
];

export default function MerchPage() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Merch Store
      </Typography>

      <Grid container spacing={4}>
        {merchList.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="250"
                image={item.image}
                alt={item.name}
              />

              <CardContent>
                <Typography variant="h6">
                  {item.name}
                </Typography>

                <Typography color="text.secondary">
                  {item.price.toLocaleString()} VND
                </Typography>
              </CardContent>

              <CardActions>
                <Button variant="contained" fullWidth>
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}