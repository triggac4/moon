import React from "react";

const DetailsWriteUp = ({ title, description, onBuy }) => {
  const descriptionBreaks = description.split(new RegExp("<br\s*/?>", "i"));
  return (
    <div className="flex flex-col w-full items-center text-center text-cyan-900 justify-between p-8 rounded-md bg-cyan-100">
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-2xl">{title}</h3>
        < div className="font-light text-lg">
            {descriptionBreaks.map((item, index) => (<p key={index}>{item}</p>))}
        </div>
      </div>
      <button
        className="font-bold hover:scale-110 hover:shadow-lg active:scale-100 active:shadow-none transition-all text-cyan-100 text-xl px-8 py-2 bg-cyan-900"
        onClick={onBuy}
      >
        Buy Me
      </button>
    </div>
  );
};
export default DetailsWriteUp;
