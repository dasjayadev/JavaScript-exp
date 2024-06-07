let express = require('express');
let app = express();
let route = require('./routes/route');
let dotenv = require('dotenv');

// env middleware
dotenv.config();

// port
let PORT = process.env.PORT || 8080;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.static('public'))

// route level middleware
app.use(route);

// Error level middleware
app.use((err, req, res, next) => {
    if (err) {
        return res.status(500).send({ message: err.message });
    } else {
        next();
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
