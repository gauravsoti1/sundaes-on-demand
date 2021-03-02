import React, { useEffect, useState } from "react";
import axios from "axios";
import ScoopOption from "./ScoopOption";
import { Row } from "react-bootstrap";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((err) => {});
  }, [optionType]);

  // TODO: replace 'null' with ToppingOption when available
  const ItemComponent = optionType === "scoops" ? ScoopOption : null;

  const OptionItems = items.map((item) => (
    <ItemComponent key={item.name} {...item} />
  ));

  return <Row>{OptionItems}</Row>;
}
