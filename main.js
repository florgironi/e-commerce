const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamburguesa = document.querySelector(".menu");
const mobileMenu = document.querySelector(".wraper-menu")

const carritoIcon = document.querySelector(".navbar-shopping-cart")
const orderListDesktop = document.querySelector(".myorder-desktop")

menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamburguesa.addEventListener("click", toggleMobileMenu)
carritoIcon.addEventListener("click", toggleOrderList)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu(){
    const isOrderListClose = orderListDesktop.classList.contains('inactive')

    if(!isOrderListClose){
        orderListDesktop.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
}

// FUNCIONALIDAD PARA MOSTRAR UN SLIDE DE LA ORDEN 
function toggleOrderList(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

    if(!isMobileMenuClosed){
    mobileMenu.classList.add('inactive')
    }
    else{
        orderListDesktop.classList.toggle('inactive')
    }

}

// Array para card de productos
{/* <div class="card-container">
        <div class="product-card">
            <img class="imagen" src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="">
            <div class="product-info">
                <div>
                    <p>$120,00</p>
                    <p>Bike</p>
                </div>
                <figure>
                    <img src="./assets/icons/bt_add_to_cart.svg" alt="">
                </figure>
                </div>
        </div>
    </div> */}
const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image:'  ',

} )
productList.push({
    name: 'bike',
    price: 120,
    image:'  ',

} )
productList.push({
    name: 'bike',
    price: 120,
    image:'  ',

} )


