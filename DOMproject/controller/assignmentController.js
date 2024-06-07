let fs = require('fs')
let path = require('path')
const dbRead = require('../utilites/dbRead')
const { error } = require('console')

let userControler = (req, res) => {
    let userPath = path.join(__dirname,'../public/index.html')
    res.send('hello world')
}


let userPostControler = (req,res) => {
    let {name,designation,gender,salary} = req.body
    console.log(name,designation,gender,salary);
    if(!name || !designation || !gender || !salary){
    throw new Error('all fields are required')    
    }else{
        let dbpath = path.join(__dirname,"../db/db.json")
        let obj = {id:Math.trunc(Math.random()*1000),name,designation,gender,salary}
        //read file
        fs.readFile(dbpath,"utf-8",(err,data)=>{
            if(err){
                throw new Error('Somthing Wrong while inserting Data')
            }
            else{
                let originalData = JSON.parse(data)
                let newUpdatedData = [obj,...originalData]
                fs.writeFile(dbpath,JSON.stringify(newUpdatedData),(err)=>{
                    if(err){
                        throw new Error('Somthing Wrong while inserting Data')
                    }else{
                        res.status(200).send({message:'user is registered',data:newUpdatedData,sucess:true})
                    }
                })
            }
        })
    }
}

module.exports = {userControler,userPostControler}