import User from '../models/user.model.js';
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jwt.js';


// Registrar un nuevo usuario
export const register = async (req, res) => {
    const { username, phone, email, password } = req.body
    try {
        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = new User({
            username,
            role:'user',
            phone,
            email,
            password: passwordHash
        })

        const userSaved = await newUser.save();
        const token = await createAccessToken({id: userSaved._id});
        res.cookie('token',token);
        res.json({
            id: userSaved.id,
            username: userSaved.username,
            phone: userSaved.phone,
            role:userSaved.role,
            email: userSaved.email,
            createAt: userSaved.createdAt,
            UpdateAt: userSaved.updatedAt,
        }
        );
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

// Iniciar sesión
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Verificar si el usuario existe
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'El usuario no existe' });
        }

        // Verificar la contraseña
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        // Crear un token de acceso
        const token = await createAccessToken({ id: user._id });
        res.cookie('token', token, { httpOnly: true });

        // Responder con los datos del usuario
        res.json({
            id: user._id,
            username: user.username,
            role: user.role,
            phone: user.phone,
            email: user.email,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        });
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ message: 'Error interno del servidor', error: error.message });
    }
};

