import fetch from "node-fetch";

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: {
        apikey: '50BzE6eQ9NyQ70gBVJPkSWh4xOfUFlzu'
    }
};

export default function convertCurrency(to, from, amount) {
    const response = fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
        .then(response => response.json())
        .catch((err) => {
            console.log(err)
        });

    return response
}