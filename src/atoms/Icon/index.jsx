const Icon = (props)=> {
const {classText} = props;
console.log(classText)
return (
    <i className = {classText}></i>
)

}

export default Icon