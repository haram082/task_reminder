// add all things to parameter 
const Button = ({color, text, textColor, onClick}) =>{
    
    return(
        <button onClick={onClick} style ={{backgroundColor: color, color: textColor}} className="btn">{text}</button>
    )
}
export default Button