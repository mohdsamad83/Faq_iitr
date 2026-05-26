const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const User = require('./models/User');

dotenv.config();
connectDB();

const importData = async () => {
    try {
        // Only seed if empty to prevent wiping real data if this is run by accident later
        const count = await User.countDocuments();
        if (count === 0) {
            const users = [
                {
                    name: 'Admin User',
                    email: 'admin@iitr.ac.in',
                    password: 'password123',
                    role: 'admin'
                },
                {
                    name: 'Student User',
                    email: 'student@iitr.ac.in',
                    password: 'password123',
                    role: 'student'
                }
            ];
            await User.insertMany(users);
            console.log('Data Imported: Dummy Admin and Student accounts created!');
        } else {
            console.log('Database already has users, skipping seed to protect data.');
        }
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

importData();
