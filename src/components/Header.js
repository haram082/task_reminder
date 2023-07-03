import PropTypes from 'prop-types'
import Button from "./Button"


//  retrive props.title from App.Js and return its value as heading 1, also shows CSS in JS
const Header = ({title, onAdd, showAdd}) => {
  return (
    <header className="header">
        <h1 style = {{color: "blue"}}>{title}</h1>
        <Button textColor={showAdd ? "yellow": "orange"} color={showAdd ? 'red': 'blue'} text={showAdd ? 'Close' : "Add"} onClick={onAdd}/>
    </header>
  )
}

//CAN ALSO BE WRITTEN AS
// const headingStyle={color: "blue", backgroundColor: "orange"}
// const Header = ({title}) => {
//     return (
//       <header>
//           <h1 style={headingStyle}> {title}</h1>
//       </header>
//     )
//   }


// dafult prop value for header if nothing is written in app.js function
Header.defaultProps = {
    title: "Unnamed",
}

Button.defaultProps ={
    
    color: "blue",
    textColor: "purple"
}
//makes sure that title's proptype is a string
Header.propTypes = {
    title: PropTypes.string.isRequired,

}
Button.propTypes ={
    text: PropTypes.string,
    color: PropTypes.string
}
export default Header
