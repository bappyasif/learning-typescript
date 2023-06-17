// import { formFields } from "./Portfolio/data"

export const MessageMe = () => {
    return (
        <div
        className="w-full h-fit"
        >
            <h2>Write Me</h2>
            <div
                className="flex gap-6 w-full h-60"
            >
                <img
                    className="w-1/2 h-full"
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
    placeholder: string
}

const Form = () => {
    const renderFieldsets = () => formFields.map(item => <Fieldset label={item.label} placeholder={item.placeholder} type={item.type} key={item.label} />)

    return (
        <form action="">
            <div>{renderFieldsets()}</div>
            <button type="submit">Send Message</button>
        </form>
    )
}

const Fieldset = ({ ...item }: FieldsetProps) => {
    const { label, type, placeholder } = item

    return (
        <fieldset>
            <label htmlFor={label}>{label}</label>
            {
                label === "Message"
                    ? <textarea name={label} id={label} cols={30} rows={4}></textarea>
                    : <input id={label} type={type} placeholder={placeholder} />
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