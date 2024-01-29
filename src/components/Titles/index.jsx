import './style.css'

export function Title(props){
    const {children} = props

    return (
        <h1 className="title">{children}</h1>
    )
}

export function SubTitle(props){
    const {children} = props

    return (
        <h2 className="subtitle">{children}</h2>
    )
}