// import { formFields } from "./Portfolio/data"

export const MessageMe = () => {
    return (
        <div
            id="Contact"
            className="w-full flex flex-col gap-6"
        >
            <h2 className="text-4xl">Write Me</h2>
            <div
                className="flex gap-6 w-full h-96 text-lg"
            >
                <img
                    className="h-auto"
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
        <form className="h-full flex flex-col gap-4" action="">
            <div className="flex flex-col gap-4">{renderFieldsets()}</div>
            <button className="px-4 py-2 bg-slate-400 rounded-xl" type="submit">Send Message</button>
        </form>
    )
}

const Fieldset = ({ ...item }: FieldsetProps) => {
    const { label, type, placeholder } = item

    return (
        <fieldset className="flex flex-col justify-start items-start">
            <label htmlFor={label}>{label} *</label>
            {
                label === "Message"
                    ? <textarea required={true} name={label} id={label} cols={30} rows={4}></textarea>
                    : <input required={true} id={label} type={type} placeholder={placeholder} />
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