const transport = require('../config/email.js')



const emailRegistro = async (datos) => {
    const { correo, nombre, token } = datos;

    

    // Información del email
    const info = await transport.sendMail({
        from: '"KAPEKSHOP - Registro usuario" <registro@kapekshop.com>',
        to: correo,
        subject: "KAPEKSHOP - Confirma Tu Cuenta",
        html: `
            <p>Hola ${nombre}, comprueba tu cuenta en KAPEKSHOP</P>
            <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace:</P>
            <a href="${process.env.FRONTEND_URL}/confirmar/${token}" >Comprobar Cuenta</a>
            <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
        `
    })
}


const emailRecuperarContrasenia = async (datos) => {
    const { correo, nombre, token } = datos;

    // Información del email
    const info = await transport.sendMail({
        from: '"KAPEKSHOP - Recuperar Contraseña" <registro@kapekshop.com>',
        to: correo,
        subject: "KAPEKSHOP - Recuperar Contraseña",
        html: `
            <p>Hola ${nombre}, restablece la contraseña de tu cuenta de KAPEKSHOP</P>
            <p>Da click en el siguiente enlace para recuperar tu contraseña:</P>
            <a href="${process.env.FRONTEND_URL}/recuperar-contrasenia/${token}" >Recuperar contrasenia</a>
            <p>Si tu no solicitaste restablecer tu contraseña, puedes ignorar el mensaje</p>
        `
    })
}

module.exports = {
    emailRegistro,
    emailRecuperarContrasenia
};