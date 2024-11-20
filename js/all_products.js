fetch('js/items.json')
            .then(response => response.json())
            .then(data =>{
                const products_dev = document.getElementById("products_dev")

                data.forEach(product => {
                    

                        products_dev.innerHTML +=`
                        <div class="product swiper-slide">

                        <div class="icons">
                            <span><i onclick ="addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span><i class="fa-solid fa-share"></i></span>
                        </div>


                        <div class="img_product">
                            <img src="${product.img}" alt="">
                            <img class="img_hover" src="${product.img_hover}" alt="">
                        </div>
                        <h2 class="name_product"><a href="#">${product.name}</a></h2>
                        <div class="star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                        </div>
                    </div>
                    `   

                    
                });
            })
            