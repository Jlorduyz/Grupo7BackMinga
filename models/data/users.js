import 'dotenv/config';
import '../../config/database.js';
import User from '../User.js';
import bcryptjs from "bcryptjs";

let users = [
    {
        email: "manga1@example.com",
        password: "12345",
        photo: "https://i.pinimg.com/originals/64/d5/df/64d5df4138a41cce9466c5b54ebf6a0e.jpg",
        role: 1,
        online: false
    },{
        email: "manga2@example.com",
        password: "12345",
        photo: "https://i.pinimg.com/736x/ac/15/71/ac1571cc431a812b814cfeef4ca933c4.jpg",
        role: 2,
        online: false
    },{
        email: "manga3@example.com",
        password: "12345",
        photo: "https://bcw-media.s3.ap-northeast-1.amazonaws.com/yce_ai_anime_topbanner_mb_01_a51ba67c67.jpg",
        role: 1,
        online: false
    },{
        email: "manga4@example.com",
        password: "12345",
        photo: "https://img.freepik.com/fotos-premium/ilustracion-papel-tapiz-anime_1137879-190424.jpg",
        role: 2,
        online: false
    }

];

async function hashPasswords(data) {
    let hashes
   hashes = await data.map(res=>
  {
      let passwordH = bcryptjs.hashSync(res.password, 10);
      return{...res, password: passwordH}
   })
    return hashes;
}
let usersHashes = await hashPasswords(users) 

User.insertMany(usersHashes)