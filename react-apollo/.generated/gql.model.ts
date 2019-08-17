export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type GQLItem = {
  __typename?: 'Item',
  id: Scalars['ID'],
  name: Scalars['String'],
  description: Scalars['String'],
  image: Scalars['String'],
  seller: GQLUser,
  reviews: GQLReviewPage,
  averageRating: Scalars['Float'],
};


export type GQLItemReviewsArgs = {
  page?: Maybe<Scalars['Int']>,
  size?: Maybe<Scalars['Int']>
};

export type GQLItemPage = GQLPage & {
  __typename?: 'ItemPage',
  content: Array<GQLItem>,
  size: Scalars['Int'],
  number: Scalars['Int'],
  totalPages: Scalars['Int'],
  totalElements: Scalars['Int'],
};

export type GQLMutation = {
  __typename?: 'Mutation',
  postReview: GQLReview,
};


export type GQLMutationPostReviewArgs = {
  review: GQLNewReview
};

export type GQLNewReview = {
  description: Scalars['String'],
  rating: Scalars['Float'],
  itemId: Scalars['String'],
};

export type GQLPage = {
  size: Scalars['Int'],
  number: Scalars['Int'],
  totalPages: Scalars['Int'],
  totalElements: Scalars['Int'],
};

export type GQLPaging = {
  size?: Maybe<Scalars['Int']>,
  page?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
};

export type GQLQuery = {
  __typename?: 'Query',
  item?: Maybe<GQLItem>,
  items: GQLItemPage,
};


export type GQLQueryItemArgs = {
  id: Scalars['Int']
};


export type GQLQueryItemsArgs = {
  paging: GQLPaging
};

export type GQLReview = {
  __typename?: 'Review',
  id: Scalars['ID'],
  description: Scalars['String'],
  rating: Scalars['Float'],
  author: GQLUser,
};

export type GQLReviewPage = GQLPage & {
  __typename?: 'ReviewPage',
  content: Array<GQLReview>,
  size: Scalars['Int'],
  totalPages: Scalars['Int'],
  totalElements: Scalars['Int'],
  number: Scalars['Int'],
};

export type GQLUser = {
  __typename?: 'User',
  name: Scalars['String'],
  email: Scalars['String'],
  image: Scalars['String'],
};
