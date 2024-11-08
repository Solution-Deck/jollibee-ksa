import React from "react";
import { Link } from "react-scroll";

const LinkedButton = ({ label, classname, source }) => {
  return (
    <Link to={source} smooth={true} duration={900}>
      <button className={classname}>{label}</button>
    </Link>
  );
};

export default LinkedButton;
