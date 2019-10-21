import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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
  page: Maybe<Scalars['Int']>,
  size: Maybe<Scalars['Int']>
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
  itemId: Scalars['ID'],
};

export type GQLPage = {
  size: Scalars['Int'],
  number: Scalars['Int'],
  totalPages: Scalars['Int'],
  totalElements: Scalars['Int'],
};

export type GQLQuery = {
  __typename?: 'Query',
  item: Maybe<GQLItem>,
  items: GQLItemPage,
};


export type GQLQueryItemArgs = {
  id: Scalars['Int']
};


export type GQLQueryItemsArgs = {
  page: Scalars['Int'],
  size: Scalars['Int']
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
  id: Scalars['ID'],
  name: Scalars['String'],
  email: Scalars['String'],
  image: Scalars['String'],
};
type GQLPageFragment_ReviewPage_Fragment = (
  { __typename?: 'ReviewPage' }
  & Pick<GQLReviewPage, 'size' | 'number' | 'totalPages' | 'totalElements'>
);

type GQLPageFragment_ItemPage_Fragment = (
  { __typename?: 'ItemPage' }
  & Pick<GQLItemPage, 'size' | 'number' | 'totalPages' | 'totalElements'>
);

export type GQLPageFragmentFragment = GQLPageFragment_ReviewPage_Fragment | GQLPageFragment_ItemPage_Fragment;

export type GQLReviewFragmentFragment = (
  { __typename?: 'Review' }
  & Pick<GQLReview, 'id' | 'description' | 'rating'>
  & { author: (
    { __typename?: 'User' }
    & Pick<GQLUser, 'id' | 'name' | 'image'>
  ) }
);

export type GQLItemDetailsQueryVariables = {
  id: Scalars['Int']
};


export type GQLItemDetailsQuery = (
  { __typename?: 'Query' }
  & { item: Maybe<(
    { __typename?: 'Item' }
    & Pick<GQLItem, 'id' | 'name' | 'description' | 'image' | 'averageRating'>
    & { seller: (
      { __typename?: 'User' }
      & Pick<GQLUser, 'id' | 'name'>
    ) }
  )> }
);

export type GQLPostReviewMutationVariables = {
  itemId: Scalars['ID'],
  description: Scalars['String'],
  rating: Scalars['Float']
};


export type GQLPostReviewMutation = (
  { __typename?: 'Mutation' }
  & { postReview: (
    { __typename?: 'Review' }
    & GQLReviewFragmentFragment
  ) }
);

export type GQLItemReviewsQueryVariables = {
  id: Scalars['Int'],
  page: Scalars['Int'],
  size: Scalars['Int']
};


export type GQLItemReviewsQuery = (
  { __typename?: 'Query' }
  & { item: Maybe<(
    { __typename?: 'Item' }
    & Pick<GQLItem, 'id'>
    & { reviews: (
      { __typename?: 'ReviewPage' }
      & { content: Array<(
        { __typename?: 'Review' }
        & Pick<GQLReview, 'id' | 'description' | 'rating'>
        & { author: (
          { __typename?: 'User' }
          & Pick<GQLUser, 'id' | 'image' | 'name'>
        ) }
      )> }
      & GQLPageFragment_ReviewPage_Fragment
    ) }
  )> }
);
export const PageFragmentFragmentDoc = gql`
    fragment PageFragment on Page {
  size
  number
  totalPages
  totalElements
}
    `;
export const ReviewFragmentFragmentDoc = gql`
    fragment ReviewFragment on Review {
  id
  description
  rating
  author {
    id
    name
    image
  }
}
    `;
export const ItemDetailsDocument = gql`
    query ItemDetails($id: Int!) {
  item(id: $id) {
    id
    name
    description
    image
    seller {
      id
      name
    }
    averageRating
  }
}
    `;
