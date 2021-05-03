import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
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
        <br></br>
        <Typography variant="h5">About</Typography>
        <Typography>
          The Women in Science, Energy, and the Environment (WISE.E) initiative
          is a program of the Center for Sustainable Communities (CSC). WISE.E
          is based in Georgia and has a national footprint of educational
          programs whose mission is to recruit, engage, and sustain women and
          girls in STEM fields. By connecting women to professional networks,
          grant opportunities, and events where they can meet like-minded
          professionals, WISE.E aims to support a historically under resourced
          population in these industries and encourage involvement.
          <br></br>
        </Typography>
        <br></br>
        <Typography variant="h5">Our WISE.E Story</Typography>
        <Typography>
          The journey began when I was in the 5th grade. I took home the
          first-place prize in a science project at school which fueled my dream
          of not only becoming a great scientist but also a great leader. I
          followed that dream into college, corporate America, and finally into
          small business and non-profit. As my interest in energy, the
          environment and science grew into science education for the next
          generation, I quickly noticed that only a few women, as well as
          minorities, existed in what I saw as a great field and opportunity.
        </Typography>
        <Typography>
          <br></br>
          Based on these observations, I recognized the need to specifically
          focus on recruiting, engaging and sustaining women and girls,
          especially those from underserved communities, in STEM-related fields.
          I immediately sought information on a variety of topics and interests
          with a focus to uplift, guide and provide opportunities and resources
          as well as to build relationships across a broad spectrum of science,
          engineering and technical backgrounds. Over time, the idea of bringing
          young women and girls together with a common interest in science grew
          into a national following of over 500 women. As a result, Women In
          Science, Engineering and Environment was born.
        </Typography>

        <Typography>
          <br></br>
          WISE.E is an information portal. Followers receive updates on grants,
          academic coursework, personal and professional development, employment
          postings for career advancement and more. Since its founding in 2013,
          WISE.E continues to execute its original mission of informing and
          equipping women and girls with opportunities to assist them in
          becoming tomorrow’s leading scientists, engineers and technologists.
        </Typography>

        <Typography>
          <br></br>
          Garry Harris, Founder
        </Typography>
        <Typography>WISE.E</Typography>
      </Container>
    </>
  );
};

export default About;
