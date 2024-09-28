import { GraphQLList } from 'graphql';

import { RealestateType } from './type.js';
import Realestate from './model.js';

export default {
  realestates: {
    type: new GraphQLList(RealestateType),
    resolve: async () => await Realestate.find(),
  },
};
