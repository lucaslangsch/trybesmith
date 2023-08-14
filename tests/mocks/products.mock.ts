const allProducts = [
  {
    id: 1,
    name: "Martelo de Thor",
    price: "30 peças de ouro",
    orderId: 1,
  }
];

const insertProduct = {
  name: "Martelo de Thor",
  price: "30 peças de ouro",
  orderId: 1,
};

const resultInsertProduct = {
  id: 1,
  name: "Martelo de Thor",
  price: "30 peças de ouro",
  orderId: 1,
};

const productWhitoutName = {
  name: "",
  price: "30 peças de ouro",
  orderId: 1,
};

const productWrongTypeName = {
  name: 1,
  price: "30 peças de ouro",
  orderId: 1,
};

const productWrongLengthName = {
  name: "Ma",
  price: "30 peças de ouro",
  orderId: 1,
};

const productWhitoutPrice = {
  name: "Martelo de Thor",
  price: "",
  orderId: 1,
};

const productWrongTypePrice = {
  name: "Martelo de Thor",
  price: 30,
  orderId: 1,
};

const productWrongLengthPrice = {
  name: "Martelo de Thor",
  price: "30",
  orderId: 1,
};

export default {
  allProducts,
  insertProduct,
  resultInsertProduct,
  productWhitoutName,
  productWhitoutPrice,
  productWrongLengthName,
  productWrongLengthPrice,
  productWrongTypeName,
  productWrongTypePrice,
};
