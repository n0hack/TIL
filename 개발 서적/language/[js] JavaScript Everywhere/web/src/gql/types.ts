import { ReadNoteFeedQuery } from './graphql';

export type TNoteFeed = NonNullable<ReadNoteFeedQuery['readNoteFeed']>['notes'];

export type TNote = TNoteFeed[number];
