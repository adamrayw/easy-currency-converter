# easy-currency-converter

Convert your currency easily

## Features

- 200+ Currencies
- Up to date rates

## Installation

Install easy-currency-converter with npm

```bash
  npm install easy-currency-converter
```

## Usage/Examples

```javascript
import convertCurrency from "easy-currency-converter";

try {
  const convert = await convertCurrency("IDR", "USD", 1);
  console.log(convert);
} catch (error) {
  console.log(error);
}

// output
// {
//   success: true,
//   query: { from: 'USD', to: 'IDR', amount: 1 },
//   info: { timestamp: 1658986983, rate: 14958.3 },
//   date: '2022-07-28',
//   result: 14958.3
// }
```

also you can use async/await function

## Authors

- [@adamrayw](https://www.github.com/adamrayw)

## Support

For support, donate via paypal to raywibowo68@gmail.com

## Contributing

Contributions are always welcome!

Please adhere to this project's `code of conduct`.
