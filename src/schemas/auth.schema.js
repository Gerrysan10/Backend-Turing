import {z} from 'zod'

//esquema para el registro
export const registerScheme = z.object({
    username: z.string({
        required_error:'El usuario es requerido'
    }),
    phone: z.string({
        required_error:'El teléfono es requerido'
    }),
    email: z.string({
        required_error:'El email es requerido'
    }).email(({
        message:'email no válido'
    })),
    password: z.string({
        required_error:'La contraseña es requerida'
    }).min(6, {
        message: 'La contraseña debe tener un mínimo de 6 caracteres'
    })
})
//esquema para el inicio de sesión
export const loginScheme = z.object({
    email: z.string({
        required_error:'El email es requerido'
    }).email(({
        message:'email no válido'
    })),
    password: z.string({
        required_error:'La contraseña es requerida'
    })
})