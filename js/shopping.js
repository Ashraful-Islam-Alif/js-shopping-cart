
function updateproductNumber(product, price, isIncreasing) {
    const productNumber = document.getElementById(product + '-number');
    let productNumberValue = productNumber.value
    if (isIncreasing == true) {
        productNumberValue = parseInt(productNumberValue) + 1
    }
    else if (productNumberValue > 0) {
        productNumberValue = parseInt(productNumberValue) - 1
    }
    productNumber.value = productNumberValue

    const caseTotal = document.getElementById(product + '-total')
    caseTotal.innerText = productNumberValue * price;

    //calculate total
    calculation();
}

function getinputCalculation(product) {
    const inputNumber = document.getElementById(product + '-number')
    const phoneNumber = inputNumber.value
    return phoneNumber;
}

//price calculation
function calculation() {
    const phoneTotal = getinputCalculation('phone') * 1278
    const casePrice = getinputCalculation('case') * 59
    const subTotal = phoneTotal + casePrice
    document.getElementById('sub-total').innerText = subTotal
    const taxPrice = subTotal * .1
    console.log(taxPrice)
    document.getElementById('tax-price').innerText = Math.round(taxPrice)
    document.getElementById('total-price').innerText = parseInt(subTotal) + Math.round(taxPrice)
}



//phone increase decrease event
document.getElementById('phone-plus').addEventListener('click', function () {
    updateproductNumber('phone', 1278, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateproductNumber('phone', 1278, false);
})


//case increase decrease event
document.getElementById('case-plus').addEventListener('click', function () {
    updateproductNumber('case', 59, true)
})

document.getElementById('case-minus').addEventListener('click', function () {
    updateproductNumber('case', 59, false)
})