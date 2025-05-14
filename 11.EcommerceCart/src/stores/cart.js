import {defineStore} from "pinia";

/*
Product:
{
index, title, description, imageUrl, price
}

Cart:
{
index, title, description, imageUrl, price, amount
}
*/

const products = [
    {
        index: 1,
        title: "Samsung A05S",
        description: "Nice Brand new Samsung Galaxy A05S Silver phone for you to use!",
        imageUrl: "https://minapi.beemarket.uz/prod-media/productImages/1718274390vSWlZDK3AEe2.webp",
        price: 400,
    },
    {
        index: 2,
        title: "Samsung S24 Ultra",
        description: "Mobile Phone Samsung Galaxy S24 Ultra Titanium Gray innovational 0.5 TB Storage",
        imageUrl: "https://macbro.uz/cdn/shop/files/ff3_1_1220x_crop_center.png?v=1716200132",
        price: 700,
    },
    {
        index: 3,
        title: "Xiaomi 14",
        description: "Ultra mega powerful Xiaomi 14 Global Version.",
        imageUrl: "https://openshop.uz/storage/uploads/products/photos/202312/rcpWPh5HigiOaeg8If6ZnEIwfuMQFFVRb3oAQeHv.jpg",
        price: 600,
    },
    {
        index: 4,
        title: "Asus Vivo Book",
        description: "Asus VivoBook Go 15 new version, your ultra gaming tool.",
        imageUrl: "https://nout.uz/wp-content/uploads/2024/07/e1504FA.png",
        price: 1200,
    },
]

export const useCartStore = defineStore("cart", {
    state: () => ({
        products: products,
        cart: JSON.parse(localStorage.getItem("cart")) || [],
    }),
    getters: {
        totalPrice() {
            return this.cart.reduce((acc, item) => acc + item.amount * item.price, 0);
        }
    },
    actions: {
        updateStorage() {
            localStorage.setItem("cart", JSON.stringify(this.cart));
        },
        addToCart(product) {
            let exists = false;
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i].index === product.index) {
                    exists = true;
                }
            }
            if (exists) {
                const item = this.cart.find((el) => el.index === product.index);
                item.amount++;
            } else {
                const item = {...product, amount: 1};
                this.cart.push(item);
            }
            this.updateStorage();
        },
        removeFromCart(product) {
            const item = this.cart.find((el) => el.index === product.index);
            if (item.amount > 1) { // Decrease amount
                item.amount--;
            } else { // Delete from cart
                this.cart = this.cart.filter((el) => el.index !== item.index);
            }
            this.updateStorage();
        }
    }
});