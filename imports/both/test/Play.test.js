import { expect } from 'chai'
import Play from '../models/Play'

describe('Play Class', () => {
  const oldDate = Date.now
  Date.now = () => 1478868547521
  const play1 = new Play({
    name: 'Goal Made',
    playerId: '123',
    points: 12,
    date: new Date(Date.now()),
  })

  describe('instantiation', () => {
    it('name should be (Goal Made)', () => {
      expect(play1.name).to.equal('Goal Made')
    })

    it('playerId should be (123)', () => {
      expect(play1.playerId).to.equal('123')
    })

    it('points should be (12)', () => {
      expect(play1.points).to.equal(12)
    })

    it('date should be date.now', () => {
      expect(play1.date.getTime()).to.equal(new Date(1478868547521).getTime())
    })
  })
})
