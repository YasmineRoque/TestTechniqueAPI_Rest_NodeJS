import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import _ from "lodash";
import StarIcon from "@mui/icons-material/Star";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const products = [
  {
    name: "AC1 phone1",
    type: "phone",
    price: "200",
    rating: "4",
    warranty_years: "1",
    available: "oui",
  },
  {
    name: "AC1 phone1",
    type: "phone",
    price: "200",
    rating: "5",
    warranty_years: "1",
    available: "oui",
  },
  {
    name: "AC1 phone1",
    type: "phone",
    price: "200",
    rating: "2",
    warranty_years: "1",
    available: "oui",
  },
];

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <HomeIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Les Bons Artisans
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Nos produits
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Voici la liste de nos produits, voulez vous ajouter un produit ?
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Ajouter un produit</Button>
              <Button variant="outlined">Connectez-vous</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}

          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item key={product} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    <Typography>Type : {product.type}</Typography>
                    <Typography>Prix : {product.price} €</Typography>
                    <Typography>
                      Note :
                      {_.map(_.range(product.rating), () => {
                        return <StarIcon size="small" color="primary" />;
                      })}
                    </Typography>

                    <Typography>
                      Garantie : {product.warranty_years} an (s)
                    </Typography>
                    <Typography>
                      Disponible : {product.available.toString()}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Voir</Button>
                    <Button size="small">Modifier</Button>
                    <Button size="small">Supprimer</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
