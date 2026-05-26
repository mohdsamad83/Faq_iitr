const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const User = require('./models/User');

dotenv.config();
connectDB();

const importData = async () => {
    try {
        // Clear all users first to fix the unhashed password issue
        await User.deleteMany();
        
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

        // Use User.create() in a loop so the Mongoose pre('save') hook runs and hashes the passwords
        for (const user of users) {
            await User.create(user);
        }
        
        console.log('Data Imported: Dummy Admin and Student accounts created with HASHED passwords!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

importData();
