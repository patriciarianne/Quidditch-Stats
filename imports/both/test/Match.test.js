import Match from '../models/Match'
import Play from '../models/Play'
import Player from '../models/Player'
import { expect } from 'chai'

describe('Match Class', () => {
  const match = new Match({
    plays: [],
    teams: [],
    snitchCaught: null,
    snitchAppeared: null,
  })

  const player1 = new Player({
    name: 'Rose Tyler',
    position: 'chaser',
    number: '7',
    goalsMade: 0,
    goalsMissed: 0,
    goalsBlocked: 0,
    hasSnitchCaught: false,
  })

  const player2 = new Player({
    name: 'Clara Oswald',
    position: 'keeper',
    number: '12',
    goalsMade: 0,
    goalsMissed: 0,
    goalsBlocked: 0,
    hasSnitchCaught: false,
  })

  const player3 = new Player({
    name: 'Martha Jones',
    position: 'seeker',
    number: '5',
    goalsMade: 0,
    goalsMissed: 0,
    goalsBlocked: 0,
    hasSnitchCaught: false,
  })

  const play = new Play({
    name: 'play',
    playerId: player1._id,
    date: new Date(Date.now()),
  })

  describe('addPlay()', () => {
    it('should add a new play', () => {
      match.addPlay('play', player1)
      match.plays.forEach((play) => {

      })
      expect(match.plays).to.include(play)
    })
  })

  describe('goalMade()', () => {
    it('should be able to add goalMade() to plays', () => {
      match.goalMade(player1)
      expect(match.plays[2].name).to.equal('Goal Made')
    })
  })

  describe('goalMissed()', () => {
    it('should be able to add goalMissed() to plays', () => {
      match.goalMissed(player1)
      expect(match.plays[3].name).to.equal('Goal Missed')
    })
  })

  describe('goalBlocked()', () => {
    it('should be able to add goalBlocked() to plays', () => {
      match.goalBlocked(player2)
      expect(match.plays[4].name).to.equal('Goal Blocked')
    })
  })

  describe('caughtSnitch()', () => {
    it('should be able to add goalMade() to plays', () => {
      match.caughtSnitch(player3)
      expect(match.plays[5].name).to.equal('Caught Snitch')
    })
  })
})
