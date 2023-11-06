import React, { useState } from "react";

const Options = ({ title, name, values, handleChange, selected }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div className="flex flex-col pt-5">
      <label htmlFor="numberOfWords" className="pb-4">
        {title}
      </label>
      <select
        value={selected}
        name={name}
        onChange={(e) => {
          handleChange(e);
          setIsSelected(true);
        }}
        id="numberOfWords"
        className={`bg-dark-7 border border-white/[0.12] focus:border-purple outline-none rounded-lg py-3 pl-5 ${
          isSelected && "text-white"
        }`}
      >
        <option value="Select Option">Select option</option>
        {values.map((value, key) => (
          <option value={value} key={key}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Options;
