import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [category, setcategory] = useState([]);

  const onAddCategory = (newCategory) => {
    if (category.includes(newCategory)) {
      return;
    }
    setcategory([newCategory, ...category]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewValue={onAddCategory} />

      {category.map((item) => (
        <GifGrid key={item} category={item} />
      ))}
    </>
  );
};
