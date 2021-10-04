const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hey Udit here');
})


app.listen(3000, () => {

    console.log('Hey this is terminal');
});

