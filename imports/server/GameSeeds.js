import Match from '../both/models/Match'
import Team from '../both/models/Team'
import Player from '../both/models/Player'

export default function loadSeeds() {
  const player1 = new Player()
  player1.name = 'Harry Potter'
  player1.position = 'Seeker'
  player1.number = '7'
  player1.goalsMade = 0
  player1.goalsMissed = 0
  player1.goalsBlocked = 0
  player1.hasCaughtSnitch = false
  player1.team = null
  player1.save()

  const player2 = new Player()
  player2.name = 'Angelina Johnson'
  player2.position = 'Chaser'
  player2.number = '2'
  player2.goalsMade = 0
  player2.goalsMissed = 0
  player2.goalsBlocked = 0
  player2.hasCaughtSnitch = false
  player2.team = null
  player2.save()

  const player3 = new Player()
  player3.name = 'Oliver Wood'
  player3.position = 'Keeper'
  player3.number = '10'
  player3.goalsMade = 0
  player3.goalsMissed = 0
  player3.goalsBlocked = 0
  player3.hasCaughtSnitch = false
  player3.team = null
  player3.save()

  const player4 = new Player()
  player4.name = 'Draco Malfoy'
  player4.position = 'Seeker'
  player4.number = '13'
  player4.goalsMade = 0
  player4.goalsMissed = 0
  player4.goalsBlocked = 0
  player4.hasCaughtSnitch = false
  player4.team = null
  player4.save()

  const player5 = new Player()
  player5.name = 'Blaise Zabini'
  player5.position = 'Chaser'
  player5.number = '6'
  player5.goalsMade = 0
  player5.goalsMissed = 0
  player5.goalsBlocked = 0
  player5.hasCaughtSnitch = false
  player5.team = null
  player5.save()

  const player6 = new Player()
  player6.name = 'Miles Bletchley'
  player6.position = 'Keeper'
  player6.number = '8'
  player6.goalsMade = 0
  player6.goalsMissed = 0
  player6.goalsBlocked = 0
  player6.hasCaughtSnitch = false
  player6.team = null
  player6.save()

  const dbPlayer1 = Player.findOne({ name: player1.name })
  const dbPlayer2 = Player.findOne({ name: player2.name })
  const dbPlayer3 = Player.findOne({ name: player3.name })
  const dbPlayer4 = Player.findOne({ name: player4.name })
  const dbPlayer5 = Player.findOne({ name: player5.name })
  const dbPlayer6 = Player.findOne({ name: player6.name })

  const team1 = new Team()
  team1.name = 'Gryffindor'
  team1.players = []
  team1.addPlayer(dbPlayer1)
  team1.addPlayer(dbPlayer2)
  team1.addPlayer(dbPlayer3)
  team1.save((err, doc) => {
    if (err) {
      console.log(err)
    }
    console.log(doc)
  })

  const team2 = new Team()
  team2.name = 'Slytherin'
  team2.players = []
  team2.addPlayer(dbPlayer4)
  team2.addPlayer(dbPlayer5)
  team2.addPlayer(dbPlayer6)
  team2.save((err, doc) => {
    if (err) {
      console.log(err)
    }
    console.log(doc)
  })

  const dbTeam1 = Team.findOne({ name: team1.name })
  const dbTeam2 = Team.findOne({ name: team2.name })

  const match = new Match()
  match.teams = []
  match.plays = []
  match.addTeam(dbTeam1)
  match.addTeam(dbTeam2)


  match.goalMade(dbPlayer2)
  match.goalBlocked(dbPlayer3)
  match.goalMissed(dbPlayer5)
  match.releasesSnitch()
  match.goalMade(dbPlayer5)
  match.caughtSnitch(dbPlayer1)

  match.save((err, doc) => {
    if (err) {
      console.log(err)
    }
    console.log(doc)
  })
}
