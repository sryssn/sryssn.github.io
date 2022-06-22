import React from "react";
import { NoteItem, NoteArchivedItem } from "./NoteItem";

function NotesList({notes, showFormattedDate, onDelete, query, onArchivedEventHandler}) {
        if(notes.length > 0) {
            return (
                    <div className="notes-list">
                        {
                            notes.filter((note) => {
                                if(query) {
                                    return note.title.toLowerCase().includes(query.toLowerCase());
                                }
                                return true;
                            })
                            .map((note) => (<NoteItem key={note.id} id={note.id} onDelete={onDelete} showFormattedDate={showFormattedDate} onArchivedEventHandler={onArchivedEventHandler} {...note} />))
                        }
                    </div>
                    )
        } else {
            return <p class="notes-list__empty-message">Tidak ada catatan</p>
        }
}

function NotesListArchived({notesArchived, showFormattedDate, query, onMoveEventHandler, onDeleteNotesArchived}) {
    if(notesArchived.length > 0) {
        return (
                <div className="notes-list">
                    {
                        notesArchived.filter((note) => {
                            if(query) {
                                return note.title.toLowerCase().includes(query.toLowerCase());
                            }
                            return true;
                        })
                        .map((note) => (
                            <NoteArchivedItem
                                key={note.id}
                                id={note.id}
                                onDeleteNotesArchived={onDeleteNotesArchived}
                                showFormattedDate={showFormattedDate}
                                onMoveEventHandler={onMoveEventHandler}
                                {...note}
                            />))
                    }
                </div>
                )
    } else {
        return <p class="notes-list__empty-message">Tidak ada catatan</p>;
    }
}



export { NotesList, NotesListArchived };