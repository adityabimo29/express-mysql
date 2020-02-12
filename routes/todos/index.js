const express = require('express');
const router = express.Router();
const {upload} = require('../../config');
const {getAll,updateByEmail,deleteByEmail,getByEmail,postData ,login} = require('./controller')

router.get('/',getAll);
// Upload Single files
//router.post('/add',upload.single('avatar'),postData);

router.post('/add',postData);


// Upload files > 1
// router.post('/',upload.fields([
//     {
//     name:'avatar',
//     maxCount: 1
//     },
//     {
//         name:'gambar',
//         maxCount:1
//     }
// ]))

// Multiple files
// router.post('/',upload.array('avatar',2),postData);



module.exports = router;