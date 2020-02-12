// Controller Users
const connection = require('../../config/db')

module.exports = {
    getAll: (req,res) =>{
        connection.query('SELECT * FROM todos',(err,results,fields) => {
            if(err){
                res.status(500).send({
                message: `error when try to get data, ${err.sqlMessage}`,
                
                })
                } else {
                    res.send({
                        message: `Todos Lists`,
                        results
                    })
                }
        
        })
    },
    postData: (req,res) => {

        connection.query('INSERT INTO todos SET ?', req.body, function (error, results, fields) {
            if(error){
                console.log(error)
            }else{
                res.status(200).send({
                    message:'Data  has been added',
                })
            }
          });
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
