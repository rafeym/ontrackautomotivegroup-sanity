// schemas/booking.ts
export default {
  name: 'booking',
  title: 'Booking',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'timeSlot',
      title: 'Time Slot',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Appointment Date',
      type: 'date',
    },
    {
      name: 'car',
      title: 'Car',
      type: 'object',
      fields: [
        {name: 'vin', title: 'VIN', type: 'string'},
        {name: 'make', title: 'Make', type: 'string'},
        {name: 'model', title: 'Model', type: 'string'},
        {name: 'year', title: 'Year', type: 'number'},
        {name: 'mileage', title: 'Mileage', type: 'number'},
        {name: 'price', title: 'Price', type: 'number'},
      ],
    },
  ],
}
