
function formatPrice (price, dec= 2){
    return (`$ ${numberWithCommas(price)}`);
}

function numberWithCommas(price) {
    return (new Intl.NumberFormat('en-IN',{minimumFractionDigits: 2}).format(price));
}

export {formatPrice};