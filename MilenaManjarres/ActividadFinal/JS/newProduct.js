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
    name: "ACEITE DE ROMERO",
    image: "ASSETS/IMAGENES/JPG/aceite_romero.jpg",
    price: 25000,
    quantity: 2,
  },
  {
    name: "MANILLA",
    image: "ASSETS/IMAGENES/JPG/brazaletes.webp",
    price: 15000,
    quantity: 6,
  },
  {
    name: "MIYUKI 1",
    image: "ASSETS/IMAGENES/JPG/Miyuki2.jpeg",
    price: 40000,
    quantity: 2,
  },
  {
    name: "MIYUKI 2",
    image: "ASSETS/IMAGENES/JPG/Miyuki!.jpeg",
    price: 65000,
    quantity: 1,
  },
  {
    name: "MIYUKI 3",
    image: "ASSETS/IMAGENES/JPG/Miyuki3.jpg",
    price: 35000,
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