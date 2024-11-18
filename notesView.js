const Model = require('./notesModel');
const Client = require('./notesClient');

class NotesView {
    constructor(model, client){
        this.mainContainerEl = document.querySelector('#main-container');
        this.buttonEl = document.querySelector('#add-note-button');
        this.model = model;
        this.client = client;

        this.buttonEl.addEventListener('click', () => {
            const newNote = document.querySelector('#note-input').value;
            console.log('New note input:', newNote);
            this.addNewNote(newNote);
            
         });
    }

    addNewNote(newNote){

        this.model.addNote(newNote);
        this.client.createNote(newNote, () => {
            document.querySelector('#note-input').value = "";
            this.displayNotes();
        }, () => {
            this.displayError();
        })
    }
    
    displayNotes(){

        this.resetNotes();

        this.client.loadNotes((notes) => {
            notes.forEach(note => {
                const noteEl = document.createElement('div');
                noteEl.textContent = note;
                noteEl.className = 'note';
                this.mainContainerEl.append(noteEl);
            });
        });
    }
    resetNotes(){
        
        this.mainContainerEl.querySelectorAll('div.note').forEach(
            message => message.remove()
          );
    }
    displayError(){
        const errorEl = document.createElement('div');
        errorEl.textContent = "Something went wrong!";
        errorEl.className = 'err';
        this.mainContainerEl.append(errorEl);
    }

}

module.exports = NotesView;