import React from "react";

function NoteInput({
    charLimit, valueTitle, maxLength, onTitleChangeEventHandler, valueBody, onBodyChangeEventHandler, onSubmitEventHandler
}) {
        return (
            <div className="note-input">
                <h2>Buat Catatan</h2>
                <form onSubmit={onSubmitEventHandler}>
                    <p className="note-input__title__char-limit">Sisa karakter : {charLimit}</p>
                    <input className="note-input__title" value={valueTitle} maxLength={maxLength} onChange={onTitleChangeEventHandler} type='text' placeholder="Ini adalah judul ..." />
                    <textarea className="note-input__body" value={valueBody} onChange={onBodyChangeEventHandler} type="text" placeholder="Tuliskan catatanmu di sini ..."></textarea>
                    <button type="submit">Buat</button>
                </form>
            </div>
        );
}

export default NoteInput;