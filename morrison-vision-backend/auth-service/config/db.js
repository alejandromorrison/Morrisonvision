const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            userNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Auth Service: Database connected");
    } catch (error) {
        console.error("Auth Service: Database connection failed", error);
        process.exit(1);
    }
};

module.exports = connectDB;