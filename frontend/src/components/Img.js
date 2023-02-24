import classes from "./Img.module.css";
import img from "../assets/img/candidate-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import GetCandidateData from "../services/GetCandidateData"

function Img() {
  const candidate = GetCandidateData().candidate;
  console.log(candidate.data);
  return (
    <div  className={classes["col-lg-8"]}>
      <div className={classes["content"]}>
        <div>
          <img src={img} alt="imagen" className={classes["img-candidate"]} />
          <h4 className={classes["name-candidate"]}>{candidate.data.firstName} {candidate.data.lastName}</h4>
          <ul className={classes["info-candidate"]}>
            <li className={classes["job"]}>{candidate.data.appliedJobs}</li>
            <li>
              <span className={classes["date"]}>
                <FontAwesomeIcon
                  icon={faClock}
                  className={classes["icon-fa-clock"]}
                />
                Member Since, {candidate.data.registerAt}
              </span>
            </li>
          </ul>
        </div>
        <div class={classes["description"]}>
          <p>
            {candidate.data.description}
          </p>
        
        </div>
      </div>
    </div>
  );
}

export default Img;
