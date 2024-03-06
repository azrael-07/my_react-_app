function mail() {
    window.location = "mailto:meta@customercare.com";
}

const Unavail = (props) => {
    const { className, setShowAlert, showAlert } = props
    const closeRegretMsg = () => {
        setShowAlert(!showAlert)
    }
    return (
        <div className={className}>
              <div className="close" onClick={closeRegretMsg} ><i className='bx bx-x'></i></div>
            <div className="regret-wrap">
              
                <div className="logo"><i className='bx bx-ghost bx-flashing bx-rotate-180' ></i></div>

                <div className="regret">

                    <div className="meta regTitle">Meta</div>
                    <div className="regret-info">
                        We the Meta Team Deeply Regret The Inconvenience and trying our Best to get the Product back on stock. Thank you.
                    </div>
                </div>

            </div>
            <div className="mail-wrap">
                <span className="mail-info"> For Any Assitance E_mail us </span>
                <button onClick={mail} className="buyLink mail">Send Mail</button>
            </div>
        </div>
    )

}
export default Unavail;