import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
function FeedbackCard({img,name,text,des}) {
  return (
    <div className="bg-white p-8 shadow-xl my-8 mx-2 rounded-3xl">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <img className="rounded-full h-20 w-20" src={img} alt="" />
          <div>
            <h1>{name}</h1>
            <p>{text}</p>
          </div>
        </div>
        <FontAwesomeIcon
          className="text-yellow-700 fa-xl"
          icon={faQuoteRight}
        />
      </div>
      <div className="py-8">
        <h3 className="text-lg ">{des}</h3>
      </div>
    </div>
  );
}

export default FeedbackCard;
