import Team from '../../models/Team'
import { expect } from 'chai'

describe('Player Class', () => {
  const player1 = new Player({
    position: 'seeker',
    playerNumber: 7,
    teamId: '123',
  })

  it('should have a position of (seeker)', () => {
    expect(player1.position).to.be.equal('seeker')
  })

  it('should have a playerNumber of (7)', () => {
    expect(player1.playerNumber).to.be.equal(7)
  })

  it('should have a teamId of (123)', () => {
    expect(player1.teamId).to.be.equal('123')
  })
})
