// Controller Users
const connection = require('../../config/db')

module.exports = {
    getAll: (req,res) =>{
        connection.query('SELECT t.name,t.description,c.name AS country_name,c.capital FROM tokoh t JOIN country c ON t.country_id = c.id',(err,results,fields) => {
            if(err){
                res.status(500).send({
                message: `error when try to get data, ${err.sqlMessage}`,
                
                })
                } else {
                    res.send({
                        message: `Tokoh Lists`,
                        results
                    })
                }
        
        })
    },
    postData: (req,res) => {

        connection.query('INSERT INTO tokoh SET ?', req.body, function (error, results, fields) {
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
        let sql = "SELECT t.name,t.description,c.name AS country_name,c.capital FROM tokoh t JOIN country c ON t.country_id = c.id WHERE t.id = " + connection.escape(req.params.id);;
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
    getByCountry: (req,res) => {
        let sql = "SELECT COUNT(t.id) AS total FROM tokoh t JOIN country c ON t.country_id = c.id WHERE c.id = " + connection.escape(req.params.id);;
        try {
            connection.query(sql,function (err,results,fields){
                if(err){
                    console.log(err)
                }else{
                    console.log(req.body.id)
                    res.status(200).send({
                        message:'Total Tokoh berdasarkan Id Country',
                        data:results
                    })
                }
            })
        } catch (error) {
            console.log(error)
        }
    },
    update:(req,res) =>{
        let sql = "UPDATE tokoh SET ? WHERE id = ?";
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
        let sql = "DELETE FROM tokoh WHERE id = ?";
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
    },
    myCountry:(req,res)=>{
        let sql = "SELECT t.name,t.description,c.name AS country_name,c.capital FROM tokoh t JOIN country c ON t.country_id = c.id WHERE t.country_id = " + connection.escape(req.params.id);;
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
    }


}
