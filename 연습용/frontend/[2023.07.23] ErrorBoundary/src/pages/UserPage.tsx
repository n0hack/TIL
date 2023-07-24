import ApiErrorBoundary from '@components/helper/error/ApiErrorBoundary';
import RootErrorBoundary from '@components/helper/error/RootErrorBoundary';
import PageLayout from '@components/layout/PageLayout';
import User from '@components/user/User';
import UserList from '@components/user/UserList';
import UserListGQL from '@components/user/UserListGQL';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { useParams } from 'react-router-dom';

const UserPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <PageLayout>
      {/* <ApiErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <User id={id} />
        </Suspense>
      </ApiErrorBoundary>
      <ApiErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <User id="hi" />
        </Suspense>
      </ApiErrorBoundary> */}
      <RootErrorBoundary>
        <ApiErrorBoundary>
          <UserListGQL />
        </ApiErrorBoundary>
      </RootErrorBoundary>
    </PageLayout>
  );
};

export default UserPage;
