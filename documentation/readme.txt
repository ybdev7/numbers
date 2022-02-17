numbers will provide a RESTful api for basic informatin about a number.
Example
1.
localhost/numbers/2345 will return {"_number":2345,"isEven":false}

2.
localhost/numbers will return {"_number":8135,"isEven":false}, where 8135 is a randomly chosen number  between 0 and 10000

3.
localhost/numbers/hello will return error, as will any non numeric parameter

4.
localhost/numbers/999999 will return error, since only 0-99999 numbers are supported

5.
localhost/numbers/funfacts/35 will return {"_number":35,"facts":[{"prime":37,"src":35},{"refrectSquare":36,"src":35}]}