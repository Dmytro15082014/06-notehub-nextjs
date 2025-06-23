import { fetchNotes } from '../../lib/api';
import NotesClient from './Notes.client';

const App = async () => {
  const data = await fetchNotes('', 1);

  return (
    <>
      <NotesClient items={data} />
    </>
  );
};

export default App;
