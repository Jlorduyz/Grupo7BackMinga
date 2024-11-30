import "dotenv/config.js"
import "../../config/database.js"
import Author from "../Author.js"

const authors = [
    {
        name: 'Alejandro',
        lastName: 'Smith',
        city: 'Madrid',
        country: 'Spain',
        photo: 'alejandro-photo.jpg',
        userId: '674a5929a8b7101b23f5b204', 
        active: true,
    },
    {
        name: 'Lucas',
        lastName: 'Johnson',
        city: 'New York',
        country: 'USA',
        photo: 'lucas-photo.jpg',
        userId: '674a5929a8b7101b23f5b202', 
        active: true,
    },
    {
        name: 'Eric',
        lastName: 'Taylor',
        city: 'London',
        country: 'UK',
        photo: 'eric-photo.jpg',
        userId: '674a5929a8b7101b23f5b201', 
        active: true,
    },
];

Author.insertMany(authors)