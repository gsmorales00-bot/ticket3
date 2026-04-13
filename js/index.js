function calculateDiscount() {
    let purchaseAmount = Number(document.getElementById("purchaseAmount").value);
    let hasCoupon = document.getElementById("hasCoupon").value === "true";
    let finalPrice = purchaseAmount;

    if (purchaseAmount > 100) {
        finalPrice = purchaseAmount * 0.8; // 20% descuento
    } else if (purchaseAmount > 50) {
        finalPrice = purchaseAmount * 0.9; // 10% descuento
    }

    if (hasCoupon) {
        finalPrice = finalPrice * 0.95; // 5% descuento adicional
    }

    document.getElementById("finalPrice").textContent =
        "The final price is $" + finalPrice.toFixed(2);
}