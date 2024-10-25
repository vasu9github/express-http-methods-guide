//  {* USE OF GET TO RETRIEVE THE FILES *}

// import express from 'express';

// const router = express.Router();

// const posts = [
//     {id : 1 ,title : 'post one'},
//     {id : 2 ,title : 'post two'},
//     {id : 3 ,title : 'post three'},
//     {id : 4 ,title : 'post four'}
// ];

// router.get('/',(req,res) => {
//     res.json(posts);
// });
// export default router;


//  {* USE OF POST *}


// import express from 'express';
// import { title } from 'process';

// const router = express.Router();

// const posts = [
//     {id : 1 ,title : 'post one'},
//     {id : 2 ,title : 'post two'},
//     {id : 3 ,title : 'post three'},
//     {id : 4 ,title : 'post four'}
// ];

// router.get('/',(req , res) => {
//     res.json(posts);
// });

// router.post('/',(req,res) => {
//     console.log(req.body);
//     const newPost = {id : posts.length + 1 , title : req.body.title};
//     if(!newPost.title){
//         return res.status(400).json({msg: 'please include a title'})
//     }
//     posts.push(newPost);
//     res.status(201).json(newPost);

// });
// export default router;

//  {* USE OF PUT *}

// import express from 'express';
// import { title } from 'process';

// const router = express.Router();

// const posts = [
//     {id : 1 ,title : 'post one'},
//     {id : 2 ,title : 'post two'},
//     {id : 3 ,title : 'post three'},
//     {id : 4 ,title : 'post four'}
// ];

// router.get('/',(req , res) => {
//     res.json(posts);
// });

// router.put('/:id',(req,res) => {
//     const id = parseInt(req.params.id);
//     const post = posts.find(post => post.id === id);

//     if(!post){
//         res.status(400).json({msg : `A post with the id: ${id} was not found`});
//     }
//     post.title = req.body.title;
//     res.status(201).json(posts);
// });
// export default router;

//  {* USE OF DELETE*}

import express from 'express';
import { title } from 'process';

const router = express.Router();

let posts = [
    {id : 1 ,title : 'post one'},
    {id : 2 ,title : 'post two'},
    {id : 3 ,title : 'post three'},
    {id : 4 ,title : 'post four'}
];

router.get('/',(req , res) => {
    res.json(posts);
});

router.delete('/:id',(req,res) => {
    const id = parseInt(req.params.id);
    const postIndex = posts.findIndex(post => post.id === id);

    if(postIndex != -1){
        posts = posts.filter((post) =>  post.id != id);
        return res.status(201).json(posts);
    }
    
    res.status(404).json({ msg : "POST NOT FOUND"});
});
export default router;