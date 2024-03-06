const Button = (props)=> {
const {buttonText,classText,value,click,ref} = props;
return (
    <button ref = {ref} onClick={click} value={value} className=  {classText} >{buttonText}</button>
)
}

export default Button