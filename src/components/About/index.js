import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import styles from "./styles.module.css";

const About = () => {

  return (
    <>
      <div className={styles["banner-img"]}>
        <br></br>
        <br></br>
        <br></br>

        <div className={styles["header-div-1"]}>
          <h1 className={styles["header-text"]}>Recruit. &nbsp; </h1>
        </div>

        <div className={styles["header-div-2"]}>
          <h1 className={styles["header-text"]}>Engage. &nbsp; </h1>
        </div>

        <div className={styles["header-div-3"]}>
          <h1 className={styles["header-text"]}>Sustain. &nbsp; </h1>
        </div>
      </div>

      <Container>

        <h1>About</h1>
        <p>
          The Women in Science, Energy, and the Environment (WISE.E) initiative
          is a program of the Center for Sustainable Communities (CSC). WISE.E
          is based in Georgia and has a national footprint of educational
          programs whose mission is to recruit, engage, and sustain women and
          girls in STEM fields. By connecting women to professional networks,
          grant opportunities, and events where they can meet like-minded
          professionals, WISE.E aims to support a historically under resourced
          population in these industries and encourage involvement.
        </p>
      </Container>
    </>
  );
};

export default About;
