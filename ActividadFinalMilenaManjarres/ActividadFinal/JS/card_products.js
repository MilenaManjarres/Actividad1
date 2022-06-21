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
  
  var listProducts = products.map(function(product){
    return '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/></head><body> <div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+product.image+'"> </div> <div class="card-content"> <span class="card-title activator grey-text text-darken-4">'+product.name+'<i class="material-icons right">more_vert</i></span></div>'+'<div class="card-reveal"><span class="card-title grey-text text-darken-4">'+product.price+' '+product.quantity+'<i class="material-icons right">close</i></span></div></div></body><script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script></html>'
  })
  
          
  document.getElementById("listProducts").innerHTML = listProducts;