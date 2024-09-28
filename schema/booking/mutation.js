import { GraphQLID, GraphQLNonNull } from 'graphql';

import { BookingType } from './type.js';
import Booking from './model.js';

export default {
  bookingCreate: {
    type: BookingType,
    args: {
      realestateId: { type: new GraphQLNonNull(GraphQLID) },
      userId: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve: (parent, args) => {
      const booking = new Booking({
        realestate: args.realestateId,
        user: args.userId,
        from: new Date(),
        to: new Date(),
      });
      return booking.save();
    },
  },
  bookingDelete: {
    type: BookingType,
    args: { bookingId: { type: new GraphQLNonNull(GraphQLID) } },
    resolve: async (parent, args) => {
      const booking = await Booking.findById(args.bookingId);
      await booking.delete();
      return booking;
    },
  },
};
