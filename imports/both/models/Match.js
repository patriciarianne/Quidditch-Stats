import Model from './Model'
import Collection from '../decorators/CollectionDecorator'
import Play from './Play'

@Collection('matches')
export default class Match extends Model {
  addTeam(team) {
    if (this.teams.length <= 2) {
      team.match = this._id
      team.save()
      this.teams.push(team)
      this.gameEnded = false
    }
  }

  addPlay(name, player, position) {
    if (player.position.toUpperCase() === position) {
      const play = new Play()
      play.name = name
      play.player = player.name
      play.date = new Date(Date.now())
      play.team = player.team
      play.match = this._id
      play.save()
      this.plays.push(play)
    }
  }

  goalMade(player) {
    if (this.gameEnded === false) {
      player.goal()
      player.save()
      this.addPlay('Goal Made', player, 'CHASER')
    }
  }

  goalMissed(player) {
    if (this.gameEnded === false) {
      player.missesGoal()
      player.save()
      this.addPlay('Goal Missed', player, 'CHASER')
    }
  }

  goalBlocked(player) {
    if (this.gameEnded === false) {
      player.blocksGoal()
      player.save()
      this.addPlay('Goal Blocked', player, 'KEEPER')
    }
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
    }
  }

  caughtSnitch(player) {
    if (this.gameEnded === false && this.snitchAppeared !== null && player.position.toUpperCase() === 'SEEKER') {
      player.catchSnitch()
      player.save()
      this.addPlay('Caught Snitch', player, 'SEEKER')
      this.timeSnitchCaught = new Date(Date.now())
      this.gameEnded = true
    }
  }
}
