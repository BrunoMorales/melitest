const express = require('express');
const path = require('path');
const { getResultsFromServer } = require('./getResultFromServer')
const getProductById = require('./getProductFromServer')
const { getBreadcrumbByCategoryId } = require('./getCategoryBreadcrumb')
const app = express();

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    req.header('x_application_id');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST');
    next();
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.get('/api/items/:productId', getProductById)

app.get('/api/category/:categoryId', getBreadcrumbByCategoryId)

app.get('/api/items', getResultsFromServer)



app.listen(process.env.PORT || 4002);


