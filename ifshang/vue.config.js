module.exports={
    devServer:{
        before(app){
            app.get('/shoppinglist',(req,res)=>{
                 let data =require('./src/data/goodList.json')
               res.json(data)
            })
           
        }
    }
}