import React from "react";
import { NoteItemArchiveButton, NoteItemMoveButton } from "./NoteItemArchiveButton";
import { NoteItemDeleteButton, NoteArchivedItemDeleteButton } from "./NoteItemDeleteButton";

function NoteItemAction({id, title, onDelete, archived, onArchivedEventHandler}) {
    return (
        <div className="note-item__action">
            <NoteItemDeleteButton id={id} title={title} onDelete={onDelete} />
            <NoteItemArchiveButton id={id} archived={archived} onArchivedEventHandler={onArchivedEventHandler} />
        </div>
    );
}

function NoteArchivedItemAction({id, title, archived, onMoveEventHandler, onDeleteNotesArchived}) {
    return (
        <div className="note-item__action">
            <NoteArchivedItemDeleteButton id={id} title={title} onDeleteNotesArchived={onDeleteNotesArchived} />
            <NoteItemMoveButton id={id} archived={archived} onMoveEventHandler={onMoveEventHandler} />
        </div>
    );
}

export { NoteItemAction, NoteArchivedItemAction };