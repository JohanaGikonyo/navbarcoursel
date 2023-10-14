const Note=({note})=>{
    
    return(
      <div className="content">
<li>Name: {note.content } Phone: {note.phone}</li>
      </div>
    )

  }
  export default Note