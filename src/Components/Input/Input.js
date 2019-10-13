import React from "react";

const InputPage = (props) => {
  return (
    <div className="form-group">
      <label htmlFor="formGroupExampleInput">{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="form-control"
        id="formGroupExampleInput"
        onChange={props.onChange}
      />
    </div>
  );
}

export default InputPage;