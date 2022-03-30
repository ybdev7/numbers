# numbers - RESTful API for basic number info

### `npm run dev`

Runs the server locally.

Examples:

1. Try http://localhost/numbers/info/121 for the number of your choice (121 in this example) or http://localhost/numbers/random for a randomly selected number. The resulting JSON contains the following:
   {"\_number":121,"isEven":false,"isPrime":false,"divisors":[1,11,121],"funFacts":["The closest prime number to 121 is 127","The closest perfect square number to 121 is 121"]}

2. Try http://localhost/numbers to use the client
