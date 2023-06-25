// import { formFields } from "./Portfolio/data"
import { ChangeEvent, FormEvent, useRef, useState } from "react"
import emailjs from '@emailjs/browser';

export const MessageMe = () => {
    return (
        <div
            id="Contact"
            className="w-full flex flex-col gap-6 items-center"
        >
            <h2 className="text-4xl">Write Me</h2>
            <div
                className="flex justify-center gap-6 w-3/4 h-96 text-lg"
            >
                <img
                    className="h-auto w-2/3"
                    src="https://source.unsplash.com/random/?Cryptocurrency&1"
                    alt=""
                />
                <Form />
            </div>
        </div>
    )
}

type FieldsetProps = {
    label: string,
    type: string,
    placeholder: string,
    handleInput: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

type formDataProps = {
    name: string,
    email: string,
    subject: string,
    message: string
}

const initFormData: formDataProps = {
    name: "",
    email: "",
    message: "",
    subject: ""
}

const Form = () => {
    const [formData, setFormData] = useState<formDataProps>(initFormData)

    const handleUserInputs = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFormData(prev => ({ ...prev, [evt.target.name]: evt.target.value }))

    const config = {
        SecureToken: import.meta.env.VITE_SECURE_TOKEN,
        To: import.meta.env.VITE_TO,
        From: formData.email,
        Subject: `This is the subject <<${formData.subject}>>`,
        Body: `And this is the body <<<<${formData.message}>>>>`
    }

    // const sendMail = async () => {
    //     const cdnUrl = "https://smtpjs.com/v3/smtp.js"
    //     const Email = await import (cdnUrl);
    //     Email?.send(config).then(() => console.log("email sent!!"))
    // }

    // const sendMail = async () => {
    //     // const Email = new Email.send()
    //     // Email?.send(config).then(() => console.log("email sent!!"))
    //     // const test = Example.
    //     Email.send(config).then(() => console.log("email sent!!"))
    //     // EmployeeProcessor
    // }

    // const emailTransport = nodemailer.createTransport({
    //     host: "smtp.elasticemail.com",
    //     port: 2525,
    //     secure: true, // upgrade later with STARTTLS
    //     auth: {
    //         user: import.meta.env.VITE_Username,
    //         pass: import.meta.env.VITE_Password,
    //     },
    // })

    // const sendEmail = () => {
    //     const mailOptions = {
    //         to: import.meta.env.VITE_TO,
    //         from: formData.email,
    //         subject: `This is the subject <<${formData.subject}>>`,
    //         text: `And this is the body <<<<${formData.message}>>>>`
    //     }
    //     emailTransport.sendMail(mailOptions, err => {
    //         if(err) {
    //             console.log("Unable to send email", err)
    //         } else {
    //             console.log("Email is sent successfully")
    //         }
    //     })
    // }

    // const ref = useRef<HTMLFormElement | undefined>(null)
    // const ref = useRef(null) ?? HTMLFormElement
    const formRef = useRef<HTMLFormElement>(document.querySelector("form") as HTMLFormElement)

    const sendEmail = () => {
        emailjs.sendForm('service_s6nbnw8', 'template_osaw7h9', formRef.current, 'si9oOl75tTk-IxSI-')
          .then((result) => {
              console.log(result.text, "success!!");
          }, (error) => {
              console.log(error.text, "error!!");
          });
      };

    const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
        evt.preventDefault()
        console.log(formData, "FORM DA^TA")
        // console.log(formData, "FORM DA^TA", config)
        // sendMail();
        // sendEmail()
        sendEmail();
    }

    const renderFieldsets = () => formFields.map(item => <Fieldset label={item.label} placeholder={item.placeholder} type={item.type} key={item.label} handleInput={handleUserInputs} />)

    return (
        <form
            ref={formRef}
            className="h-full w-1/3 flex flex-col gap-4"
            action=""
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col gap-1">{renderFieldsets()}</div>
            <button className="px-4 py-2 bg-slate-400 rounded-xl" type="submit">Send Message</button>
        </form>
    )
}

const Fieldset = ({ ...item }: FieldsetProps) => {
    const { label, type, placeholder, handleInput } = item

    return (
        <fieldset className="flex flex-col justify-start items-start w-f">
            <label htmlFor={label}>{label} *</label>
            {
                label === "Message"
                    ? <textarea className="w-full" onChange={handleInput} required={true} name={label.toLowerCase()} id={label} cols={30} rows={4}></textarea>
                    : <input className="w-full" onChange={handleInput} required={true} name={label.toLowerCase()} id={label} type={type} placeholder={placeholder} />
            }
        </fieldset>
    )
}

const formFields = [
    { label: "Name", type: "text", placeholder: "You Name" },
    { label: "Email", type: "email", placeholder: "You Email" },
    { label: "Subject", type: "text", placeholder: "Subject" },
    { label: "Message", type: "textarea", placeholder: "Message" }
]