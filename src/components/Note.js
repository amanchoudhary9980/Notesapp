// import React, { useState } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Note = ({ id, text, heading, color, handleDeleteNote }) => {
  return (
    <div className="note" style={{backgroundColor: color}}>
      <div className="note-heading">{heading}</div>
      <div className="note-text">{text}</div>
      <div className="note-footer">
        <div className="footer-trash" onClick={() => handleDeleteNote(id)}>
          <DeleteOutlineOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Note;
