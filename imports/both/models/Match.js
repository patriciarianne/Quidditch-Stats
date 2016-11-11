import Model from './Model'
import Collection from '../decorators/CollectionDecorator'
import Play from './Play'

@Collection('matches')
export default class Match extends Model {
  addPlay(name, player, points) {
    const play = new Play()
    play.name = name
    play.playerId = player._id
    play.points = points
    play.date = new Date()
    this.plays.push(play)
  }

  addTeam(team) {
    this.teams.push(team)
  }

  goalMade(player) {
    player.goal()
    this.addPlay('Goal Made', player, 10)
  }

  goalMissed(player) {
    player.missesGoal()
    this.addPlay('Goal Missed', player, 0)
  }

  goalBlocked(player) {
    player.blocksGoal()
    this.addPlay('Goal Blocked', player, 0)
  }

  releasesSnitch() {
    const play = new Play()
    play.name = 'Releases Snitch'
    play.playerId = null
    play.points = 0
    play.date = new Date()
    this.plays.push(play)
    this.snitchAppeared = new Date()
  }

  caughtSnitch(player) {
    if (this.snitchAppeared !== null) {
      player.catchSnitch()
      this.addPlay('Caught Snitch', player, 150)
      this.timeSnitchCaught = new Date(Date.now())
      this.gameEnded = true
    }
  }
}
