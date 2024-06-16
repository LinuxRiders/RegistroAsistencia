import { registerUser } from "../models/user.model.js";
import { getUserById } from "../models/user.model.js";


export async function createUser(req, res) {
    try {
        const { usuario, email, password, role = 'registrador' } = req.body;

        console.log(role);
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
            message: 'Usuario Creado Exitosamente',
        })

    } catch (error) {
        return { statusCode: 500, message: error.message };
    }
}