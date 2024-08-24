import express from 'express';
import 'dotenv/config';

const app = express();

//Get a list of animes :

app.get('/api/animes',(req,res)=>{
    const anime = [
        {
            id:1,
            title:'OPM',
            content:'One Punch Man'
        },
        {
            id:2,
            title:'DS',
            content:'Demon Slayer'
        },
        {
            id:3,
            title:'DN',
            content:'Death Note'
        },
        {
            id:4,
            title:'OP',
            content:'One Piece'
        },
        {
            id:5,
            title:'NS',
            content:'Naruto Shippuden'
        }
    ];
    res.json(anime);
})

// app.get('/',(req,res)=>{
//     res.send('Server is ready!!!');
// });

const port = process.env.PORT;

app.listen(port,()=>{
    console.log(`Server is listening on http://localhost:${port}`)
});
