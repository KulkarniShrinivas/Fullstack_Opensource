const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

// function middleware1(req, res, next) {
//     console.log("from inside middleware" + req.headers.counter);
//     next();


// }

// app.use(middleware1);
app.use(bodyParser.json())

function calculateSum(counter) {
    var sum = 0;
    for (var i = 1; i <= counter; i++) {
        sum = sum + i;
    }
    return sum;
}

// // 4=>1*2*3*4=24
// function calculateMul(counter) {
//     var answer = 1;
//     for (var i = 1; i <= counter; i++) {
//         answer = answer + i;
//     }
//     return answer;
// }

function handleFirstRequest(req, res) {
    // var counter = req.query.counter;

    // console.log(req.headers);

    var counter = req.query.counter;
    var calculatedSum = calculateSum(counter);
    // var calculatedMul = calculateMul(counter);
    var answerObject = {
        sum: calculatedSum,
        // mul: calculatedMul,
    };


    res.send(answerObject);

}


// function givePage(req, res)
// {
//     res.send(`<head>
//     <title>
//         Hello form kulkarni
//     </title>
//     </head>
//     <body>
//        <b>Hi There</b>
//     </body>`)
// }


// app.get('/',givePage)

// app.get('/handleSum', handleFirstRequest)
app.get('/handleSum', handleFirstRequest)


function started() {
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, started)
