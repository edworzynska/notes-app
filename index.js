const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const NotesClient = require('./notesClient');

const client = new NotesClient();
let notes = new NotesModel();
let view = new NotesView(notes, client);

client.loadNotes(view.displayNotes(), () => {
    view.displayError();
});

