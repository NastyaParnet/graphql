import { GraphQLObjectType, GraphQLNonNull } from 'graphql';

import { RealestateType } from '../realestate/type';
import { UserType } from '../user/type.js';
import Realestate from '../realestate/model.js';
import User from '../user/model.js';

const BookingType = new GraphQLObjectType({
  name: 'Booking',
  fields: () => ({
    realestate: {
      type: new GraphQLNonNull(RealestateType),
      resolve: async (parent) => {
        const realestate = await Realestate.findById(parent.realestate);
        return realestate;
      },
    },
    user: {
      type: new GraphQLNonNull(UserType),
      resolve: async (parent) => {
        const user = await User.findById(parent.user);
        return user;
      },
    },
    from: { type: new GraphQLNonNull(Date) },
    to: { type: new GraphQLNonNull(Date) },
  }),
});

export { BookingType };
