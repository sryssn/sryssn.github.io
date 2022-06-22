import React from "react";
import { NoteItemAction, NoteArchivedItemAction } from "./NoteItemAction";
import NoteItemContent from "./NoteItemContent";

function NoteItem({title, showFormattedDate, createdAt, body, id, onDelete, archived, onArchivedEventHandler}) {
    return (
        <div className="note-item">
            <NoteItemContent
                title={title}
                showFormattedDate={showFormattedDate}
                createdAt={createdAt}
                body={body}
            />
            <NoteItemAction
                id={id}
                title={title}
                onDelete={onDelete}
                archived={archived}
                onArchivedEventHandler={onArchivedEventHandler}
            />
        </div>
    );
}

function NoteArchivedItem({title, showFormattedDate, createdAt, body, id, archived, onMoveEventHandler, onDeleteNotesArchived}) {
    return (
        <div className="note-item">
            <NoteItemContent
                title={title}
                showFormattedDate={showFormattedDate}
                createdAt={createdAt}
                body={body}
            />
            <NoteArchivedItemAction
                id={id}
                title={title}
                onDeleteNotesArchived={onDeleteNotesArchived}
                archived={archived}
                onMoveEventHandler={onMoveEventHandler}
            />
        </div>
    );
}

export { NoteItem, NoteArchivedItem };