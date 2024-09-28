import { GraphQLNonNull, GraphQLString } from 'graphql';

import { UserType } from './type.js';
import User from './model.js';

export default {
  userCreate: {
    type: UserType,
    args: {
      email: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: (parent, args) => {
      const user = new User({
        email: args.email,
        password: args.password,
      });
      return user.save();
    },
  },
};
