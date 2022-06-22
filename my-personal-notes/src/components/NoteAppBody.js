import React from "react";
import NoteInput from "./NoteInput";
import { NotesList, NotesListArchived  } from "./NotesList";

function NoteAppBody({notes, onDelete, showFormattedDate, charLimit, valueTitle, maxLength, onTitleChangeEventHandler, valueBody, onBodyChangeEventHandler, onSubmitEventHandler, query, onArchivedEventHandler, notesArchived, onDeleteNotesArchived, onMoveEventHandler}) {

    return (
        <div className="note-app__body">
            <NoteInput
                charLimit={charLimit}
                valueTitle={valueTitle}
                maxLength={maxLength}
                onTitleChangeEventHandler={onTitleChangeEventHandler}
                valueBody={valueBody}
                onBodyChangeEventHandler={onBodyChangeEventHandler}
                onSubmitEventHandler={onSubmitEventHandler}
            />
            <h2>Catatan Aktif</h2>
            <NotesList
                notes={notes}
                showFormattedDate={showFormattedDate}
                onDelete={onDelete}
                query={query}
                onArchivedEventHandler={onArchivedEventHandler}
            />
            <h2>Arsip</h2>
            <NotesListArchived
                notesArchived={notesArchived}
                showFormattedDate={showFormattedDate}
                onDeleteNotesArchived={onDeleteNotesArchived}
                query={query}
                onMoveEventHandler={onMoveEventHandler}
            />
        </div>
    );
}

export default NoteAppBody;