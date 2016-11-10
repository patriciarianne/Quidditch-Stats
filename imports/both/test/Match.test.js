import { expect } from 'chai'
import Match from '../models/Match'
import Player from '../models/Player'

describe('Match Class', () => {
  const match = new Match({
    plays: [],
    teams: [],
    snitchCaught: null,
    snitchAppeared: null,
  })

  const player1 = new Player({
    _id: '121',
    name: 'Rose Tyler',
    position: 'chaser',
    number: '7',
    goalsMade: 0,
    goalsMissed: 0,
    goalsBlocked: 0,
    hasCaughtSnitch: false,
  })

  const player2 = new Player({
    _id: '122',
    name: 'Clara Oswald',
    position: 'keeper',
    number: '12',
    goalsMade: 0,
    goalsMissed: 0,
    goalsBlocked: 0,
    hasCaughtSnitch: false,
  })

  const player3 = new Player({
    _id: '123',
    name: 'Martha Jones',
    position: 'seeker',
    number: '5',
    goalsMade: 0,
    goalsMissed: 0,
    goalsBlocked: 0,
    hasCaughtSnitch: false,
  })

  describe('addPlay()', () => {
    it('should add a new play', () => {
      match.addPlay('play', player1)
      expect(match.plays).to.have.deep.property('[0].name', 'play')
    })
  })

  describe('goalMade()', () => {
    it('should be able to add goalMade() to plays', () => {
      match.goalMade(player1)
      expect(match.plays).to.have.deep.property('[1].name', 'Goal Made')
    })
  })

  describe('goalMissed()', () => {
    it('should be able to add goalMissed() to plays', () => {
      match.goalMissed(player1)
      expect(match.plays).to.have.deep.property('[2].name', 'Goal Missed')
    })
  })

  describe('goalBlocked()', () => {
    it('should be able to add goalBlocked() to plays', () => {
      match.goalBlocked(player2)
      expect(match.plays).to.have.deep.property('[3].name', 'Goal Blocked')
    })
  })

  describe('releasesSnitch()', () => {
    it('should be able to add caughtSnitch() to plays', () => {
      match.releasesSnitch()
      expect(match.plays).to.have.deep.property('[4].name', 'Releases Snitch')
    })
  })

  describe('caughtSnitch()', () => {
    it('should be able to add caughtSnitch() to plays', () => {
      match.caughtSnitch(player3)
      expect(match.plays).to.have.deep.property('[5].name', 'Caught Snitch')
    })

    it('should get the time when the seeker caught the snitch', () => {

    })
  })
})
