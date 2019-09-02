// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;


// ===========================
// Entorno
// ===========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=============================
// Base de datos
// ============================

let urlDB;

// if (process.env.NODE_ENV === 'dev') {
//     urlDB = 'mongodb://localhost:27017/cafe';
// } else {
urlDB = 'mongodb+srv://smith8776:ian13246102!@cluster0-nf8mo.mongodb.net/cafe';
// }
process.env.URLDB = urlDB;