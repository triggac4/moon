import React from "react";
import DarkButton from "../buttons/darkButton";

const DetailsWriteUp = ({ title, description, onBuy }) => {
  const descriptionBreaks = description.split(new RegExp("<brs*/?>", "i"));
  return (
    <div className="flex flex-col w-full items-center text-center text-cyan-900 justify-between p-8 rounded-md bg-cyan-100">
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-2xl">{title}</h3>
        <div className="font-light text-lg">
          {descriptionBreaks.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
      <DarkButton onClick={onBuy}>Buy Me</DarkButton>
    </div>
  );
};
export default DetailsWriteUp;
