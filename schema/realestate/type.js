import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
} from 'graphql';

import { UserType } from '../user/type.js';
import User from '../user/model.js';

const RealestateType = new GraphQLObjectType({
  name: 'RealEstate',
  fields: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    address: { type: new GraphQLNonNull(GraphQLString) },
    price: { type: new GraphQLNonNull(GraphQLInt) },
    owner: {
      type: new GraphQLNonNull(UserType),
      resolve: async (parent) => {
        const user = await User.findById(parent.owner);
        return user;
      },
    },
  },
});

export { RealestateType };
