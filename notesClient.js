
class NotesClient{
    loadNotes(callback, errCallback){
        fetch('http://localhost:3000/notes')
        .then(response => response.json())
        .then(data => {
            if (callback) callback(data);
        })
        .catch((error) => {
            console.error('Unable to load the data', error);
            if (errCallback) errCallback();
        });
    }
    createNote(newNote, callback, errCallback){
        fetch('http://localhost:3000/notes', {
            method: "POST",
            body: JSON.stringify({ content: newNote }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Note created:', data);
            if (callback) callback();
    })
        .catch((error) => {
            console.error('Error creating note:', error);
            if (errCallback) errCallback();
    });
        
    }
}


module.exports = NotesClient;