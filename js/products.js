let products =[
    {
        name: 'Sữa ngôi sao phương nam 1.284g',
        image1: './image/npn128.jpg',
        image2: './image/nsp.jpg',
        old_price: '59.000d',
        curr_price: '55.000d'
    },
    {
        name: 'Sữa ngôi sao phương nam lon 380g',
        image1: './image/nspn1.jpg',
        image2: './image/lonnspn.jpg',
        old_price: '20.000d',
        curr_price: '19.000d'
    },
    {
        name: 'Sữa ngôi sao phương nam giấy 380g',
        image1: './image/npsng.png',
        image2: './image/nspng.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Nạp trực tiếp Mobifone OTP 100',
        image1: './image/mobi100.jpg',
        image2: './image/mobi100.jpg',
        old_price: '100.000d',
        curr_price: '90.000d'
    },
    {
        name: 'Nạp trực tiếp <br> Viettel 100',
        image1: './image/viettel100.jpg',
        image2: './image/viettel100.jpg',
        old_price: '100.000d',
        curr_price: '95.000d'
    },
    {
        name: 'Nạp trực tiếp <br> Vina 100',
        image1: './image/vina100.jpg',
        image2: './image/vina100.jpg',
        old_price: '100.000d',
        curr_price: '90.000d'
    },
]

let product_list = document.querySelector('#products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
            <div class="col-4 col-md-6 col-sm-12">
                <div class="product-card">
                    <div class="product-card-img">
                        <img src="${e.image1}" alt="">
                        <img src="${e.image2}" alt="">
                    </div>
                    <div class="product-card-info">
                        <div class="product-btn">
                            <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">MUA NGAY<a>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-cart-add'></i>
                            </button>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-heart'></i>
                            </button>
                        </div>
                        <div class="product-card-name">
                            ${e.name}
                        </div>
                        <div class="product-card-price">
                            <span><del>${e.old_price}</del></span>
                            <span class="curr-price">${e.curr_price}</span>
                        </div>
                    </div>
                </div>
            </div>
        `
        product_list.insertAdjacentHTML("beforeend", prod)
    })
}

renderProducts(products)
renderProducts(products)

let filter_col = document.querySelector('#filter-col')

document.querySelector('#filter-toggle').addEventListener('click', () => filter_col.classList.toggle('active'))

document.querySelector('#filter-close').addEventListener('click', () => filter_col.classList.toggle('active'))