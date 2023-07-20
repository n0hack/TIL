import Note from './Note';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { TNoteFeed } from '@gql/types';

type NoteFeedProps = {
  notes: TNoteFeed;
};

const NoteFeed = ({ notes }: NoteFeedProps) => {
  return (
    <div>
      {notes?.map((note) => (
        <NoteWrapper key={note?.id}>
          <Note note={note} />
          <Link to={`note/${note?.id}`}>Permalink</Link>
        </NoteWrapper>
      ))}
    </div>
  );
};

const NoteWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-bottom: 1px solid #f5f4f0;
`;

export default NoteFeed;
