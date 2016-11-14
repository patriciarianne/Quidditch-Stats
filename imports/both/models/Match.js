import Model from './Model'
import Collection from '../decorators/CollectionDecorator'
import Play from './Play'

@Collection('matches')
export default class Match extends Model {
  addTeam(team) {
    if (this.teams.length <= 2) {
      this.teams.push(team)
      this.gameEnded = false
      this.save()
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
      this.save()
    }
  }

  goalMade(player) {
    player.goal()
    player.save()
    this.addPlay('Goal Made', player)
  }

  goalMissed(player) {
    player.missesGoal()
    player.save()
    this.addPlay('Goal Missed', player)
  }

  goalBlocked(player) {
    player.blocksGoal()
    player.save()
    this.addPlay('Goal Blocked', player)
  }

  releasesSnitch() {
    if (this.gameEnded === false) {
      const play = new Play()
      play.name = 'Releases Snitch'
      play.player = null
      play.date = new Date(Date.now())
      play.match = this._id
      play.save()
      this.plays.push(play)
      this.snitchAppeared = new Date(Date.now())
      this.save()
    }
  }

  caughtSnitch(player) {
    if (this.snitchAppeared !== null) {
      player.catchSnitch()
      player.save()
      this.addPlay('Caught Snitch', player)
      this.timeSnitchCaught = new Date(Date.now())
      this.gameEnded = true
      this.save()
    }
  }
}
