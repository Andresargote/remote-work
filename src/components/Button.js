export default function Button({type = "button", className, children}){
    return (
        <button type={type} className={className} >
            {children}
        </button>
    )
}