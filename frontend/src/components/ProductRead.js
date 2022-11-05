import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import StarIcon from "@mui/icons-material/Star";
import _ from "lodash";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "./ProductData";

export default function ProductRead() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useProduct({ id });

  // const product = {
  //   name: "AC1 phone1",
  //   type: "phone",
  //   price: "200",
  //   rating: "4",
  //   warranty_years: "1",
  //   available: "oui",
  // };
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      aria-label="contacts"
    >
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <PhoneIphoneIcon />
          </ListItemIcon>
          <ListItemText primary={data.product.name} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText inset primary="Type" />
          <ListItemText inset primary={data.product.type} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText inset primary="Prix" />
          <ListItemText inset primary={data.product.price} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText inset primary="Note" />
          <ListItemText
            inset
            primary={_.map(_.range(data.product.rating), () => {
              return <StarIcon size="small" color="primary" />;
            })}
          />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText inset primary="Garantie" />
          <ListItemText inset primary={data.product.warranty_years} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText inset primary="Disponible" />
          <ListItemText inset primary={data.product.available} />
        </ListItemButton>
      </ListItem>
    </List>
  );
}
