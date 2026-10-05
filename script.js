// ==========================================
// LUMINA
// JAVASCRIPT PRINCIPAL
// ==========================================



// ==========================================
// 1. GALERÍA DE PRODUCTOS
// ==========================================

const modal =
    document.getElementById("carousel-modal");

const modalImg =
    document.getElementById("modal-img");

const closeBtn =
    document.querySelector(".close-btn");

const prevBtn =
    document.querySelector(".prev-btn");

const nextBtn =
    document.querySelector(".next-btn");


let currentGallery = [];

let currentIndex = 0;



document.addEventListener("click", (e) => {

    if (
        e.target.classList.contains(
            "gallery-img"
        )
    ) {

        const galleryData =
            e.target.getAttribute(
                "data-gallery"
            );


        if (galleryData) {

            currentGallery =
                galleryData.split(",");

            currentIndex = 0;

            modalImg.src =
                currentGallery[currentIndex];

            modal.style.display = "flex";

        }

    }

});



const closeModal = () => {

    modal.style.display = "none";

};


closeBtn.addEventListener(
    "click",
    closeModal
);


modal.addEventListener(
    "click",
    (event) => {

        if (
            event.target === modal
        ) {

            closeModal();

        }

    }
);



const showPrev = () => {

    if (
        currentGallery.length === 0
    ) {
        return;
    }


    currentIndex =
        currentIndex > 0
            ? currentIndex - 1
            : currentGallery.length - 1;


    modalImg.src =
        currentGallery[currentIndex];

};


const showNext = () => {

    if (
        currentGallery.length === 0
    ) {
        return;
    }


    currentIndex =
        currentIndex <
        currentGallery.length - 1
            ? currentIndex + 1
            : 0;


    modalImg.src =
        currentGallery[currentIndex];

};


prevBtn.addEventListener(
    "click",
    showPrev
);

nextBtn.addEventListener(
    "click",
    showNext
);



// ==========================================
// 2. MENÚ
// ==========================================

const menuIcon =
    document.getElementById(
        "menu-icon"
    );

const menuSidebar =
    document.getElementById(
        "menu-sidebar"
    );

const menuOverlay =
    document.getElementById(
        "menu-overlay"
    );

const closeMenuBtn =
    document.getElementById(
        "close-menu"
    );


const linkAll =
    document.getElementById(
        "link-all"
    );

const linkCatalogView =
    document.getElementById(
        "link-catalog-view"
    );

const linkCustom =
    document.getElementById(
        "link-custom"
    );

const linkSeasonal =
    document.getElementById(
        "link-seasonal"
    );


const homeView =
    document.getElementById(
        "home-view"
    );

const catalogView =
    document.getElementById(
        "catalog-view"
    );

const customView =
    document.getElementById(
        "custom-view"
    );

const fullCatalogGrid =
    document.getElementById(
        "full-catalog-grid"
    );



const openMenu = () => {

    menuSidebar.classList.add(
        "open"
    );

    menuOverlay.classList.add(
        "open"
    );

};


const closeMenu = () => {

    menuSidebar.classList.remove(
        "open"
    );

    menuOverlay.classList.remove(
        "open"
    );

};


menuIcon.addEventListener(
    "click",
    openMenu
);

closeMenuBtn.addEventListener(
    "click",
    closeMenu
);

menuOverlay.addEventListener(
    "click",
    closeMenu
);



// ==========================================
// ACTIVAR OPCIÓN
// ==========================================

const setActiveLink = (
    activeLink
) => {

    [
        linkAll,
        linkCatalogView,
        linkCustom,
        linkSeasonal
    ].forEach(link => {

        link.classList.remove(
            "active"
        );

    });


    activeLink.classList.add(
        "active"
    );

    closeMenu();

};



// ==========================================
// OCULTAR TODAS LAS VISTAS
// ==========================================

const hideAllViews = () => {

    homeView.classList.add(
        "hidden"
    );

    catalogView.classList.add(
        "hidden"
    );

    customView.classList.add(
        "hidden"
    );

};



// ==========================================
// INICIO
// ==========================================

