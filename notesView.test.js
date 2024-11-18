/**
 * @jest-environment jsdom
 */


const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');


describe('Page view', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays 2 paragraphs', () => {
    const model = new NotesModel;
    const view = new NotesView(model);
    model.addNote("One");
    model.addNote("Two");
    view.displayNotes();
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });

  it('adds a new note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  
    const model = new NotesModel();
    const view = new NotesView(model);
  
    const input = document.querySelector('#note-input');
    input.value = 'My new amazing test note';
  
    const button = document.querySelector('#add-note-button');
    button.click();
  
    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('My new amazing test note');
  });
  it('displays correct number of notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  
    const model = new NotesModel();
    const view = new NotesView(model);
  
    const input = document.querySelector('#note-input');
    input.value = 'My new amazing test note';
    const button = document.querySelector('#add-note-button');
    button.click();
    expect(document.querySelectorAll('div.note').length).toEqual(1);

    const input2 = document.querySelector('#note-input');
    input2.value = 'My new amazing test note 2';
    button.click();
    expect(document.querySelectorAll('div.note').length).toEqual(2);
    
  });
  
});