import {Schema, model, Document} from 'mongoose'

const affiliationSchema = new Schema ({
    //Datos basicos 
    cedula: {
        type: Number,
        required: true,
        unique: true
    },

    archivos: {
        type: Object,
    },
    
    nombre: {
        type: String,
        required: true
    },

    apellido: {
        type: String,
        required: true
    },

    genero: {
        type: String,
        required: true
    },

    fecha_nacimiento: {
        type: Date,
        required: true
    },

    //-------DATOS DE NOTIFICACION--------
    direccion: {
        type: String,
        required: true
    },

    correo: {
        type: String,
        unique: true
    },

    celular: {
        type: Number,
        required: true,
    },

    telefono: {
        type: Number,

    },

    nombre_emergencia: {
        type: String,
        required: true
    },

    celular_emergencia: {
        type: Number,
        required: true
    },

    whatsapp: {
        type: String
    },

    telegram : {
        type: String
    },

    //---------DATOS TRABAJADOR
    fecha_ingreso: {
        type: Date,
        required: true

    },

    examen_ingreso: {
        type: String,
        required: true
    },

    salario: {
        type: Number,
        required: true
    },

    cargo: {
        type: String,
        required: true
    },

    curso_alturas: {
        type: String,
        required: true
    },

    rut: {
        type: String,
        required: true
    },

    //--------DATOS AFILIACION 
    eps: {
        type: String,

    },

    arl: {
        type: String,

    },

    fondo_pensiones: {
        type: String,

    },
    fonod_cesantias: {
        type: String
    },

    caja_compensacion: {
        type: String,

    },

    // cargar_documentos: {
    //     type: Object
    // },

    //------DATOS BANCARIOS
    estado: {
        type: String,

    },

    numero_cuenta: {
        type: Number
    },

    entidad_bancaria: {
        type: String
    },

    aux_admin_revision: {
        type: String
    }
},{
    versionKey: false,
    timestamps: true
})

export interface IAffiliation extends Document {
    cedula_frontal: string,
    cedula_posterior: string,
    
}

export default model<IAffiliation>('Affiliation', affiliationSchema)