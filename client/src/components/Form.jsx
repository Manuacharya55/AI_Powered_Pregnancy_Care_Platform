import React from "react";

const Form = ({ fields, handleSubmit,handleChange,data,loading }) => {
  return (
    <form onSubmit={handleSubmit}>
      {fields.map((curEle,index) => {
        return (
          <input
            type={curEle.type}
            name={curEle.name}
            placeholder={curEle.placeholder}
            onChange={handleChange}
            key={index}
            value={data[curEle?.name]}
          />
        );
      })}
      <button type="submit" disabled={loading}>{loading ? "processing" : "submit"}</button>
    </form>
  );
};

export default Form;
