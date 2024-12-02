import "dotenv/config.js"
import "../../config/database.js"
import Category from "../Category.js";

const categories = [
    {
        name: 'shonen',
        color: '#FF4500',
        hover: '#FF6347',
        description: 'Action-packed stories with young protagonists',
        cover_photo: 'shonen-cover-photo.jpg',
        character_photo: 'shonen-character-photo.jpg',
        admin_id: '674a5929a8b7101b23f5b204',
    },
    {
        name: 'seinen',
        color: '#4682B4',
        hover: '#5F9EA0',
        description: 'Mature-themed manga for adult readers',
        cover_photo: 'seinen-cover-photo.jpg',
        character_photo: 'seinen-character-photo.jpg',
        admin_id: '674a5929a8b7101b23f5b204',
    },
    {
        name: 'comics',
        color: '#FFD700',
        hover: '#FFA500',
        description: 'Western superhero stories',
        cover_photo: 'comics-cover-photo.jpg',
        character_photo: 'comics-character-photo.jpg',
        admin_id: '674a5929a8b7101b23f5b204',
    },
    {
        name: 'shojo',
        color: '#FF69B4',
        hover: '#FFB6C1',
        description: 'Romance and drama for young women',
        cover_photo: 'shojo-cover-photo.jpg',
        character_photo: 'shojo-character-photo.jpg',
        admin_id: '674a5929a8b7101b23f5b204', 
    },
];

Category.insertMany(categories)