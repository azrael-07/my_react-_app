const Text = (props) =>{
    const {textInput,type ,className,spanTextA,spanTextB ,style , icon,role} = props;
    
    switch (type){
        case 'h1':
            return <h1 role={role} style ={style} className={className}><span>{spanTextB}</span>{icon}{textInput}<span>{spanTextA}</span> </h1>
        case 'h2':
            return <h2  role={role} style ={style}  className={className}><span>{spanTextB}</span>{textInput}<span>{spanTextA}</span></h2>
        default:
            return <p  role={role}  style ={style}  className={className}><span>{spanTextB}</span>{textInput}<span>{spanTextA}</span></p>

    }
   
 }
export default Text