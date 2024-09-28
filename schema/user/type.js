import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

import { RealestateType } from '../realestate/type.js';
import Realestate from '../realestate/model.js';

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    ownedRealestates: {
      type: new GraphQLList(RealestateType),
      resolve: async (parent) => {
        const realestates = await Realestate.find({ owner: parent.id });
        return realestates;
      },
    },
  }),
});

export { UserType };
