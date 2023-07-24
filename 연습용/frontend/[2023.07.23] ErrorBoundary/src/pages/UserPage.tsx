import ApiErrorBoundary from '@components/helper/error/ApiErrorBoundary';
import PageLayout from '@components/layout/PageLayout';
import User from '@components/user/User';
import UserList from '@components/user/UserList';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { useParams } from 'react-router-dom';

const UserPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <PageLayout>
      <ApiErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <User id={id} />
        </Suspense>
      </ApiErrorBoundary>
      <ApiErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <User id="hi" />
        </Suspense>
      </ApiErrorBoundary>
      <UserList />
    </PageLayout>
  );
};

export default UserPage;
