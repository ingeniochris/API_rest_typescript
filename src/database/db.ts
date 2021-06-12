import db from 'mongoose';


const url='mongodb://localhost/test'


const  Mongoose = async () => {
    try{
        await db.connect(url,
         {
            useUnifiedTopology: true,
            useNewUrlParser: true   
         });
        console.log('Db is connection ');
    }catch(err){
        console.error(err)
    }
};


export default Mongoose;


