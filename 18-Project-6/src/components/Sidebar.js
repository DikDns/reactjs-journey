import React from "react";

export default function Sidebar(props) {
  function getTitle(note, index) {
    const lines = note.body.split("\n");
    const regex = /[0-9a-zA-Z]/g;
    let text = "";

    for (let i = 0; i < lines.length; i++) {
      if (regex.test(lines[i])) {
        for (let k = 0; k < lines[i].length; k++) {
          if (
            lines[i][k] !== "#" &&
            lines[i][k] !== "~" &&
            lines[i][k] !== "*"
          ) {
            text += lines[i][k];
          }
        }
        return text;
      }
    }

    return `My Notes`;
  }

  const noteElements = props.notes.map((note, index) => (
    <div key={note.id} id={note.id}>
      <div
        className={`title ${
          note.id === props.currentNote.id ? "selected-note" : ""
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        <h4 className="text-snippet">{getTitle(note, index)}</h4>
        <button
          className="delete-btn"
          onClick={(event) => props.deleteNote(event, note.id)}
        >
          <i className="gg-trash trash-icon"></i>
        </button>
      </div>
    </div>
  ));

  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3>Notes</h3>
        <button className="new-note" onClick={props.newNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}