linkAll.addEventListener(
    "click",
    (e) => {

        e.preventDefault();

        setActiveLink(
            linkAll
        );

        hideAllViews();

        homeView.classList.remove(
            "hidden"
        );

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);



// ==========================================
// CATÁLOGO COMPLETO
// ==========================================

const openCatalog = (e) => {

    if (e) {
        e.preventDefault();
    }


    setActiveLink(
        linkCatalogView
    );


    hideAllViews();


    catalogView.classList.remove(
        "hidden"
    );


    // Copiar productos solamente
    // la primera vez

    if (
        fullCatalogGrid.children.length === 0
    ) {

        const items =
            document.querySelectorAll(
                ".horizontal-carousel .candle-item"
            );


        items.forEach(item => {

            const clonedItem =
                item.cloneNode(true);

            fullCatalogGrid.appendChild(
                clonedItem
            );

        });

    }


    const gridItems =
        fullCatalogGrid.querySelectorAll(
            ".candle-item"
        );


    gridItems.forEach(item => {

        item.style.display =
            "block";

    });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};


linkCatalogView.addEventListener(
    "click",
    openCatalog
);



// ==========================================
// CATÁLOGO DESDE EL TEXTO
// ==========================================

const catalogLink =
    document.getElementById(
        "catalog-link"
    );


if (catalogLink) {

    catalogLink.addEventListener(
        "click",
        openCatalog
    );

}



// ==========================================
// PERSONALIZAR
// ==========================================

linkCustom.addEventListener(
    "click",
    (e) => {

        e.preventDefault();

        setActiveLink(
            linkCustom
        );

        hideAllViews();

        customView.classList.remove(
            "hidden"
        );

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);



// ==========================================
// DE TEMPORADA
// ==========================================

linkSeasonal.addEventListener(
    "click",
    (e) => {

        e.preventDefault();

        setActiveLink(
            linkSeasonal
        );

        hideAllViews();

        catalogView.classList.remove(
            "hidden"
        );


        if (
            fullCatalogGrid.children.length === 0
        ) {

            const items =
                document.querySelectorAll(
                    ".horizontal-carousel .candle-item"
                );


            items.forEach(item => {

                fullCatalogGrid.appendChild(
                    item.cloneNode(true)
                );

            });

        }


        const gridItems =
            fullCatalogGrid.querySelectorAll(
                ".candle-item"
            );


        gridItems.forEach(item => {

            if (
                item.dataset.seasonal ===
                "true"
            ) {

                item.style.display =
                    "block";

            } else {

                item.style.display =
                    "none";

            }

        });


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);



// ==========================================
// 3. CARRITO
// ==========================================

let cart = [];


const cartIcon =
    document.getElementById(
        "cart-icon"
    );

const cartSidebar =
    document.getElementById(
        "cart-sidebar"
    );

const cartOverlay =
    document.getElementById(
        "cart-overlay"
    );

const closeCartBtn =
    document.getElementById(
        "close-cart"
    );

const cartItemsContainer =
    document.getElementById(
        "cart-items-container"
    );

const cartCountElement =
    document.getElementById(
        "cart-count"
    );

const cartTotalPriceElement =
    document.getElementById(
        "cart-total-price"
    );



const openCart = () => {

    cartSidebar.classList.add(
        "open"
    );

    cartOverlay.classList.add(
        "open"
    );

};


const closeCart = () => {

    cartSidebar.classList.remove(
        "open"
    );

    cartOverlay.classList.remove(
        "open"
    );

};


cartIcon.addEventListener(
    "click",
    openCart
);

closeCartBtn.addEventListener(
    "click",
    closeCart
);

cartOverlay.addEventListener(
    "click",
    closeCart
);



// ==========================================
// AGREGAR PRODUCTOS
// ==========================================

document.addEventListener(
    "click",
    (e) => {

        if (
            e.target.classList.contains(
                "add-btn"
            ) &&
            !e.target.closest(
                "#custom-candle-form"
            )
        ) {


            const candleItem =
                e.target.closest(
                    ".candle-item"
                );


            if (!candleItem) {
                return;
            }


            const id =
                candleItem.dataset.id;

            const name =
                candleItem.dataset.name;

            const basePrice =
                parseFloat(
                    candleItem.dataset.price
                );

            const wholesalePrice =
                parseFloat(
                    candleItem.dataset.wholesale
                );


            const qtyInput =
                candleItem.querySelector(
                    ".qty-input"
                );


            const inputQty =
                parseInt(
                    qtyInput.value
                );


            if (
                inputQty <= 0 ||
                isNaN(inputQty)
            ) {

                return;

            }


            const existingItem =
                cart.find(
                    item =>
                        item.id === id
                );


            if (existingItem) {

                existingItem.qty +=
                    inputQty;

            } else {

                cart.push({

                    id: id,

                    name: name,

                    basePrice:
                        basePrice,

                    wholesalePrice:
                        wholesalePrice,

                    qty: inputQty,

                    isCustom: false

                });

            }


            qtyInput.value = 1;


            updateCartUI();

            openCart();

        }

    }
);



// ==========================================
// VELA PERSONALIZADA
// ==========================================

const customForm =
    document.getElementById(
        "custom-candle-form"
    );


if (customForm) {

    customForm.addEventListener(
        "submit",
        (e) => {

            e.preventDefault();


            const shape =
                document.getElementById(
                    "custom-shape"
                ).value;


            const color =
                document.getElementById(
                    "custom-color"
                ).value;


            const scent =
                document.getElementById(
                    "custom-scent"
                ).value;


            const qty =
                parseInt(
                    document.getElementById(
                        "custom-qty"
                    ).value
                );


            const customId =
                `custom-${shape}-${color}-${scent}`
                    .toLowerCase()
                    .replace(
                        /\s+/g,
                        "-"
                    );


            const customName =
                `Vela ${shape} (${color}, ${scent})`;


            const existingItem =
                cart.find(
                    item =>
                        item.id === customId
                );


            if (existingItem) {

                existingItem.qty +=
                    qty;

            } else {

                cart.push({

                    id: customId,

                    name: customName,

                    basePrice: 180,

                    wholesalePrice: 140,

                    qty: qty,

                    isCustom: true

                });

            }


            updateCartUI();

            openCart();

        }
    );

}



// ==========================================
// ACTUALIZAR CARRITO
// ==========================================

const updateCartUI = () => {

    cartItemsContainer.innerHTML =
        "";


    let totalItems = 0;

    let totalPrice = 0;


    if (
        cart.length === 0
    ) {

        cartItemsContainer.innerHTML =
            `
            <p class="empty-cart-msg">
                Tu carrito está vacío.
            </p>
            `;

    } else {


        cart.forEach(item => {


            const currentPrice =
                item.qty >= 10
                    ? item.wholesalePrice
                    : item.basePrice;


            const itemTotal =
                currentPrice *
                item.qty;


            totalItems +=
                item.qty;

            totalPrice +=
                itemTotal;


            const itemHTML = `

                <div class="cart-item">

                    <div class="cart-item-info">

                        <h4>
                            ${item.name}
                        </h4>

                        <div class="cart-item-price">

                            $${currentPrice.toFixed(2)}
                            c/u

                            ${
                                item.qty >= 10
                                ?
                                `
                                <br>

                                <span class="cart-wholesale-note">

                                    ¡Precio de mayoreo aplicado!

                                </span>
                                `
                                :
                                ""
                            }

                        </div>

                    </div>


                    <div class="cart-item-controls">

                        <button
                            class="qty-btn"
                            onclick="changeQty('${item.id}', -1)">

                            -

                        </button>


                        <span>
                            ${item.qty}
                        </span>


                        <button
                            class="qty-btn"
                            onclick="changeQty('${item.id}', 1)">

                            +

                        </button>


                        <button
                            class="delete-btn"
                            onclick="removeItem('${item.id}')">

                            🗑️

                        </button>

                    </div>

                </div>

            `;


            cartItemsContainer.insertAdjacentHTML(
                "beforeend",
                itemHTML
            );

        });

    }


    cartCountElement.innerText =
        totalItems;


    cartTotalPriceElement.innerText =
        totalPrice.toFixed(2);

};



// ==========================================
// CAMBIAR CANTIDAD
// ==========================================

window.changeQty =
    (id, amount) => {

        const item =
            cart.find(
                i =>
                    i.id === id
            );


        if (!item) {
            return;
        }


        item.qty +=
            amount;


        if (
            item.qty <= 0
        ) {

            removeItem(id);

        } else {

            updateCartUI();

        }

    };



// ==========================================
// ELIMINAR PRODUCTO
// ==========================================

window.removeItem =
    (id) => {

        cart =
            cart.filter(
                item =>
                    item.id !== id
            );


        updateCartUI();

    };



// ==========================================
// 4. WHATSAPP
// ==========================================

const checkoutBtn =
    document.querySelector(
        ".checkout-btn"
    );


checkoutBtn.addEventListener(
    "click",
    () => {


        if (
            cart.length === 0
        ) {

            alert(
                "Tu carrito está vacío. Agrega algunas velas primero."
            );

            return;

        }


        const telefono =
            "524778577491";


        let mensaje =
            "Hola *Lumina* 🕯️, me gustaría realizar el siguiente pedido:\n\n";


        let totalPrecio = 0;


        cart.forEach(item => {


            const currentPrice =
                item.qty >= 10
                    ? item.wholesalePrice
                    : item.basePrice;


            const subtotal =
                currentPrice *
                item.qty;


            totalPrecio +=
                subtotal;


            if (
                item.isCustom
            ) {

                mensaje +=
                    `▪️ *[PEDIDO PERSONALIZADO]* ${item.qty}x ${item.name} ($${currentPrice} c/u) = $${subtotal}\n`;

            } else {

                mensaje +=
                    `▪️ ${item.qty}x ${item.name} ($${currentPrice} c/u) = $${subtotal}\n`;

            }

        });


        mensaje +=
            `\n*Total a pagar: $${totalPrecio.toFixed(2)}*\n\n`;


        mensaje +=
            "Quedo a la espera de confirmación y métodos de pago. ¡Gracias!";


        const mensajeCodificado =
            encodeURIComponent(
                mensaje
            );


        const url =
            `https://wa.me/${telefono}?text=${mensajeCodificado}`;


        window.open(
            url,
            "_blank"
        );

    }
);
