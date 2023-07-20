import { TNote } from '@gql/types';
import dayjs from 'dayjs';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { styled } from 'styled-components';

type NoteProps = {
  note: TNote;
};

const Note = ({ note }: NoteProps) => {
  return (
    <StyledNote>
      <MetaData>
        <MetaInfo>
          <img src={note?.author.avatar} alt={`${note?.author.username} avatar`} height="50px" />
        </MetaInfo>
        <MetaInfo>
          <em>by</em> {note?.author.username} <br />
          {dayjs(note?.createdAt).format('MMM D YYYY')}
        </MetaInfo>
        <UserActions>
          <em>Favorites:</em> {note?.favoriteCount}
        </UserActions>
      </MetaData>
      <ReactMarkdown children={note?.content ?? ''} />
    </StyledNote>
  );
};

// Keep notes from extending wider than 800px
const StyledNote = styled.article`
  max-width: 800px;
  margin: 0 auto;
`;

// Style the note meta data
const MetaData = styled.div`
  @media (min-width: 500px) {
    display: flex;
    align-items: top;
  }
`;

// add some space between the avatar and meta info
const MetaInfo = styled.div`
  padding-right: 1em;
`;

// align 'Favorites' to the right on large screens
const UserActions = styled.div`
  margin-left: auto;
`;

export default Note;
