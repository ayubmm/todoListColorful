export default function addNote(
  paramNote,
  paramNoteArray,
  paramsetNoteArray,
  paramGetDate,
  paramNoteColor,
  paramsetNote,
) {
  let newNotes = [...paramNoteArray];
  newNotes.unshift({
    note: paramNote,
    noteColor: paramNoteColor,
    date: paramGetDate(),
  });
  paramsetNoteArray(newNotes);
  paramsetNote('');
}
