/******** Declaración de variables ********/
const menuEmail = document.querySelector('.navbar-email img');
const desktopMenu = document.querySelector('.desktop-menu');
const btnMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const btnCarrito = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const productDeatilContainer = document.querySelector('#product-detail');

/******** Menú Desktop Configuration ********/
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    const isAsideCarritoClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideCarritoClosed) {
        shoppingCartContainer.classList.toggle('inactive');
    }

    closeProductDetailAside();
    desktopMenu.classList.toggle('inactive');
}

/******** Mobile Menu Configuration ********/
btnMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    const isAsideCarritoClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideCarritoClosed) {
        shoppingCartContainer.classList.toggle('inactive');
    }

    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}

/******** Shopping Cart Configuration ********/
btnCarrito.addEventListener('click', toggleCarrito);

function toggleCarrito(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDeatilContainer.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.toggle('inactive');
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.toggle('inactive');
    }
    if (!isProductDetailClosed) {
        productDeatilContainer.classList.toggle('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

/******** Product Configuration ********/
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=800'
});
productList.push({
    name: 'TV',
    price: 220,
    image: 'https://images.pexels.com/photos/7166933/pexels-photo-7166933.jpeg?auto=compress&cs=tinysrgb&w=1200'
});
productList.push({
    name: 'Computer',
    price: 620,
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1200'
});

//Función para crear código dinámico de HTML con cierta cantidad de productos
function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

/******** Product Detail ********/
function openProductDetailAside () {
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDeatilContainer.classList.remove('inactive');
}

function closeProductDetailAside () {
    productDeatilContainer.classList.add('inactive');
}