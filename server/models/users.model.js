import { pool } from '../utils/db.js';

// Función para devolver tabla 
export const getUsersRequest = async () => {
    const [rows] = await pool.query('SELECT * FROM asistencia');
    return rows;
};


// Función para buscar un usuario por Doc Identidad
export const getUserByDNI = async (DNI, table) => {

    // Asegúrate de que la tabla sea seguro
    const validTable = ['participantes', 'ponentes']; // Lista de tablas validos

    if (!validTable.includes(table)) {
        throw new Error('Invalid table');
    }

    // Construir dinámicamente la consulta SQL
    const query = `
    SELECT * 
        FROM ${table} 
        WHERE nroDoc = ?`;


    const [rows] = await pool.query(query, [DNI]);
    return rows[0];
};

// Función para buscar un usuario por Doc Identidad
export const getUserByName = async (name, table) => {

    // Asegúrate de que la tabla sea seguro
    const validTable = ['participantes', 'ponentes']; // Lista de tablas validos

    if (!validTable.includes(table)) {
        throw new Error('Invalid table');
    }

    // Construir dinámicamente la consulta SQL
    const query = `
    SELECT * 
        FROM ${table} 
        WHERE nombres = ?`;


    const [rows] = await pool.query(query, [name]);
    return rows[0];
};

// Función para buscar un usuario por Doc Identidad
export const getUserByApellido = async (apellidos, table) => {

    // Asegúrate de que la tabla sea seguro
    const validTable = ['participantes', 'ponentes']; // Lista de tablas validos

    if (!validTable.includes(table)) {
        throw new Error('Invalid table');
    }

    // Construir dinámicamente la consulta SQL
    const query = `
    SELECT * 
        FROM ${table} 
        WHERE apellidos = ?`;


    const [rows] = await pool.query(query, [apellidos]);
    return rows[0];
};

// Función para buscar un usuario por Doc Identidad
export const registerUserRequest = async (ticket, DNI) => {
    const [rows] = await pool.query('UPDATE asistencia SET Ticket = ? WHERE DocIdentidad = ?', [ticket, DNI]);
    return rows[0];
};