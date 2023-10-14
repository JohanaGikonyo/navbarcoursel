import React, { useState } from 'react';
import Note from './Note';
import { notes as importedNotes } from '../Helpers/products';

function Contact() {
  const [notes, setNotes] = useState(importedNotes);
  const [newNoteContent, setNewNoteContent] = useState('');
  const [newNoteNumber, setNewNoteNumber] = useState('');
  
  const addNote = () => {
    const newNote = {
      id: Date.now(),
      content: newNoteContent,
      phone:newNoteNumber,
    };
    setNotes([...notes, newNote]);
    setNewNoteContent('');
    setNewNoteNumber('');
  };
  // Function to add a new note
  

  // Function to delete a note by ID
  // const deleteNote = (noteId) => {
  //   const updatedNotes = notes.filter((note) => note.id !== noteId);
  //   setNotes(updatedNotes);
  // };

  return (
    <div className='contacts'>
      <h1>Add Contacts</h1>
      <form onSubmit={(e) => {
          e.preventDefault();
          //const inputField = e.target.querySelector('input[type="text"]');
          //const newNoteContent = inputField.value;
          if (newNoteContent !== ''&& newNoteNumber !== '') {
            addNote(newNoteContent);
            inputField.value = ''; // Clear the input field
          }
        }}
        
        >
        Name<input
        type='text' maxLength={9}  value={newNoteContent} onChange={(e) => setNewNoteContent(e.target.value)} autoFocus/>
        Contact<input type='number' maxLength={10} value={newNoteNumber} 
          onChange={(e) => setNewNoteNumber(e.target.value)}/>
        <button type='submit'>Save</button>
      </form>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      
    </div>
  );
}

export default Contact;
