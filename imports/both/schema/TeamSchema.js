export const Schema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
  },
  playerIds: {
    type: [String],
    label: 'playerIds',
  },
})
