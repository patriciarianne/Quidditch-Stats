import Player from '../models/Player'
import { expect } from 'chai'

describe('Player Class', () => {
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

  describe('goal()', () => {
    it('should increment goalsMade', () => {
      player1.goal()
      expect(player1.goalsMade).to.equal(1)
    })

    it('should not increment goalsMade', () => {
      player2.goal()
      expect(player2.goalsMade).to.not.equal(1)
    })
  })

  describe('missesGoal()', () => {
    it('should increment goalsMissed', () => {
      player1.missesGoal()
      expect(player1.goalsMissed).to.equal(1)
    })

    it('should not increment goalsMissed', () => {
      player2.missesGoal()
      expect(player2.goalsMissed).to.not.equal(1)
    })
  })

  describe('blocksGoal()', () => {
    it('should increment goalsBlocked', () => {
      player2.blocksGoal()
      expect(player2.goalsBlocked).to.equal(1)
    })

    it('should not increment goalsMissed', () => {
      player1.blocksGoal()
      expect(player1.goalsBlocked).to.not.equal(1)
    })
  })

  describe('catchSnitch()', () => {
    it('should make snitchCaught to be true ', () => {
      player3.catchSnitch()
      expect(player3.hasSnitchCaught).to.be.true
    })

    it('should make snitchCaught to be false', () => {
      player2.catchSnitch()
      expect(player2.hasSnitchCaught).to.not.be.true
    })
  })
})
