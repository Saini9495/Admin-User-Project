const mongoose = require("mongoose");

const connectDB = async () => {

try {

await mongoose.connect("mongodb://host.docker.internal:27017/adminUsers");

console.log("MongoDB Connected");

} catch (error) {

console.log(error);
process.exit(1);

}

};

module.exports = connectDB;