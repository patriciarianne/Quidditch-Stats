import Action from '../../models/Action'
import { expect } from 'chai'

describe('Action Class', () => {
  const action = new Match({
    name: 'goalMade',
    points: 10,
    position: 'chaser',
  })

  it('should have a name of (goalMade)', () => {
    expect(action.name).to.be.equal('goalMade')
  })

  it('should have a points of (10)', () => {
    expect(action.points).to.be.equal(10)
  })

  it('should have a position of (chaser)', () => {
    expect(action.position).to.be.equal('chaser')
  })
})
