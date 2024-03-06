import { event } from "jquery";
import { useState } from "react";
import Button from "../../atoms/Button";
import Icon from "../../atoms/Icon";

const InputArea = (props) => {
  const { seacrhEvent, setFilter } = props;
  const iconText = "bx bx-search-alt";
  return (
    <div className="input-area-wrap">
      <div className="input-area">
        <input
          type="text"
          placeholder="searchMobiles......"
          onChange={(e) => {
            seacrhEvent(e.target.value);
          }}
        />
      </div>
      <div className="input-button-icon">
        <Button classText="input-button" />
      </div>
    </div>
  );
};

export default InputArea;
