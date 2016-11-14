import Match from '../both/models/Match'
import Team from '../both/models/Team'
import Player from '../both/models/Player'

export default function loadSeeds() {
  const player1 = new Player()
  player1.name = 'Rose Tyler'
  player1.position = 'Seeker'
  player1.number = '10'
  player1.goalsMade = 0
  player1.goalsMissed = 0
  player1.goalsBlocked = 0
  player1.hasCaughtSnitch = false
  player1.team = null
  player1.save()

  const player2 = new Player()
  player2.name = 'John Smith'
  player2.position = 'Chaser'
  player2.number = '4'
  player2.goalsMade = 0
  player2.goalsMissed = 0
  player2.goalsBlocked = 0
  player2.hasCaughtSnitch = false
  player2.team = null
  player2.save()

  const player3 = new Player()
  player3.name = 'Jack Harkness'
  player3.position = 'Keeper'
  player3.number = '6'
  player3.goalsMade = 0
  player3.goalsMissed = 0
  player3.goalsBlocked = 0
  player3.hasCaughtSnitch = false
  player3.team = null
  player3.save()

  const player4 = new Player()
  player4.name = 'Mickey Smith'
  player4.position = 'Seeker'
  player4.number = '18'
  player4.goalsMade = 0
  player4.goalsMissed = 0
  player4.goalsBlocked = 0
  player4.hasCaughtSnitch = false
  player4.team = null
  player4.save()

  const player5 = new Player()
  player5.name = 'Martha Jones'
  player5.position = 'Chaser'
  player5.number = '11'
  player5.goalsMade = 0
  player5.goalsMissed = 0
  player5.goalsBlocked = 0
  player5.hasCaughtSnitch = false
  player5.team = null
  player5.save()

  const player6 = new Player()
  player6.name = 'Donna Noble'
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
  team1.name = 'Ravenclaw'
  team1.players = []
  team1.save()

  const team2 = new Team()
  team2.name = 'Hufflepuff'
  team2.players = []
  team2.save()

  const dbTeam1 = Team.findOne({ name: team1.name })
  const dbTeam2 = Team.findOne({ name: team2.name })
  dbTeam1.addPlayer(dbPlayer1)
  dbTeam1.addPlayer(dbPlayer2)
  dbTeam1.addPlayer(dbPlayer3)
  dbTeam2.addPlayer(dbPlayer4)
  dbTeam2.addPlayer(dbPlayer5)
  dbTeam2.addPlayer(dbPlayer6)

  const match = new Match()
  match.teams = []
  match.plays = []
  match.name = 'Ravenclaw VS Hufflepuff'
  match.save()

  const dbMatch = Match.findOne({ name: match.name })
  dbMatch.addTeam(dbTeam1)
  dbMatch.addTeam(dbTeam2)


  dbMatch.goalMade(dbPlayer2)
  dbMatch.goalBlocked(dbPlayer3)
  dbMatch.goalMissed(dbPlayer5)
  dbMatch.releasesSnitch()
  dbMatch.goalMade(dbPlayer5)
  dbMatch.caughtSnitch(dbPlayer1)
}
