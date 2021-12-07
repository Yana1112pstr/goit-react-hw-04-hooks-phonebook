import React from "react";
import s from "./Section.module.css";

const Section = ({ children }) => {
  return <div className={s.section}>{children}</div>;
};

export default Section;
