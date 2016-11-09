import Play from '../../models/Play'
import { expect } from 'chai'

describe('Play Class', () => {
  const play1 = new Play({
    name: 'Goal Made',
    playerId: '123',
    date: new Date(Date.now())
  })
  
  describe('instantiation' () => {
    it('name should be (goalMade)', () => {

    })
  })
})
