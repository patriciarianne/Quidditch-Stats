import { expect } from 'chai'
import Play from '../models/Play'

describe('Play Class', () => {
  const play1 = new Play({
    name: 'Goal Made',
    playerId: '123',
    date: new Date(Date.now()),
  })

  describe('instantiation', () => {
    it('name should be (Goal Made)', () => {
      expect(play1.name).to.equal('Goal Made')
    })

    it('playerId should be (123)', () => {
      expect(play1.playerId).to.equal('123')
    })
  })
})
