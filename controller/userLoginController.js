const connectDB = require("../helperFiles/DBConnection");
const User = require("../models/userSchema");
const bcrypt = require("bcrypt");


exports.addUser = async (req, res) => {
    console.log(
        `${req.body.email} ${req.body.username}`
    );
    try {
        connectDB();
        const temp = await User.findOne({ email: req.body.email });
        if (temp) {
            console.log(temp);
            res.status(200).send({ message: "USER already exists" });
        } else {
            const hashedPass = await bcrypt.hash(req.body.password, 10);
            const user = new User({
                username: req.body.username,
                email: req.body.email,
                password: hashedPass
            });

            const savedUser = await user.save();
            res.status(200).json(savedUser);
        }
    }
    catch (err) {
        console.log(err.message);
    }
}

exports.getUser = async (req, res) => {
    console.log(
        `${req.body.userInput} ${req.body.password}`
    );
    try {
        connectDB();
        const userInput = req.body.userInput;
        let user;
        if (userInput.includes('@')) {
            console.log('String contains @ sign');
            user = await User.findOne({ email: userInput });
        }
        else {
            console.log('String does not contains @ sign');
            user = await User.findOne({ username: userInput });
        }
        if (!user) {
            return res.json({ message: 'Invalid username or password' });
        }
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
        if (isPasswordValid) {
            res.status(200).json({ message: 'Login successful', user });
        } else {
            res.json({ message: 'Invalid username or password' });
        }
    }
    catch (err) {
        console.log(err.message);
    }



}