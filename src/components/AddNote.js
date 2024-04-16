import React, { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const [noteHeading, setNoteHeading] = useState("");
  const [color, setColor] = useState("");
  const [style, setStyle] = useState('default');
  const colors = ["#C8DCFA", "#FAC8C8", "#C8FAD0", "#FAE3C8"];
  const characterLimit = 200;
  const handleTextChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };
  const handleColor = (item) => {
    setColor(item);
    if(style !== 'active'){
        setStyle('active')
    }
    else{
        setStyle('default')
    }
  };
  const handleHeadingChange = (e) => {
    setNoteHeading(e.target.value);
  };
  const handleSaveClick = () => {
    if (noteText.trim().length > 0 && noteHeading.trim().length > 0) {
      handleAddNote(noteText, noteHeading, color);
      setNoteHeading("");
      setNoteText("");
    } else {
      alert("please type the heading and some text to save as note");
    }
  };
 
  return (
    <div className="note new">
      <div className="note-heading">
        <input
          type="text"
          name=""
          id=""
          placeholder="Heading goes here"
          onChange={handleHeadingChange}
          value={noteHeading}
        />
      </div>
      <textarea
        name=""
        id=""
        cols="10"
        rows="8"
        placeholder="Text goes here"
        onChange={handleTextChange}
        value={noteText}
      ></textarea>
      <div className="note-footer">
        <span className="note-colors">
          {colors.map((item, index) => (
            <li
              key={index}
              style={{ backgroundColor: item  }}
              onClick={()=>handleColor(item)}
              id={style}
            />
          ))}
        </span>
        <span className="note-footer-right">
          <span style={{ fontSize: "12px" }}>
            {characterLimit - noteText.length} remaining
          </span>
          <button className="save" onClick={handleSaveClick}>
            Save
          </button>
        </span>
      </div>
    </div>
  );
};

export default AddNote;
