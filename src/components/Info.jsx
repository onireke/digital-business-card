import reactLogo from "../images/amosa.png"
import mail from "../images/mail.svg"


function Info(){
    return(
        <div className="info-div">
            <img src={reactLogo} alt="digital-rep" className="digital-rep" />
            <h2 className="owner">
                Amosa Abdulfatah
            </h2>
            <p className="job">Frontend Developer</p>
            <p className="state">Kwara State</p>
            <div className="mail-div">
               <a href="mailto:amosaabdulfatah@gamil.com">
                <button><img src={mail} alt="" className="email"/>Email</button>
               </a>
            </div>
            
        </div>
    )
}

export default Info