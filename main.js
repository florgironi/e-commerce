const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamburguesa = document.querySelector(".menu");
const mobileMenu = document.querySelector(".wraper-menu");

const carritoIcon = document.querySelector(".navbar-shopping-cart");
const orderListDesktop = document.querySelector(".myorder-desktop");

const cardContainer = document.querySelector(".card-container");
const productDetail = document.querySelector(".details-products");


const btnCloseProductDetail = document.querySelector(".card-product-close")

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamburguesa.addEventListener("click", toggleMobileMenu);
carritoIcon.addEventListener("click", toggleOrderList);
btnCloseProductDetail.addEventListener("click",closeProductDetail );

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
  const isOrderListClose = orderListDesktop.classList.contains("inactive");

  if (!isOrderListClose) {
    orderListDesktop.classList.add("inactive");
  }
  closeProductDetail();
  mobileMenu.classList.toggle("inactive");
}
// FUNCIONALIDAD PARA MOSTRAR UN SLIDE DE LA ORDEN
function toggleOrderList() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  } else {
    orderListDesktop.classList.toggle("inactive");
  }
  const isProductDetailClosed = productDetail.classList.contains("inactive");

  if (!isProductDetailClosed) {
    productDetail.classList.add("inactive");
  } 
}
function openProductDetails(){
  console.log('se borro la clase')
  orderListDesktop.classList.add("inactive");
  productDetail.classList.remove('inactive')
}
function closeProductDetail(){
  productDetail.classList.add('inactive')
}

const productList = [];

// Productos nuevos, por ahora aca estan detallados los productos 
productList.push({
  name: "desayuno",
  price: 200,
  image:
    "https://images.pexels.com/photos/13975692/pexels-photo-13975692.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
});
productList.push({
  name: "globos",
  price: 250,
  image:
    " https://images.pexels.com/photos/10049618/pexels-photo-10049618.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load ",
});
productList.push({
  name: "bike",
  price: 120,
  image:
    " https://images.pexels.com/photos/13354883/pexels-photo-13354883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 ",
});
productList.push({
  name: "desayuno",
  price: 200,
  image:
    "https://images.pexels.com/photos/13975692/pexels-photo-13975692.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
});
productList.push({
  name: "globos",
  price: 250,
  image:
    " https://images.pexels.com/photos/10049618/pexels-photo-10049618.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load ",
});
productList.push({
  name: "bike",
  price: 120,
  image:
    " https://images.pexels.com/photos/13354883/pexels-photo-13354883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 ",
});



function renderProducts(array){
// for of es "de" || y el for in es "en cada"()
for (let product of array) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const imgProduct = document.createElement("img");
  imgProduct.classList.add("imagen");
  imgProduct.setAttribute("src", product.image);
  imgProduct.addEventListener("click", openProductDetails)

  productCard.appendChild(imgProduct);

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

	const productInfoDiv = document.createElement("div");

  const priceProduct = document.createElement("p");
  priceProduct.innerText = "$" + product.price;

  const nameProduct = document.createElement("p");
  nameProduct.innerText = product.name;

  productInfoDiv.appendChild(priceProduct);
  productInfoDiv.appendChild(nameProduct);

  const productInfoFigure = document.createElement("figure");

  const imgFigure = document.createElement("img");
  imgFigure.setAttribute("src", "./assets/icons/bt_add_to_cart.svg");

  productInfoFigure.appendChild(imgFigure);

  productCard.appendChild(productInfo);
  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);
  cardContainer.appendChild(productCard);
}
}
// le paso como parametro de el array que quiero recorrer 
renderProducts(productList);
