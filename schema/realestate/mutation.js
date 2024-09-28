import { GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql';

import { RealestateType } from './type.js';
import Realestate from './model.js';

export default {
  bookingCreate: {
    type: RealestateType,
    args: {
      address: { type: new GraphQLNonNull(GraphQLString) },
      price: { type: new GraphQLNonNull(GraphQLInt) },
      title: { type: new GraphQLNonNull(GraphQLString) },
      owner: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve: (parent, args) => {
      const realestate = new Realestate({
        address: args.address,
        price: args.price,
        title: args.title,
        owner: args.owner,
      });
      return realestate.save();
    },
  },
};
