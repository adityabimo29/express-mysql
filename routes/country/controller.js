// Controller Users
const connection = require('../../config/db')

module.exports = {
    getAll: (req,res) =>{
        connection.query('SELECT * FROM country',(err,results,fields) => {
            if(err){
                res.status(500).send({
                message: `error when try to get data, ${err.sqlMessage}`,
                
                })
                } else {
                    res.send({
                        message: `Country Lists`,
                        results
                    })
                }
        
        })
    },
    postData: (req,res) => {

        connection.query('INSERT INTO country SET ?', req.body, function (error, results, fields) {
            if(error){
                console.log(error)
            }else{
                res.status(200).send({
                    message:'Data  has been added',
                })
            }
          });
    },
    getOne:(req,res)=>{
        let sql = "SELECT * FROM country WHERE id = " + connection.escape(req.params.id);;
        try {
            connection.query(sql,function (err,results,fields){
                if(err){
                    console.log(err)
                }else{
                    console.log(req.body.id)
                    res.status(200).send({
                        message:'Data found',
                        data:results
                    })
                }
            })
        } catch (error) {
            console.log(error)
        }

    },
    update:(req,res) =>{
        let sql = "UPDATE country SET ? WHERE id = ?";
        let pata = [req.body,req.params.id];
        connection.query(sql,pata,(error,results,fields) =>{
            if(error){
                console.log(error)
            }else{
                res.status(200).send({
                    message:'Data has been updated',
                    data:results
                })
            }
        })
    },
    deleteData:(req,res)=>{
        let sql = "DELETE FROM country WHERE id = ?";
        let pata = req.params.id;
        connection.query(sql,pata,(error,results,fields) =>{
            if(error){
                console.log(error)
            }else{
                res.status(200).send({
                    message:'Data has been deleted',
                })
            }
        })
    }


}
