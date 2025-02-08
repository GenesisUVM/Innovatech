import {mongoose} from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://genesis:genesis@cluster0.msjhg.mongodb.net/Innovatech');
        console.log('MongoDB conectado');
    } catch (error) {
        console.error('Error de conexión a MongoDB:', error);
        
    }
};

export default connectDB;


