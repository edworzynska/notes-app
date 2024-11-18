const Model = require('./notesModel');

describe('Model', () => {
    let notes;
    beforeAll(() => {
        notes = new Model();
    });
    it('initialises an empty array of notes', () => {
        expect(notes.getNotes().length).toEqual(0);
        expect(notes.getNotes()).toEqual([]); 
    });
    it('adds notes and returns them', () => {
        notes.addNote('Buy milk');
        notes.addNote('Feed the dog');
        expect(notes.getNotes().length).toEqual(2);
        expect(notes.getNotes()).toEqual(['Buy milk', 'Feed the dog']);
    });
    it('resets the array of notes', () => {
        expect(notes.getNotes().length).toEqual(2);
        notes.reset();
        expect(notes.getNotes().length).toEqual(0);
        expect(notes.getNotes()).toEqual([]); 
    });
})
