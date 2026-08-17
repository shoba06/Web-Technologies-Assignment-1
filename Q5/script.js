// User-defined function to calculate the amount
function calculateAmount(quantity, price) {

    return quantity * price;
}


// User-defined function to generate the bill
function generateBill() {

    let product1 = document.getElementById("product1").value;
    let product2 = document.getElementById("product2").value;
    let product3 = document.getElementById("product3").value;


    let quantity1 = Number(document.getElementById("quantity1").value);
    let quantity2 = Number(document.getElementById("quantity2").value);
    let quantity3 = Number(document.getElementById("quantity3").value);


    let price1 = Number(document.getElementById("price1").value);
    let price2 = Number(document.getElementById("price2").value);
    let price3 = Number(document.getElementById("price3").value);


    // Validate input
    if (
        product1 === "" ||
        product2 === "" ||
        product3 === "" ||
        quantity1 <= 0 ||
        quantity2 <= 0 ||
        quantity3 <= 0 ||
        price1 < 0 ||
        price2 < 0 ||
        price3 < 0
    ) {

        alert("Please enter valid details for all three products.");

        return;
    }


    // Calculate individual amounts
    let amount1 = calculateAmount(quantity1, price1);
    let amount2 = calculateAmount(quantity2, price2);
    let amount3 = calculateAmount(quantity3, price3);


    // Calculate total
    let total = amount1 + amount2 + amount3;


    // Apply 10% discount if total exceeds ₹2000
    let discount = 0;

    if (total > 2000) {

        discount = total * 0.10;
    }


    // Calculate final payable amount
    let finalAmount = total - discount;


    // Display products
    document.getElementById("billItems").innerHTML =

        `
        <div class="bill-item">
            <span>${product1}</span>
            <span>${quantity1}</span>
            <span>₹${price1.toFixed(2)}</span>
            <span>₹${amount1.toFixed(2)}</span>
        </div>

        <div class="bill-item">
            <span>${product2}</span>
            <span>${quantity2}</span>
            <span>₹${price2.toFixed(2)}</span>
            <span>₹${amount2.toFixed(2)}</span>
        </div>

        <div class="bill-item">
            <span>${product3}</span>
            <span>${quantity3}</span>
            <span>₹${price3.toFixed(2)}</span>
            <span>₹${amount3.toFixed(2)}</span>
        </div>
        `;


    // Display totals
    document.getElementById("subtotal").textContent =
        "₹" + total.toFixed(2);


    document.getElementById("discount").textContent =
        "₹" + discount.toFixed(2);


    document.getElementById("finalAmount").textContent =
        "₹" + finalAmount.toFixed(2);


    // Show bill
    document.getElementById("bill").style.display = "block";
}


// Reset function
function resetBill() {

    document.getElementById("product1").value = "";
    document.getElementById("product2").value = "";
    document.getElementById("product3").value = "";

    document.getElementById("quantity1").value = "";
    document.getElementById("quantity2").value = "";
    document.getElementById("quantity3").value = "";

    document.getElementById("price1").value = "";
    document.getElementById("price2").value = "";
    document.getElementById("price3").value = "";

    document.getElementById("bill").style.display = "none";
}