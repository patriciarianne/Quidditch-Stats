import Match from '../../models/Match'
import Play from '../../models/Play'
import { expect } from 'chai'

describe('Play Class', () => {
  const goalMade = new Action({
    name: 'goalMade',
    points: 10,
    position: 'chaser',
  })
  describe('instantiation' () => {
    it('name should be (goalMade)', () => {

    })
  })
})
