let express = require('express');
const { userControler, userPostControler } = require('../controller/assignmentController');
let route = express.Router();

route.get('/reg', userControler);
route.post('/reg',userPostControler)

module.exports = route;
