import { GraphQLList } from 'graphql';

import { BookingType } from './type.js';
import Booking from './model.js';

export default {
  bookings: {
    type: new GraphQLList(BookingType),
    resolve: async () => await Booking.find(),
  },
};
