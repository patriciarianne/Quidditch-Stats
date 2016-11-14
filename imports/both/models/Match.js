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

  addPlay(name, player) {
    if (this.gameEnded === false) {
      const play = new Play()
      play.name = name
      play.player = player.name
      play.date = new Date(Date.now())
      play.match = this._id
      play.save()
      this.plays.push(play)
    }
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
    if (this.gameEnded === false) {
      const play = new Play()
      play.name = 'Releases Snitch'
      play.player = player.name
      play.date = new Date(Date.now())
      play.save()
      this.plays.push(play)
      this.snitchAppeared = new Date(Date.now())
    }
  }

  caughtSnitch(player) {
    if (this.snitchAppeared !== null) {
      player.catchSnitch()
      this.addPlay('Caught Snitch', player)
      this.timeSnitchCaught = new Date(Date.now())
      this.gameEnded = true
    }
  }
}
