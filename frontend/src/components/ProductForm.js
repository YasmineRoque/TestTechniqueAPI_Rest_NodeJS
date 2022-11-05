import { Formik } from "formik";
import React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct, createProduct, updateProduct } from "./ProductData";

export const ProductForm = () => {
  const navigate = useNavigate();

  // attribue l'index du Produit à partir
  // du paramètre (:Id) de la route ou
  // une valeur nulle s'il n'existe pas.
  const { id } = useParams();
  const { data } = useProduct({ id });
  const initialValues = id
    ? {
        name: data.data.name,
        type: data.data.type,
        price: data.data.price,
        rating: data.data.rating,
        // isAvailable: data.data.isAvailable ? "1" : "0",
        available: data.data.available,
        warranty_years: data.data.warranty_years,
      }
    : {
        name: "",
        type: "",
        price: "",
        rating: "",
        available: "",
        warranty_years: "",
        // isAvailable: "1",
      };

  const handleSubmit = async (values) => {
    // let response;
    const response;

    const submitData = {
      name: values.name,
      type: values.type,
      price: values.price,
      rating: values.rating,
      available: values.available,
      warranty_years: values.warranty_years,
    };

    // met à jour un Produit en fonction de la présence de son id
    // sinon procède à la création d'un nouveau Produit.
    if (id) {
      response = await updateProduct({ id, data: submitData });
    } else {
      response = await createProduct({ data: submitData });
    }
    
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "60%" },
            }}
            noValidate
            autoComplete="off"
          >
            <form>
              <TextField fullWidth id="name" name="name" label="name" />
              <TextField
                fullWidth
                id="type"
                name="type"
                label="type"
                type="type"
              />
              <TextField
                fullWidth
                id="price"
                name="price"
                label="price"
                type="price"
              />
              <TextField
                fullWidth
                id="rating"
                name="rating"
                label="rating"
                type="rating"
              />
              <TextField
                fullWidth
                id="available"
                name="available"
                label="radio"
                type="radio"
              />
              <TextField
                fullWidth
                id="warranty_years"
                name="warranty_years"
                label="warranty_years"
                type="warranty_years"
              />

              <Button
                variant="contained"
                color="success"
                endIcon={<SendIcon />}
              >
                Submit
              </Button>
            </form>
          </Box>
        }
      </Formik>
    );
  };

  ReactDOM.render(<WithMaterialUI />, document.getElementById("root"));
};

export default ProductForm;
