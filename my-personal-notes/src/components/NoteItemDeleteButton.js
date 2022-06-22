import React from "react";

function NoteItemDeleteButton({id, title, onDelete}) {
    return <button className="note-item__delete-button" onClick={() => {
        if(window.confirm(`Delete "${title}" ?`)) {
            onDelete(id);
        }
    }}>Delete</button>;
}

function NoteArchivedItemDeleteButton({id, title, onDeleteNotesArchived}) {
    return <button className="note-item__delete-button" onClick={() => {
        if(window.confirm(`Delete "${title}" ?`)) {
            onDeleteNotesArchived(id);
        }
    }}>Delete</button>;
}

export { NoteItemDeleteButton, NoteArchivedItemDeleteButton };