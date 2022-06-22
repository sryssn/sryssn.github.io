import React from "react";
import NoteAppBody from "./NoteAppBody";
import NoteAppHeader from "./NoteAppHeader";
import { getInitialData, showFormattedDate } from "../utils";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            title: '',
            body: '',
            maxText: 50,
            charLimit: 50,
            query: '',
            archived: false,
            notesArchived: '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
        this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
        this.onArchivedEventHandler = this.onArchivedEventHandler.bind(this);
        this.onAddNoteArchivedHandler = this.onAddNoteArchivedHandler.bind(this);
        this.onDeleteNotesArchived = this.onDeleteNotesArchived.bind(this);
        this.onMoveEventHandler = this.onMoveEventHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes});
    }

    onDeleteNotesArchived(id) {
        const notesArchived = this.state.notesArchived.filter(note => note.id !== id);
        this.setState({notesArchived});
    }

    onAddNoteHandler({title, body}) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: +new Date(),
                        archived: false,
                    }
                ]
            }
        })
    }

    onTitleChangeEventHandler(event) {
        const max = 50;
        const titleInputUser = event.target.value.slice(0, max);
        const titleInputUserLength = titleInputUser.length;

        this.setState((prevState) => {
            return {
                ...prevState,
                title: event.target.value,
                charLimit: max - titleInputUserLength,
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                body: event.target.value,
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.onAddNoteHandler(this.state);
        this.setState((prevState) => {
            return {
                ...prevState,
                title: '',
                body: '',
                charLimit: 50,
            }
        });
    }

    onSearchEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                query: event.target.value,
            }
        })
    }

    onAddNoteArchivedHandler(noteArchived) {
        this.setState((prevState) => {
            return {
                notesArchived: [
                    ...prevState.notesArchived,
                    noteArchived,
                ]
            }
        })
    }

    onAddNoteMoveHandler(notes) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    notes,
                ]
            }
        })
    }

    onArchivedEventHandler(id) {
        const noteIndex = this.state.notes.findIndex((note) => note.id === id);
        this.state.notes[noteIndex].archived = !this.state.notes[noteIndex].archived;
        this.onAddNoteArchivedHandler(this.state.notes[noteIndex]);
        this.setState((prevState) => {
            return {
                ...prevState,
                archived: this.state.notes[noteIndex].archived,
            }
        });
        this.onDeleteHandler(id);
    }

    onMoveEventHandler(id) {
        const noteArchivedIndex = this.state.notesArchived.findIndex((note) => note.id === id);
        this.state.notesArchived[noteArchivedIndex].archived = !this.state.notesArchived[noteArchivedIndex].archived;
        this.onAddNoteMoveHandler(this.state.notesArchived[noteArchivedIndex]);
        this.setState((prevState) => {
            return {
                ...prevState,
                archived: this.state.notesArchived[noteArchivedIndex].archived,
            }
        });
        this.onDeleteNotesArchived(id);
    }

    render() {
        return (
            <>
                <NoteAppHeader 
                    onSearch={this.onSearchEventHandler}
                    query={this.state.query}
                />
                <NoteAppBody
                    notes={this.state.notes}
                    onDelete={this.onDeleteHandler}
                    showFormattedDate={showFormattedDate}
                    charLimit={this.state.charLimit}
                    valueTitle={this.state.title}
                    maxLength={this.state.maxText}
                    onTitleChangeEventHandler={this.onTitleChangeEventHandler}
                    valueBody={this.state.body}
                    onBodyChangeEventHandler={this.onBodyChangeEventHandler}
                    onSubmitEventHandler={this.onSubmitEventHandler}
                    query={this.state.query}
                    onArchivedEventHandler={this.onArchivedEventHandler}
                    notesArchived={this.state.notesArchived}
                    onDeleteNotesArchived={this.onDeleteNotesArchived}
                    onMoveEventHandler={this.onMoveEventHandler}
                />
            </>
        );
    }
}

export default NoteApp;