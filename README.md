# A simple Slot Game REST API in Nodejs Express Typescript


A simple slot game where you just need to hit the endpoint and boom! if you win then you'll be paid out point worth of 100.

## Technologies Used

- Nodejs
- Express
- Typescript

## Installation

#### Step 1

```bash    
npm install 

```

#### Step 2

```bash    
npm run start

```

### step 3

- Set Up Environment variables You just need to provide the port number

### step 4

- Open the testing tool (eg: postman or your browser ) 
- Hit the api i.e: http://Localhost:XXXX/api/v1/twox/spin
- step 3 you'll get the response in the json format 

## If you win

```json
{
    "symbols": [
        [
            "cherry",
            "orange",
            "lemon"
        ],
        [
            "lemon",
            "orange",
            "cherry"
        ],
        [
            "lemon",
            "orange",
            "cherry"
        ]
    ],
    "win": "true",
    "payout": "100"
}

```

## If you Loose

```json
{
    "symbols": [
        [
            "lemon",
            "cherry",
            "orange"
        ],
        [
            "cherry",
            "orange",
            "lemon"
        ],
        [
            "cherry",
            "lemon",
            "orange"
        ]
    ],
    "win": "false",
    "payout": "0"
}

```


## Authors

- [@bikky-kc013](https://www.github.com/bikky-kc013)





## Support

For support, email bharathkc013@gmail.com.





