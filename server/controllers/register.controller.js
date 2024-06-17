import { registerUser } from "../models/user.model.js";
import { getUserById } from "../models/user.model.js";


export async function createUser(req, res) {
    try {

        // Verificar si el usuario logueado es Admin
        if (req.user.role != 'admin') {
            return res.status(400).json(
                {
                    statusCode: 400,
                    error: 'No eres Admin'

                });
        }

        const { usuario, email, password, role = 'registrador' } = req.body;

        if (!!!usuario || !!!email || !!!password) {
            return res.status(400).json(
                {
                    statusCode: 400,
                    error: 'Campos Requeridos'

                });
        }

        // Verificar si un usuario existe
        const exists = await getUserById(usuario);


        if (exists) {
            return res.status(400).json({
                statusCode: 400,
                error: 'El Usuario Ya Existe'

            });
        }

        await registerUser({ usuario, email, password, role });


        return res.status(200).json({
            statusCode: 200,
            message: `Usuario ${role} Creado Exitosamente`,
        })

    } catch (error) {
        return { statusCode: 500, message: error.message };
    }
}