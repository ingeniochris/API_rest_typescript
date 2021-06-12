import app from './app';
import Mongoose from './database/db';

async function Main (){
   await Mongoose(); 
   await app.listen(app.get('port'))
   console.log(`Server on http://localhost:${app.get('port')}`);
};


Main();