import Model from './Model'
import Collection from '../decorators/CollectionDecorator'
import Play from './Play'

@Collection('matches')
export default class Match extends Model {
  addPlay(name, player) {
    const play = new Play()
    play.name = name
    play.playerId = player._id
    play.date = new Date()
    this.plays.push(play)
  }

  addTeam(team) {
    this.teams.push(team)
  }

  goalMade(player) {
    player.goal()
    this.addPlay('Goal Made', player)
  }

  goalMissed(player) {
    player.missesGoal()
    this.addPlay('Goal Missed', player)
  }

  goalBlocked(player) {
    player.blocksGoal()
    this.addPlay('Goal Blocked', player)
  }

  releasesSnitch() {
    const play = new Play()
    play.name = 'Releases Snitch'
    play.playerId = null
    play.date = new Date()
    this.plays.push(play)
    this.snitchAppeared = new Date()
  }

  caughtSnitch(player) {
    const snitchCaught = null
    if (this.snitchAppeared !== null) {
      player.catchSnitch()
      this.addPlay('Caught Snitch', player)
      this.timeSnitchCaught = new Date()
      this.gameEnded = true
    }
  }
}
