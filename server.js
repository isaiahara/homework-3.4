const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const accessTokenSecret = 'password123admin';


app.use(express.json());


app.listen(3000, () => {
    console.log('Authentication service started on port 3000');
});

const users = [
    {
        username: 'john',
        password: 'password123admin',
        
    }
];

app.post('/login', (req, res) => {
    
    const { username, password } = req.body;
    const user = users.find(u => { return users.username === username && users.password === password });
    
    if (user) {
       
        const accessToken = jwt.sign({ username: user.username }, accessTokenSecret);

        res.json({
            accessToken
        });
    } else {
        res.send('Username or password incorrect');
    }
});