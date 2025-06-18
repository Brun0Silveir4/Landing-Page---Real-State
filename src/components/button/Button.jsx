import "./Button.scss"

export default function Button({dark, text, onClick}){

    return(
        <p className={`btn ${dark ? "dark" : ""}`} onClick={onClick}>{text}</p>
    )
}