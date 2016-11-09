import Model from './Model'
import Collection from '../decorators/CollectionDecorator'

@Collection('players')
export default class Player extends Model {
  goal() {
    if (this.position.toUpperCase() === 'CHASER') {
      this.goalsMade += 1
    }
  }

  missesGoal() {
    if (this.position.toUpperCase() === 'CHASER') {
      this.goalsMissed += 1
    }
  }

  blocksGoal() {
    if (this.position.toUpperCase() === 'KEEPER') {
      this.goalsBlocked += 1
    }
  }

  catchSnitch() {
    if (this.position.toUpperCase() === 'SEEKER') {
      this.hasSnitchCaught = true
    }
  }
}
