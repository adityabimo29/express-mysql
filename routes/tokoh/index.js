const express = require('express');
const router = express.Router();
const {upload} = require('../../config');
const {getAll,getOne,postData,update,getByCountry,deleteData,myCountry} = require('./controller')

router.get('/',getAll);
// Upload Single files
//router.post('/add',upload.single('avatar'),postData);

router.post('/add',postData);
router.get('/id/:id',getOne);
router.get('/mycountry/:id',myCountry);
router.put('/id/:id',update);
router.get('/country/:id',getByCountry);
router.delete('/delete/:id',deleteData);
// router.put('/edit/:email',updateByEmail);
// router.get('/:email',getOne);
// router.delete('/delete/:email',deleteByEmail);
// router.post('/login',login);

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