const express = require('express');
const app = express();
app.use(express.static(__dirname + '/src')); //aqui você define onde está o index.html da sua aplicação.
app.listen(process.env.PORT || 3000);