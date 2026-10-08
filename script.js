let cartCount = 0;

function addToCart(productName) {

    cartCount++;

    document.getElementById("cart-count").textContent = cartCount;

    alert("تم إضافة " + productName + " إلى السلة 🛒");
}


function showCart() {

    if (cartCount === 0) {

        alert("السلة فارغة حالياً 🛒");

    } else {

        alert("عدد المنتجات في السلة: " + cartCount);

    }
}


function sendMessage(event) {

    event.preventDefault();

    alert("تم إرسال رسالتك بنجاح ❤️");

}