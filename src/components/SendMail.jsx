import React from "react";
import emailjs from "@emailjs/browser";
import { Button } from "semantic-ui-react";


export default () => {



    const serviceID = "*****************";
    const publicKey = "*****************";
    const templateId = "****************";
    

    emailjs.init(publicKey);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.send(serviceID, templateId, {

            to_name: e.target.user_name.value,
            from_name: e.target.user_name.value,
            to_email: e.target.user_email.value,
            message: e.target.message.value

        })
            .then((result) => {
                console.log(result)
            }, (error) => {
                console.log(error);
            })
    }

    return (
        <>
            <div>
                <h1>Pagina de Contato</h1>
            </div>
            <div>
                <form className="contatoForm" onSubmit={sendEmail}>
                    <div className="inputLabel">
                        <label className="label">Name</label>
                        <input className="user_name" placeholder="Seu nome" required={true} type="text" name="user_name" />
                    </div>
                    <div className="inputLabel">
                        <label className="label">Email</label>
                        <input className="user_email" required={true} placeholder="Seu email" type="email" name="user_email" />
                    </div>
                    <div className="inputLabel">
                        <label className="label">Mensagem</label>
                        <textarea className="message" required={true} placeholder="Seu texto" name="message" />
                    </div>
                    <div className="divBtn">
                        <Button type="submit" color='violet'>Enviar</Button>
                    </div>
                </form>
            </div>
        </>

    )
}