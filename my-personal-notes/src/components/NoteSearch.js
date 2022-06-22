import React from "react";

function NoteSearch({onSearch, query}) {
        return (
            <div className="note-search">
                <input value={query} onChange={onSearch} type="text" placeholder="Cari catatan ..." />
            </div>
        );
    }

export default NoteSearch;