export const Message=(props)=>{
    const myClass=`alert alert-${props.className} text-end`;
    return <h1 className={myClass}>{props.value}</h1>
}