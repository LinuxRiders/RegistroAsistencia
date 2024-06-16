import bcrypt from 'bcrypt';
import { pool } from '../utils/db.js';

// Función para registrar un nuevo usuario
export const registerUser = async ({ usuario, email, password, role = 'registrador' }) => {
    try {

        // Asegúrate de que el rol sea seguro
        const validRole = ['admin', 'editor', 'registrador']; // Lista de roles validos

        if (!validRole.includes(role)) {
            throw new Error('Invalid role');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await pool.query('INSERT INTO users (usuario, email, password, role) VALUES (?, ?, ?, ?)', [usuario, email, hashedPassword, role]);

        // Devuelve una respuesta de éxito
        return { success: true, message: 'User registered successfully.' };
    } catch (error) {
        throw new Error('Failed to register user.');
    }
};

// Función para buscar un usuario por correo electrónico
export const getUserById = async (usuario) => {
    const [rows] = await pool.query('SELECT * FROM users WHERE usuario = ?', [usuario]);
    return rows[0];
};

// Función para comparar la contraseña proporcionada con la almacenada en la base de datos
export const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};