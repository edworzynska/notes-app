class NotesModel{
    
    constructor(notes){
        this.notes = [];
    }
    getNotes(){
        return this.notes;
    }
    setNotes(notes){
        this.notes = notes;
    }
    addNote(contents){
        this.notes.push(contents);
    }
    reset(){
        this.notes.length = 0;
    }
}

module.exports = NotesModel;