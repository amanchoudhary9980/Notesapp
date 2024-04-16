import React, { useState } from 'react'

const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('')
    const [noteHeading, setNoteHeading] = useState('')

    const characterLimit = 200;
    const handleTextChange = (e) => {
        if(characterLimit- e.target.value.length >=0){
            setNoteText(e.target.value)
        }
    }
    const handleHeadingChange = (e) => {
        setNoteHeading(e.target.value)
    }
    const handleSaveClick = () => {
        if(noteText.trim().length > 0 && noteHeading.trim().length > 0){
            handleAddNote(noteText, noteHeading)
            setNoteHeading('')
            setNoteText('')
        }
        else{
            alert('please type the heading and some text to save as note')
        }
    }
  return (
    <div className="note new">
       
        <div className="note-heading">
            <input type="text" name="" id="" placeholder='Heading goes here' onChange={handleHeadingChange} value={noteHeading}/>
        </div>
        <textarea name="" id="" cols="10" rows="8" placeholder='Text goes here' onChange={handleTextChange} value={noteText}></textarea>
        <div className="note-footer">
            <span>{characterLimit - noteText.length} remaining</span>
            <button className="save" onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}

export default AddNote;