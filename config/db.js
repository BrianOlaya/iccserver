
const {createPool} = require('mysql2/promise')

 async function connectDB() {
  const conn= await createPool({
    database:'iccrenacerdb',
    user:'96forzrq1avxfj52vuwv',
    host:'aws.connect.psdb.cloud',
    password:'pscale_pw_oo3i69QJF4FJWXjgy12vGtnXliHypNrrjKFwpiN6T8P',
    ssl:{
      rejectUnauthorized:false
    }
  })

 
  conn.query('SELECT * FROM USERS')
  console.log('ok..');
}

module.exports = connectDB;



// const mongoose = require("mongoose");
// require("dotenv").config({ path: "variables.env" });

// const conectarBD = async () => {
//   try {
//     await mongoose.connect('mongodb+srv://iccserver:renacerparalasnaciones2020@cluster0.kgtsa.mongodb.net/iccserver', {
//       //EL METODO CONNECT DE MONGOOSWE RECIBE DOS PARAMETROS
//       useNewUrlParser: true, //EL PRIMERO ES  LA URL QUE SE VA A CONECGTAR Y EL SEGUNDO OBJETO LA CONFIGURACION
//       useUnifiedTopology: true,
//       useFindAndModify: false,
//       useCreateIndex:true
//     });
//     console.log("DB CONECTADA");
//   } catch (error) {
//     console.log(error);
//     process.exit(1); // detiene la aplicaion si hay un error
//   }
// };

// module.exports = conectarBD;
