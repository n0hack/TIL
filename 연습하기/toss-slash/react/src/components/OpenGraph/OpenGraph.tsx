import { ComponentType, Fragment } from 'react';

type OpenGraphProps = {
  container?: ComponentType<any>;
  title?: string;
  description?: string;
  imageUrl?: string;
};

const OpenGraph = ({ container: Container = Fragment, title, description, imageUrl }: OpenGraphProps) => {
  return (
    <Container>
      {title !== undefined && <meta property="og:title" content={title} />}
      {description !== undefined && <meta property="og:description" content={description} />}
      {imageUrl !== undefined && <meta property="og:image" content={imageUrl} />}
    </Container>
  );
};

export default OpenGraph;
