import 'dotenv/config';
import '../../config/database.js';
import User from '../User.js';

let users = [
    {
        email: "i5RbM@example.com",
        password: "1234",
        photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        role: 1,
        online: true
    }
];

User.insertMany(users)