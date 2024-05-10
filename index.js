const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoutes = require('./routes/product.js');


const app = express()
const PORT = 5000;


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));




//use routes
app.use("/api/products", productRoutes);
app.use("/api/product", productRoutes);





mongoose.connect('mongodb+srv://admin:yourpassword@backenddb.kle96k3.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackEndDB')
.then(() =>{ 
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server Running on port: http://localhost:${PORT}`);
    });
    
})
.catch((err) => console.log('Connection Failed '+err));



