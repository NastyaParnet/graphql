import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import { BookingQueries, BookingMutations } from './booking/index.js';
import { RealestateQueries, RealestateMutations } from './realestate/index.js';
import { UserQueries, UserMutations } from './user/index.js';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      ...BookingQueries,
      ...RealestateQueries,
      ...UserQueries,
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      ...BookingMutations,
      ...RealestateMutations,
      ...UserMutations,
    },
  }),
});
