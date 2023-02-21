import classes from "./DetailsCandidate.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faCalendar, faHourglassHalf} from "@fortawesome/free-regular-svg-icons";
import { faCoins,faLanguage } from "@fortawesome/free-solid-svg-icons";


function DetailsCandidate() {
  return (
    <div  className={classes["col-lg-4"]}>
      <div className={classes["button-container"]}>
        <a className={classes["button-cv"]} href="cv">
          Download CV
        </a>
        <button className={classes["button-mark"]}>
          <FontAwesomeIcon icon={faBookmark}  />
        </button>
      </div>
      <div className={classes["content"]}>
        <ul className={classes["jobs-information"]}>
          <li>
          <FontAwesomeIcon icon={faCalendar} className={classes["icons-job"]} />  
          
              <h5>Email:</h5>
              <span>wade@gmail.com</span>
          
          </li>
          <li>
          <FontAwesomeIcon icon={faHourglassHalf} className={classes["icons-job"]}/>
          <h5>Bootcamp:</h5>
          
          <span>Full Stack Web Developer</span>
          </li>
          <li>
          <FontAwesomeIcon icon={faCoins} className={classes["icons-job"]}/>
             <h5>Linkedin:</h5>
          <a href="web">wwww.linkedin.com/wade</a>
          </li>
          <li>
          <FontAwesomeIcon icon={faLanguage} className={classes["icons-job"]}/>
          <h5>Language:</h5>
          <span>English, German, Spanish</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DetailsCandidate;
