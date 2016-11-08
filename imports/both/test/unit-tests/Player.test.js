import Player from '../../models/Player'
import Action from '../../models/Action'
import Team from '../../models/Team'
import { expect } from 'chai'

describe('Player Class', () => {
  const player1 = new Player({
    position: 'chaser',
    playerNumber: 7,
    teamId: '123',
  })

  const goalMade = new Action({
    name: 'goalMade',
    points: 10,
    position: 'chaser',
  })

  const team1 = new Team({
    name: 'slytherin',
  })
  team1.addPlayer(player1)


  const match1 = new Match({})

  describe('play()', () => {
    player1.play(goalMade, match1)
    expect(match1.playIds).to.be.equal(goalMade.name)
  })
})
