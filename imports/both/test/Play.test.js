import { expect } from 'chai'
import Play from '../models/Play'

describe('Play Class', () => {
  const oldDate = Date.now
  Date.now = () => 1478868547521
  const play1 = new Play({
    name: 'Goal Made',
    player: 'John Smith',
    date: new Date(Date.now()),
  })

  describe('instantiation', () => {
    it('name should be (Goal Made)', () => {
      expect(play1.name).to.equal('Goal Made')
    })

    it('player should be (John Smith)', () => {
      expect(play1.playerId).to.equal('John Smith')
    })

    it('date should be date.now', () => {
      expect(play1.date.getTime()).to.equal(new Date(1478868547521).getTime())
    })
  })
})
