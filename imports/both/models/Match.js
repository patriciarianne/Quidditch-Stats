import Model from './Model'
import Collection from '../decorators/CollectionDecorator'
import Play from './Play'

@Collection('matches')
export default class Match extends Model {
  addTeam(team) {
    if (this.teams.length <= 2) {
      this.teams.push(team)
      this.gameEnded = false
    }
  }

  addPlay(name, player, points) {
    if (this.gameEnded === false) {
      const play = new Play()
      play.name = name
      play.playerId = player._id
      play.points = points
      play.date = new Date()
      play.save()
      this.plays.push(play)
    }
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
    if (this.gameEnded === false) {
      const play = new Play()
      play.name = 'Releases Snitch'
      play.playerId = null
      play.points = 0
      play.date = new Date(Date.now())
      play.save()
      this.plays.push(play)
      this.snitchAppeared = new Date(Date.now())
    }
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
