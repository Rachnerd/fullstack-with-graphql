import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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
  userId: Scalars['ID'],
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
  item?: Maybe<GQLItem>,
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
  userId: Scalars['ID'],
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


export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type GQLResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Item: ResolverTypeWrapper<GQLItem>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  User: ResolverTypeWrapper<GQLUser>,
  ReviewPage: ResolverTypeWrapper<GQLReviewPage>,
  Page: ResolverTypeWrapper<GQLPage>,
  Review: ResolverTypeWrapper<GQLReview>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  ItemPage: ResolverTypeWrapper<GQLItemPage>,
  Mutation: ResolverTypeWrapper<{}>,
  NewReview: GQLNewReview,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type GQLResolversParentTypes = {
  Query: {},
  Int: Scalars['Int'],
  Item: GQLItem,
  ID: Scalars['ID'],
  String: Scalars['String'],
  User: GQLUser,
  ReviewPage: GQLReviewPage,
  Page: GQLPage,
  Review: GQLReview,
  Float: Scalars['Float'],
  ItemPage: GQLItemPage,
  Mutation: {},
  NewReview: GQLNewReview,
  Boolean: Scalars['Boolean'],
};

export type GQLItemResolvers<ContextType = any, ParentType extends GQLResolversParentTypes['Item'] = GQLResolversParentTypes['Item']> = {
  id?: Resolver<GQLResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<GQLResolversTypes['String'], ParentType, ContextType>,
  description?: Resolver<GQLResolversTypes['String'], ParentType, ContextType>,
  image?: Resolver<GQLResolversTypes['String'], ParentType, ContextType>,
  seller?: Resolver<GQLResolversTypes['User'], ParentType, ContextType>,
  userId?: Resolver<GQLResolversTypes['ID'], ParentType, ContextType>,
  reviews?: Resolver<GQLResolversTypes['ReviewPage'], ParentType, ContextType, GQLItemReviewsArgs>,
  averageRating?: Resolver<GQLResolversTypes['Float'], ParentType, ContextType>,
};

export type GQLItemPageResolvers<ContextType = any, ParentType extends GQLResolversParentTypes['ItemPage'] = GQLResolversParentTypes['ItemPage']> = {
  content?: Resolver<Array<GQLResolversTypes['Item']>, ParentType, ContextType>,
  size?: Resolver<GQLResolversTypes['Int'], ParentType, ContextType>,
  number?: Resolver<GQLResolversTypes['Int'], ParentType, ContextType>,
  totalPages?: Resolver<GQLResolversTypes['Int'], ParentType, ContextType>,
  totalElements?: Resolver<GQLResolversTypes['Int'], ParentType, ContextType>,
};

export type GQLMutationResolvers<ContextType = any, ParentType extends GQLResolversParentTypes['Mutation'] = GQLResolversParentTypes['Mutation']> = {
  postReview?: Resolver<GQLResolversTypes['Review'], ParentType, ContextType, RequireFields<GQLMutationPostReviewArgs, 'review'>>,
};

export type GQLPageResolvers<ContextType = any, ParentType extends GQLResolversParentTypes['Page'] = GQLResolversParentTypes['Page']> = {
  __resolveType: TypeResolveFn<'ReviewPage' | 'ItemPage', ParentType, ContextType>,
  size?: Resolver<GQLResolversTypes['Int'], ParentType, ContextType>,
  number?: Resolver<GQLResolversTypes['Int'], ParentType, ContextType>,
  totalPages?: Resolver<GQLResolversTypes['Int'], ParentType, ContextType>,
  totalElements?: Resolver<GQLResolversTypes['Int'], ParentType, ContextType>,
};

export type GQLQueryResolvers<ContextType = any, ParentType extends GQLResolversParentTypes['Query'] = GQLResolversParentTypes['Query']> = {
  item?: Resolver<Maybe<GQLResolversTypes['Item']>, ParentType, ContextType, RequireFields<GQLQueryItemArgs, 'id'>>,
  items?: Resolver<GQLResolversTypes['ItemPage'], ParentType, ContextType, RequireFields<GQLQueryItemsArgs, 'page' | 'size'>>,
};

export type GQLReviewResolvers<ContextType = any, ParentType extends GQLResolversParentTypes['Review'] = GQLResolversParentTypes['Review']> = {
  id?: Resolver<GQLResolversTypes['ID'], ParentType, ContextType>,
  description?: Resolver<GQLResolversTypes['String'], ParentType, ContextType>,
  rating?: Resolver<GQLResolversTypes['Float'], ParentType, ContextType>,
  userId?: Resolver<GQLResolversTypes['ID'], ParentType, ContextType>,
  author?: Resolver<GQLResolversTypes['User'], ParentType, ContextType>,
};

export type GQLReviewPageResolvers<ContextType = any, ParentType extends GQLResolversParentTypes['ReviewPage'] = GQLResolversParentTypes['ReviewPage']> = {
  content?: Resolver<Array<GQLResolversTypes['Review']>, ParentType, ContextType>,
  size?: Resolver<GQLResolversTypes['Int'], ParentType, ContextType>,
  totalPages?: Resolver<GQLResolversTypes['Int'], ParentType, ContextType>,
  totalElements?: Resolver<GQLResolversTypes['Int'], ParentType, ContextType>,
  number?: Resolver<GQLResolversTypes['Int'], ParentType, ContextType>,
};

export type GQLUserResolvers<ContextType = any, ParentType extends GQLResolversParentTypes['User'] = GQLResolversParentTypes['User']> = {
  id?: Resolver<GQLResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<GQLResolversTypes['String'], ParentType, ContextType>,
  email?: Resolver<GQLResolversTypes['String'], ParentType, ContextType>,
  image?: Resolver<GQLResolversTypes['String'], ParentType, ContextType>,
};

export type GQLResolvers<ContextType = any> = {
  Item?: GQLItemResolvers<ContextType>,
  ItemPage?: GQLItemPageResolvers<ContextType>,
  Mutation?: GQLMutationResolvers<ContextType>,
  Page?: GQLPageResolvers,
  Query?: GQLQueryResolvers<ContextType>,
  Review?: GQLReviewResolvers<ContextType>,
  ReviewPage?: GQLReviewPageResolvers<ContextType>,
  User?: GQLUserResolvers<ContextType>,
};


