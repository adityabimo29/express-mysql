// Controller Users
const connection = require('../../config/db')

module.exports = {
    getAll: async (req,res) =>{
        connection.query('SELECT * FROM movies',(err,results,fields) => {
            if(err){
                res.status(500).send({
                message: 'error when try to get users, check your connection to database',
                error
                })
                } else {
                    res.send({
                        message: `Movies`,
                        results
                    })
                }
        
        })
    },
    postData: async (req,res) => {

    },
    login:async (req,res)=>{

    },
    getByEmail:async (req,res)=>{


    },
    updateByEmail: async (req,res)=>{



    },
    deleteByEmail: async(req,res)=>{


    },
    // postData:(req,res) => {

    //     try {
    //         const newData = req.body;
    //         const newFile = req.file;

    //         data.push({...newData,avatar:newFile.path});
    //         console.log(req.file);
    //         res.send({message:'sip',data:data});
    //     } catch (error) {
    //         console.log(error)
    //     }
        
    // }
}
