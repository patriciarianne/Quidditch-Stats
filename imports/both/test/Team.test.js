import Team from '../models/Team'
import Player from '../models/Player'
import { expect } from 'chai'

describe('Player Class', () => {
  const player1 = new Player({
    name: 'Rose Tyler',
    position: 'chaser',
    number: '7',
    goalsMade: 5,
    goalsMissed: 0,
    goalsBlocked: 0,
    hasSnitchCaught: false,
  })

  const player2 = new Player({
    name: 'Donna Noble',
    position: 'seeker',
    number: '2',
    goalsMade: 0,
    goalsMissed: 0,
    goalsBlocked: 0,
    isSnitchCaught: true,
  })

  const player3 = new Player({
    name: 'Sarah Jane',
    position: 'chaser',
    number: '1',
    goalsMade: 1,
    goalsMissed: 0,
    goalsBlocked: 0,
    isSnitchCaught: false,
  })

  const team1 = new Team({
    name: 'Slytherin',
    players: [player1],
  })

  const team2 = new Team({
    name: 'Gryffindor',
    players: [player2],
  })

  const team3 = new Team({
    name: 'Hufflepuff',
    players: [player1, player2, player3],
  })

  describe('addPlayer()', () => {
    it('should able to add player', () => {
      team1.addPlayer(player3)
      expect(team1.players).to.include(player3)
    })
  })

  describe('getScore()', () => {
    it('should get a score of 60', () => {
      expect(team1.getScore()).to.equal(60)
    })

    it('should get a score of 150', () => {
      expect(team2.getScore()).to.equal(150)
    })

    it('should get a score of 210', () => {
      expect(team3.getScore()).to.equal(210)
    })
  })
})
