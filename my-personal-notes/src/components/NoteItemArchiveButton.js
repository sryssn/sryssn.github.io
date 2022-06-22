import React from "react";

function NoteItemArchiveButton({id, archived, onArchivedEventHandler}) {
    return (
        <>
            <button className="note-item__archive-button" onClick={() => {onArchivedEventHandler(id)}}>{archived === false ? 'Arsipkan' : 'Pindahkan'}</button>
        </>
    );
}

function NoteItemMoveButton({id, archived, onMoveEventHandler}) {
    return (
        <>
            <button className="note-item__archive-button" onClick={() => {onMoveEventHandler(id)}}>{archived === true ? 'Pindahkan' : 'Arsipkan'}</button>
        </>
    );
}

export { NoteItemArchiveButton, NoteItemMoveButton };