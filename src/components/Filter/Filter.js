import React from "react";
import PropTypes from "prop-types";
import s from "./Filter.module.css";

const Filter = ({ value, changeFilter }) => {
  return (
    <form>
      <label className={s.label}>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={changeFilter}
          className={s.input}
        ></input>
      </label>
    </form>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
