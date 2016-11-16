import Match from '../both/models/Match'
import Team from '../both/models/Team'
import Player from '../both/models/Player'

export default function loadSeeds() {
  const player1 = new Player()
  player1.name = 'Cho Chang'
  player1.position = 'Seeker'
  player1.number = '03'
  player1.goalsMade = 0
  player1.goalsMissed = 0
  player1.goalsBlocked = 0
  player1.hasCaughtSnitch = false
  player1.team = null
  player1.save()

  const player2 = new Player()
  player2.name = 'Roger Davis'
  player2.position = 'Chaser'
  player2.number = '15'
  player2.goalsMade = 0
  player2.goalsMissed = 0
  player2.goalsBlocked = 0
  player2.hasCaughtSnitch = false
  player2.team = null
  player2.save()

  const player3 = new Player()
  player3.name = 'Jeremy Stretton'
  player3.position = 'Chaser'
  player3.number = '06'
  player3.goalsMade = 0
  player3.goalsMissed = 0
  player3.goalsBlocked = 0
  player3.hasCaughtSnitch = false
  player3.team = null
  player3.save()

  const player4 = new Player()
  player4.name = 'Randolph Burrow'
  player4.position = 'Chaser'
  player4.number = '18'
  player4.goalsMade = 0
  player4.goalsMissed = 0
  player4.goalsBlocked = 0
  player4.hasCaughtSnitch = false
  player4.team = null
  player4.save()

  const player5 = new Player()
  player5.name = 'Grant Page'
  player5.position = 'Keeper'
  player5.number = '11'
  player5.goalsMade = 0
  player5.goalsMissed = 0
  player5.goalsBlocked = 0
  player5.hasCaughtSnitch = false
  player5.team = null
  player5.save()

  const player6 = new Player()
  player6.name = 'Cedric Diggory'
  player6.position = 'Seeker'
  player6.number = '08'
  player6.goalsMade = 0
  player6.goalsMissed = 0
  player6.goalsBlocked = 0
  player6.hasCaughtSnitch = false
  player6.team = null
  player6.save()

  const player7 = new Player()
  player7.name = 'Malcolm Price'
  player7.position = 'Chaser'
  player7.number = '16'
  player7.goalsMade = 0
  player7.goalsMissed = 0
  player7.goalsBlocked = 0
  player7.hasCaughtSnitch = false
  player7.team = null
  player7.save()

  const player8 = new Player()
  player8.name = 'Heidi Macavoy'
  player8.position = 'Chaser'
  player8.number = '14'
  player8.goalsMade = 0
  player8.goalsMissed = 0
  player8.goalsBlocked = 0
  player8.hasCaughtSnitch = false
  player8.team = null
  player8.save()

  const player9 = new Player()
  player9.name = 'Tamsin Applebee'
  player9.position = 'Chaser'
  player9.number = '09'
  player9.goalsMade = 0
  player9.goalsMissed = 0
  player9.goalsBlocked = 0
  player9.hasCaughtSnitch = false
  player9.team = null
  player9.save()

  const player10 = new Player()
  player10.name = 'Zacharias Smith'
  player10.position = 'Keeper'
  player10.number = '01'
  player10.goalsMade = 0
  player10.goalsMissed = 0
  player10.goalsBlocked = 0
  player10.hasCaughtSnitch = false
  player10.team = null
  player10.save()

  const dbPlayer1 = Player.findOne({ name: player1.name })
  const dbPlayer2 = Player.findOne({ name: player2.name })
  const dbPlayer3 = Player.findOne({ name: player3.name })
  const dbPlayer4 = Player.findOne({ name: player4.name })
  const dbPlayer5 = Player.findOne({ name: player5.name })
  const dbPlayer6 = Player.findOne({ name: player6.name })
  const dbPlayer7 = Player.findOne({ name: player7.name })
  const dbPlayer8 = Player.findOne({ name: player8.name })
  const dbPlayer9 = Player.findOne({ name: player9.name })
  const dbPlayer10 = Player.findOne({ name: player10.name })

  const teamPlayers1 = [dbPlayer1, dbPlayer2, dbPlayer3, dbPlayer4, dbPlayer5]
  const teamPlayers2 = [dbPlayer6, dbPlayer7, dbPlayer8, dbPlayer9, dbPlayer10]

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

  teamPlayers1.forEach((player) => {
    dbTeam1.addPlayer(player)
  })
  dbTeam1.save()

  teamPlayers2.forEach((player) => {
    dbTeam2.addPlayer(player)
  })
  dbTeam2.save()

  const match = new Match()
  match.teams = []
  match.plays = []
  match.snitchAppeared = null
  match.name = 'Ravenclaw VS Hufflepuff'
  match.save()

  const dbMatch = Match.findOne({ name: match.name })
  dbMatch.addTeam(dbTeam1)
  dbMatch.addTeam(dbTeam2)
  dbMatch.save()
}
