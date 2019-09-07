// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;


// ===========================
// Entorno
// ===========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';



// ============================
// Vencimiento del token
// ============================
// 60 dias
// 60 min
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ============================
// SEED de Autenticacion
// ============================

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//=============================
// Base de datos
// ============================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {

    urlDB = process.env.MONGO_URI;
    // urlDB = 'mongodb+srv://smith8776:ian13246102!@cluster0-nf8mo.mongodb.net/cafe';
}
process.env.URLDB = urlDB;