export const Schema = new SimpleSchema({
  position: {
    type: String,
    label: 'Position',
    min: 1,
  },
  playerNumber: {
    type: Number,
    label: 'Player Number',
  },
  teamId: {
    type: String,
    label: 'Team ID',
  },
})
