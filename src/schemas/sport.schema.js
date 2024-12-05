import {z} from 'zod'

// Esquema para los rankings
export const rankingScheme = z.object({
    sport: z.string({
        required_error: 'El deporte es requerido',
    }),
    title: z.string({
        required_error: 'El título es requerido',
    }),
    data: z.array(
        z.object({
            Pos: z.number({
                required_error: 'La posición es requerida',
            }),
        })
    ).nonempty({
        message: 'Debe haber al menos un registro en los datos',
    }),
});

// Esquema para los deportes 
export const sportScheme = z.object({
    name: z.string({
        required_error: 'El nombre del deporte es requerido',
    }),
    link: z.string({
        required_error: 'El enlace de la imagen es requerido',
    }).url({
        message: 'El enlace debe ser una URL válida',
    }),
});

//Esquema de las noticias
export const noticeSchema = z.object({
    title: z.string({
        required_error: 'El título es requerido',
    }).min(1, 'El título no puede estar vacío'),
    description: z.string({
        required_error: 'La descripción es requerida',
    }).min(1, 'La descripción no puede estar vacía'),
    linkImage: z.string({
        required_error: 'El enlace de la imagen es requerido',
    }).url({
        message: 'El enlace de la imagen debe ser una URL válida',
    }),
    linkNotice: z.string({
        required_error: 'El enlace de la noticia es requerido',
    }).url({
        message: 'El enlace de la noticia debe ser una URL válida',
    }),
});


