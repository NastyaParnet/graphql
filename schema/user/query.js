import { GraphQLList } from 'graphql';

import { UserType } from './type.js';
import User from './model.js';

export default {
  users: {
    type: new GraphQLList(UserType),
    resolve: async () => await User.find(),
  },
};
