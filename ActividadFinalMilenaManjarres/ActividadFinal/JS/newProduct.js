let name_product = document.getElementById("name_product");
let image = document.getElementById("image_product");
let price = document.getElementById("price_product");
let quantity = document.getElementById("quantity_product");

let btnAddProduct = document.getElementById("btnAddProduct");
let listProducts = document.getElementById("listProducts");

const products = [
  {
    name: "Auditoria",
    image: "./img/png/img4.png",
    price: 400000,
    quantity: 4,
  },
  {
    name: "Planeación Presupuestal",
    image: "./img/png/img6.png",
    price: 350000,
    quantity: 3,
  },
  {
    name: "Revisoría Fiscal",
    image: "./img/png/img5.png",
    price: 280000,
    quantity: 2,
  },
  {
    name: "Estados Financieros",
    image: "./img/png/img1.png",
    price: 150000,
    quantity: 1,
  },
  {
    name: "Costos",
    image: "./img/png/img2.png",
    price: 80000,
    quantity: 3,
  },
  {
    name: "Impuestos",
    image: "./img/png/img3.png",
    price: 120000,
    quantity: 2,
  },
];

const AddProduct = () => {
  /* Push es un método que nos permite agregar al final un nuevo elemento */
  products.push({
    name_product: name_product.value,
    image: image_product.value,
    price: price_product.value,
    quantity: quantity_product.value,
  });
  for (let index = 0; index < products.length; index++) {
    listProducts.innerHTML = <div class="row">
      <div class="col s12 m6">
      <div class="card blue-grey darken-1">
      <div class="card-image">
          <img src= {products[index].img}>
          <span class="card-title">${products[index].name_product}</span>
        </div>
        <div class="card-content white-text">
          <span class="card-title">${products[index].name_product}</span>
          <p>Precio ${products[index].price}</p>
          <p>Cantidad ${products[index].quantity}</p>
        </div>
          <div class="card-action">
            <a href="#">This is a link</a>
            <a href="#">This is a link</a>
          </div>
       </div>
      </div>
      </div>
    </div>;
  }
  console.log(products);
};

btnAddProduct.addEventListener("click", AddProduct);