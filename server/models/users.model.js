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

// Función para obtener la fecha y hora actual en formato adecuado para MySQL
const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toISOString().split('T')[0]; // Formato YYYY-MM-DD
    const time = now.toTimeString().split(' ')[0]; // Formato HH:MM:SS
    return { date, time };
};

// Función para reemplazar cadenas vacías por NULL en los campos
const replaceEmptyStringsWithNull = (fields) => {
    const updatedFields = {};
    for (const key in fields) {
        if (fields[key] === '') {
            updatedFields[key] = null;
        } else {
            updatedFields[key] = fields[key];
        }
    }
    return updatedFields;
};

// Función para buscar un usuario por Doc Identidad
export const registerUserRequest = async (table, data, responsableId) => {

    // Asegúrate de que la tabla sea seguro
    const validTable = ['participantes', 'ponentes']; // Lista de tablas validos

    if (!validTable.includes(table)) {
        throw new Error('Invalid table');
    }

    // Procesar campos para reemplazar cadenas vacías por NULL
    const fields = replaceEmptyStringsWithNull(data);

    // Generar la parte SET de la consulta
    const setClause = Object.keys(fields)
        .map(key => `${key} = ?`)
        .join(', ');

    const values = Object.values(fields);
    values.push(fields.nroDoc); // Añadir el ID al final para la cláusula WHERE

    // Construir la consulta de actualización
    const query = `
        UPDATE ${table}
        SET ${setClause}
        WHERE nroDoc = ?
    `;

    // Ejecutar la consulta de actualización
    const [result] = await pool.query(query, values);

    // Obtener Datos (id)
    const [rows] = await pool.query(`SELECT id FROM ${table} WHERE nroDoc = ?`, [fields.nroDoc]);

    // Verificar que se haya encontrado una fila
    if (rows.length === 0) {
        throw new Error('No se encontró ninguna fila con el nroDoc especificado.');
    }

    // Insertar una nueva fila en la tabla asistencia
    const { date, time } = getCurrentDateTime();

    // Determinar los valores de idAsisPa y idAsisPo según el valor de 'table'
    const idAsisPa = table === 'participantes' ? rows[0].id : null;
    const idAsisPo = table === 'ponentes' ? rows[0].id : null;

    // Ejecutar la consulta de inserción en la tabla asistencia
    await pool.query(`
    INSERT INTO asistencia (asistio, hora, fecha, responsable, idAsisPa, idAsisPo)
    VALUES (true, ?, ?, ?, ?, ?)
`, [time, date, responsableId, idAsisPa, idAsisPo]);

    return result[0];
};