export type ItemDetailsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GQLItemDetailsQuery, GQLItemDetailsQueryVariables>, 'query'> & ({ variables: GQLItemDetailsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ItemDetailsComponent = (props: ItemDetailsComponentProps) => (
      <ApolloReactComponents.Query<GQLItemDetailsQuery, GQLItemDetailsQueryVariables> query={ItemDetailsDocument} {...props} />
    );
    

/**
 * __useItemDetailsQuery__
 *
 * To run a query within a React component, call `useItemDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useItemDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItemDetailsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useItemDetailsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GQLItemDetailsQuery, GQLItemDetailsQueryVariables>) {
        return ApolloReactHooks.useQuery<GQLItemDetailsQuery, GQLItemDetailsQueryVariables>(ItemDetailsDocument, baseOptions);
      }
export function useItemDetailsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GQLItemDetailsQuery, GQLItemDetailsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GQLItemDetailsQuery, GQLItemDetailsQueryVariables>(ItemDetailsDocument, baseOptions);
        }
export type ItemDetailsQueryHookResult = ReturnType<typeof useItemDetailsQuery>;
export type ItemDetailsLazyQueryHookResult = ReturnType<typeof useItemDetailsLazyQuery>;
export type ItemDetailsQueryResult = ApolloReactCommon.QueryResult<GQLItemDetailsQuery, GQLItemDetailsQueryVariables>;
export const PostReviewDocument = gql`
    mutation PostReview($itemId: ID!, $description: String!, $rating: Float!) {
  postReview(review: {itemId: $itemId, description: $description, rating: $rating}) {
    ...ReviewFragment
  }
}
    ${ReviewFragmentFragmentDoc}`;
export type GQLPostReviewMutationFn = ApolloReactCommon.MutationFunction<GQLPostReviewMutation, GQLPostReviewMutationVariables>;
export type PostReviewComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<GQLPostReviewMutation, GQLPostReviewMutationVariables>, 'mutation'>;

    export const PostReviewComponent = (props: PostReviewComponentProps) => (
      <ApolloReactComponents.Mutation<GQLPostReviewMutation, GQLPostReviewMutationVariables> mutation={PostReviewDocument} {...props} />
    );
    

/**
 * __usePostReviewMutation__
 *
 * To run a mutation, you first call `usePostReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postReviewMutation, { data, loading, error }] = usePostReviewMutation({
 *   variables: {
 *      itemId: // value for 'itemId'
 *      description: // value for 'description'
 *      rating: // value for 'rating'
 *   },
 * });
 */
export function usePostReviewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<GQLPostReviewMutation, GQLPostReviewMutationVariables>) {
        return ApolloReactHooks.useMutation<GQLPostReviewMutation, GQLPostReviewMutationVariables>(PostReviewDocument, baseOptions);
      }
export type PostReviewMutationHookResult = ReturnType<typeof usePostReviewMutation>;
export type PostReviewMutationResult = ApolloReactCommon.MutationResult<GQLPostReviewMutation>;
export type PostReviewMutationOptions = ApolloReactCommon.BaseMutationOptions<GQLPostReviewMutation, GQLPostReviewMutationVariables>;
export const ItemReviewsDocument = gql`
    query ItemReviews($id: Int!, $page: Int!, $size: Int!) {
  item(id: $id) {
    id
    reviews(page: $page, size: $size) {
      ...PageFragment
      content {
        id
        description
        rating
        author {
          id
          image
          name
        }
      }
    }
  }
}
    ${PageFragmentFragmentDoc}`;
export type ItemReviewsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GQLItemReviewsQuery, GQLItemReviewsQueryVariables>, 'query'> & ({ variables: GQLItemReviewsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ItemReviewsComponent = (props: ItemReviewsComponentProps) => (
      <ApolloReactComponents.Query<GQLItemReviewsQuery, GQLItemReviewsQueryVariables> query={ItemReviewsDocument} {...props} />
    );
    

/**
 * __useItemReviewsQuery__
 *
 * To run a query within a React component, call `useItemReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useItemReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItemReviewsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useItemReviewsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GQLItemReviewsQuery, GQLItemReviewsQueryVariables>) {
        return ApolloReactHooks.useQuery<GQLItemReviewsQuery, GQLItemReviewsQueryVariables>(ItemReviewsDocument, baseOptions);
      }
export function useItemReviewsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GQLItemReviewsQuery, GQLItemReviewsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GQLItemReviewsQuery, GQLItemReviewsQueryVariables>(ItemReviewsDocument, baseOptions);
        }
export type ItemReviewsQueryHookResult = ReturnType<typeof useItemReviewsQuery>;
export type ItemReviewsLazyQueryHookResult = ReturnType<typeof useItemReviewsLazyQuery>;
export type ItemReviewsQueryResult = ApolloReactCommon.QueryResult<GQLItemReviewsQuery, GQLItemReviewsQueryVariables>;