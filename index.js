//import fr pack
const express = require("express");
const mongoose = require('mongoose');
const adminRouter = require("./routes/admin");

//import fr other
const authRouter = require('./routes/auth');
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

//init
const PORT = process.env.PORT || 3000;
const app = express();
const DB = "mongodb+srv://roman:zccclDQ8DvtJx0LU@cluster0.e75jo.mongodb.net/?retryWrites=true&w=majority"

//middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

//connection
mongoose.connect(DB).then(() => {
    console.log('Connection Successful');
}).catch((e) => {
    console.log(e);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT}`);
});