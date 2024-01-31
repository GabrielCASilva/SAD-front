import './style.css'

export function Title(props){
    const {children} = props

    return (
        <h1 className="title f-size-24">{children}</h1>
    )
}

export function SubTitle(props){
    const {children} = props

    return (
        <h2 className="subtitle f-size-20">{children}</h2>
    )
}