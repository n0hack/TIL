import { useQuery } from '@apollo/client';
import Note from '@components/Note';
import { NoteFeed, ReadNoteDocument } from '@gql/graphql';
import { useParams } from 'react-router-dom';

const NotePage = () => {
  const params = useParams<{ id: string }>();
  const { data, loading, error } = useQuery(ReadNoteDocument, { variables: { readNoteId: params.id! } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return <Note note={data?.readNote as NoteFeed['notes'][number]} />;
};

export default NotePage;
