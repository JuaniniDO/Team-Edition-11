import classes from "./Img.module.css";
import img from "../assets/img/candidate-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

function Img() {
  return (
    <div className="col-lg-8 col-md-12 col-sm-12">
      <div className={classes["content"]}>
        <div>
          <img src={img} alt="imagen" className={classes["img-candidate"]} />
          <h4 className={classes["name-candidate"]}>Wade Warren</h4>
          <ul className={classes["info-candidate"]}>
            <li className={classes["job"]}>Developer</li>
            <li>
              <span className={classes["date"]}>
                <FontAwesomeIcon
                  icon={faClock}
                  className={classes["icon-fa-clock"]}
                />
                Member Since, Aug 19, 2020
              </span>
            </li>
          </ul>
        </div>
        <div class={classes["description"]}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            debitis quisquam atque eaque nesciunt tempore ab perferendis
            voluptates, natus sunt, repellendus odit saepe dolor minima ducimus
            sint ratione, repellat impedit. Ut rerum earum saepe repellat omnis
            ducimus ipsam ipsa unde. Eius praesentium quibusdam ducimus iure
            inventore sint natus dignissimos necessitatibus autem mollitia
            placeat dolores, iusto corrupti quod doloremque similique
            repudiandae? Odio quidem expedita, laudantium minima necessitatibus
            earum velit non ipsum doloremque illo error debitis voluptates
            quisquam iusto quaerat. Dolore corporis perferendis atque quis
            aperiam nesciunt, voluptate assumenda fugit natus eaque. Cumque
            provident ullam aperiam vel quam porro voluptatem molestias eaque
            officiis quos quasi, quibusdam obcaecati! Qui asperiores aut iusto
            ratione. Quaerat voluptas quia voluptatem asperiores modi explicabo
            deserunt voluptatibus doloribus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quas
            asperiores doloribus. Natus numquam sit, eum eius quisquam autem
            placeat fugit, voluptatum voluptates reprehenderit enim, quidem
            necessitatibus ratione iusto rerum. Itaque voluptatem facere eaque
            aut! Sunt aspernatur eius aut. Totam repellat similique quia
            explicabo non consectetur at ea laborum quas. Alias quis earum
            recusandae quisquam a perspiciatis ullam optio non. Non debitis
            odit, maiores optio ducimus quasi aperiam quia minima sit
            distinctio, facilis excepturi deleniti eos cupiditate? Ad amet iusto
            deserunt architecto, reprehenderit maxime sed hic aliquid, ea
            dolorem minus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Img;
