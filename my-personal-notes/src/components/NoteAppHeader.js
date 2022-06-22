import React from "react";
import NoteSearch from "./NoteSearch";

function NoteAppHeader({onSearch, query}) {
    return (
        <div className="note-app__header">
            <h1>Notes</h1>
            <NoteSearch onSearch={onSearch} query={query} />
        </div>
    );
}

export default NoteAppHeader;