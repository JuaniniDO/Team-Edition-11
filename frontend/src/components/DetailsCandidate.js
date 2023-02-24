import classes from "./DetailsCandidate.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faCalendar,
  faHourglassHalf,
} from "@fortawesome/free-regular-svg-icons";
import { faCoins, faLanguage } from "@fortawesome/free-solid-svg-icons";
import GetCandidateData from "../services/GetCandidateData"

function DetailsCandidate() {
  const candidate = GetCandidateData().candidate;
  return (
    <div className={classes["col-lg-4"]}>
      <div className={classes["button-container"]}>
        <a className={classes["button-cv"]} target="_blank" href={candidate.data.resume}>
          Download CV
        </a>
        <button className={classes["button-mark"]}>
          <FontAwesomeIcon icon={faBookmark} />
        </button>
      </div>
      <div className={classes["content"]}>
        <ul className={classes["jobs-information"]}>
          <li>
            <FontAwesomeIcon
              icon={faCalendar}
              className={classes["icons-job"]}
            />

            <h5>Email:</h5>
            <span>{candidate.data.email}</span>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faHourglassHalf}
              className={classes["icons-job"]}
            />
            <h5>Bootcamp:</h5>
            <span>{candidate.data.bootcamp}</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faCoins} className={classes["icons-job"]} />
            <h5>Linkedin:</h5>
            <a target="_blank" href={candidate.data.socialNetworks.linkedin}>{candidate.data.socialNetworks.linkedin}</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faLanguage}
              className={classes["icons-job"]}
            />
            <h5>Language:</h5>
            <span>{candidate.data.languages}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DetailsCandidate;
