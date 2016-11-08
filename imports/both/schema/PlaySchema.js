export const Schema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
  },
  playerId: {
    type: String,
    label: 'playerId',
  },
  teamId: {
    type: String,
    label: 'teamId',
  },
  matchId: {
    type: String,
    label: 'matchId',
  },
  date: {
    type: Date,
    label: 'date',
  },
})
