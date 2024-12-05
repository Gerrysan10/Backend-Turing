import mongoose from "mongoose";

export const connectDB = async () =>{
    try{
        const uri = 'mongodb+srv://gera35san:E2c1MY3CxUDs4jGN@appdeportes.k8irx.mongodb.net/?retryWrites=true&w=majority';
        await mongoose.connect(uri);
        console.log('Conexión exitosa con MongoDB usando Mongoose');
    }catch(error){
        console.error('Error al conectar con MongoDB:', error);
    }
        
}
