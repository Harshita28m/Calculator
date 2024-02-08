export const Button=(props)=>{
    const yourClass=`btn btn-${props.className}`;
    const clicked=()=>{
        props.fn(props.value);//child call parent logic function
}
    return <button onClick ={clicked} className={yourClass} style={buttonStyle}>{props.value}</button>
}
const buttonStyle = {
    padding: '10px',
    fontSize: '20px',
    width:'100px',
     };