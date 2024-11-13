import createItem from "../services/item.js";
import * as cartService from "../services/cart.js";

const myCart = [];
const myWishlist = [];

console.log("Welcone to the Shopee Cart!");

const item1 = await createItem("HQ Batman", 59.99, 3);
const item2 = await createItem("HQ Spider-mam", 39.99, 2);
const item3 = await createItem("HQ Dare Devil", 29.99, 1);
const item4 = await createItem("Manga Akira", 69.99, 1);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);

await cartService.addItem(myWishlist, item4);

// await cartService.deleteItem(myCart, item1.name)

await cartService.removeItem(myCart, item1);
await cartService.removeItem(myCart, item3);

await cartService.displayCart(myCart);
await cartService.calculateTotal(myCart);
;
