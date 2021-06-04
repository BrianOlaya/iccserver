const nodemailer = require("nodemailer");

module.exports = {
  transporter: nodemailer.createTransport({
    host: "smtp.aol.com",
    port: 465, //587
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },

    tls: {
      rejectUnauthorized: false,
    },
  }),

  welcome(nombre) {
    return `
    <body>
        <h1>ICC Renacer para las naciones</h1>
     <h2>Bendiciones ${nombre}!</h2>
     <p>Estamos muy felices por ti y por tu decisión de querer conocer personalmente al Señor Jesucristo, el Salvador de la humanidad. 
      El te ha estado esperando con los brazos abiertos y de aquí en adelante vas a vivir
      experiencias inimaginables con su amor, perdón y gran poder. ${nombre} en los próximos dias alguien de nuestro 
      equipo cerca de tu zona te estará contactando para saber si hay algo en lo que podamos ayudarte y para guiarte en tu crecimiento espiritual. Todo esto lo hacemos sin ningún interés de por
      medio, solo que vivas el amor que sobrepasa todo conocimiento. Por últmio, recuerda que Dios esta muy feliz de poder recibirte como su hij@
       y estar contigo todos los dias de tu vida pero tambien en la eternidad.
     </p>
     <h2>Con amor, Iglesia Cruzada Cristiana-Itagüí. Renacer para las naciones.</h2> <br/>
     <h3>Cra 50a # 73a -09. Itagüí-Antioquia</h3>
     <a href="https://www.iccrenacer.com" target="_blank">www.iccrenacer.com</a>
    </body>
  `;
  },
};
