const NotesClient = require('./notesClient');

require('jest-fetch-mock').enableMocks()

describe('Client class', () => {
    it('calls fetch and loads data', (done) => {
        const client = new NotesClient();
        fetch.mockResponseOnce(JSON.stringify({
            note: "Some value",
            id: 123
          }));

        client.loadNotes((returnedDataFromApi) => {
            expect(returnedDataFromApi.note).toBe("Some value");
            expect(returnedDataFromApi.id).toBe(123);
            done();
        });
    });
 });
      