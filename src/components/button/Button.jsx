import "./Button.scss"

export default function Button({dark, text}){

    return(
        <p className={`btn ${dark ? "dark" : ""}`}>{text}</p>
    )
}