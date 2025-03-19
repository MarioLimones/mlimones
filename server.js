const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware para parsear JSON y habilitar CORS
app.use(express.json());
app.use(cors());

// Configurar Nodemailer para enviar correos
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Usar Gmail como servicio
    auth: {
        user: 'mario.limobe@gmail.com', // Tu correo electrónico
        pass: 'xfsh fknr ywxo xvfe', // Tu contraseña o contraseña de aplicación
    },
});

// Ruta para manejar el formulario de contacto
app.post('/enviar-correo', (req, res) => {
    const { nombre, email, mensaje } = req.body;

    const mailOptions = {
        from: 'tu_correo@gmail.com', // Remitente
        to: 'mario.limobe@gmail.com', // Destinatario
        subject: `Nuevo mensaje de ${nombre}`, // Asunto
        text: `Mensaje: ${mensaje}\n\nResponder a: ${email}`, // Cuerpo del correo
    };

    // Enviar el correo
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Correo enviado: ' + info.response);
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});