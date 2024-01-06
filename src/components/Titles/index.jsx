import './style.css'

export function Title(props){
    const {children} = props

    return (
        <h1 className="title">{children}</h1>
    )
}