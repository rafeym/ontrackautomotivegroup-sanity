// ontrackautomotive-be/schemaTypes/car.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'car',
  title: 'Car',
  type: 'document',
  fields: [
    defineField({name: 'vin', title: 'VIN', type: 'string'}), // Vehicle Identification Number
    defineField({name: 'year', title: 'Year', type: 'number'}), // Year of Manufacture
    defineField({name: 'make', title: 'Make', type: 'string'}), // Car Manufacturer
    defineField({name: 'price', title: 'Price', type: 'number'}), // Car Price
    defineField({name: 'model', title: 'Model', type: 'string'}), // Car Model
    defineField({name: 'trim', title: 'Trim', type: 'string'}), // Car Trim Level
    defineField({name: 'bodyType', title: 'Body Type', type: 'string'}), // SUV, Sedan, etc.
    defineField({name: 'condition', title: 'Condition', type: 'string'}), // New or Used
    defineField({name: 'drivetrain', title: 'Drivetrain', type: 'string'}), // AWD, FWD, 4MATIC®
    defineField({name: 'engine', title: 'Engine', type: 'string'}), // Engine Specifications
    defineField({name: 'transmission', title: 'Transmission', type: 'string'}), // Transmission Type
    defineField({name: 'doors', title: 'Doors', type: 'number'}), // Number of Doors
    defineField({name: 'exteriorColor', title: 'Exterior Color', type: 'string'}), // Exterior Color
    defineField({name: 'interiorColor', title: 'Interior Color', type: 'string'}), // Interior Color
    defineField({name: 'mileage', title: 'Mileage', type: 'number'}), // Mileage in miles
    defineField({name: 'dealership', title: 'Dealership', type: 'string'}), // Dealership Name
    defineField({name: 'cityMpg', title: 'City MPG', type: 'number'}), // City Miles per Gallon
    defineField({name: 'highwayMpg', title: 'Highway MPG', type: 'number'}), // Highway Miles per Gallon
    defineField({name: 'fuelType', title: 'Fuel Type', type: 'string'}), // Fuel Type (e.g., Gasoline)
    defineField({name: 'address', title: 'Dealership Address', type: 'string'}), // Dealership Address
    defineField({
      name: 'carfaxUrl',
      title: 'Carfax Report URL',
      type: 'url',
      description: 'Link to the Carfax vehicle history report',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => `${doc.year}-${doc.make}-${doc.model}-${doc.vin}`,
        maxLength: 96,
      },
    }),
    defineField({
      name: 'images',
      title: 'Car Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }), // Multiple Car Images
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }), // Car Description
    defineField({
      name: 'isAvailable',
      title: 'Available for Sale',
      type: 'boolean',
    }), // Availability for Sale
  ],
})
