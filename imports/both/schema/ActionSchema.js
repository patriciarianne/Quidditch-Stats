export const Schema = new SimpleSchema({
  name: {
    type: String,
    label: 'name',
    min: 1,
  },
  points: {
    type: Number,
    label: 'Points',
  },
  position: {
    type: String,
    label: 'Position',
  },
})
