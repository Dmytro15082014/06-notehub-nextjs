import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getNotes } from '../../lib/api';
import NotesClient from './Notes.client';

const App = () => {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: ['note'],
    queryFn: () => getNotes(),
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NotesClient />
      </HydrationBoundary>
    </>
  );
};

export default App;
