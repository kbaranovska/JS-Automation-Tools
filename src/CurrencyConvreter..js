function convertUahTo(quantity, currency){
    switch(currency.toUpperCase()){
        case "EUR":
            return quantity * getEur();
            break;
        case "USD":
            return quantity * getUsd();
            break;
        default:
            return `Currency ${currency} is not supported.`;

    }
}

function getEur(){
    return 31.5;
}

function getUsd(){
    return 26.7;
}