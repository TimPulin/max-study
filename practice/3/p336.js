/*
Вы организуете турнир по round-robin схеме. Каждая команда играет с каждой. 
Победа одной игре дает 2 очка, ничья — 1 очко. После некоторого количества игр вы хотите узнать, 
кто находится на каком месте в турнирной таблице. Для упорядочивания команд используются следующие критерии (в порядке важности):

Очки
Разница по количеству голов (забитые минус пропущенные)
Количество забитых голов

Если у двух команд одинаковое количество очков, то мы сравниваем их по разнице голов. 
Если одинаковая разница, то по количеству забитых голов. 
Если все три критерия одинаковые — команды делят общее место. Например, если играет 4 команды, 
а лучшие две по всем критериям равны, то будет да первых места, одно третье и одно четвертое.

Аргументы функции
number — количество команд в лиге
games — массив из четырех значений, описывающий результат игры в виде [TeamA, TeamB, GoalA, GoalB] 
(команда TeamA играла с командой TeamB, TeamA забила GoalA, TeamB забила GoalB голов).
Возвращаемое значение
Массив позиций в турнирной таблице. На i-ом месте стоит позиция i-ой команды.
*/

function computeRanks(numberOfTeams, games) {
  const tournamentTable = createTournamentTable(numberOfTeams);

  for (const [teamA, teamB, goalA, goalB] of games) {
    tournamentTable[teamA].setGameResult(goalA, goalB);
    tournamentTable[teamB].setGameResult(goalB, goalA);
  }

  const sortedTeams = Object.keys(tournamentTable).sort((a, b) => {
    if (tournamentTable[a].scores !== tournamentTable[b].scores) {
      return tournamentTable[b].scores - tournamentTable[a].scores;
    }

    if (tournamentTable[a].diffGoals !== tournamentTable[b].diffGoals) {
      return tournamentTable[b].diffGoals - tournamentTable[a].diffGoals;
    }

    return tournamentTable[b].scoredGoals - tournamentTable[a].scoredGoals;
  });

  const rankList = Array(numberOfTeams).fill(null);
  for (let i = 0; i < sortedTeams.length; i++) {
    const currentTeamNumber = sortedTeams[i];
    if (i === 0) {
      rankList[currentTeamNumber] = 1;
    } else {
      const previousTeamNumber = sortedTeams[i - 1];
      rankList[currentTeamNumber] = equalRankCondition(
        tournamentTable[currentTeamNumber],
        tournamentTable[previousTeamNumber]
      )
        ? rankList[previousTeamNumber]
        : i + 1;
    }
  }

  return rankList;
}

function equalRankCondition(currentTeam, previousTeam) {
  return (
    currentTeam.scores === previousTeam.scores &&
    currentTeam.diffGoals === previousTeam.diffGoals &&
    currentTeam.scoredGoals === previousTeam.scoredGoals
  );
}

function createTournamentTable(number) {
  const tournamentTable = {};
  for (let i = 0; i < number; i++) {
    tournamentTable[i] = createTeam();
  }
  return tournamentTable;
}

function createTeam() {
  return {
    scores: 0,
    scoredGoals: 0,
    missedGoals: 0,

    get diffGoals() {
      return this.scoredGoals - this.missedGoals;
    },

    setGameResult(scoredGoals, missedGoals) {
      this.scores += calcScores(scoredGoals, missedGoals);
      this.scoredGoals += scoredGoals;
      this.missedGoals += missedGoals;
    },
  };
}

const SCORE = {
  WIN: 2,
  DRAW: 1,
  LOSE: 0,
};
function calcScores(scoredGoals, missedGoals) {
  if (scoredGoals === missedGoals) return SCORE.DRAW;
  return scoredGoals - missedGoals > 0 ? SCORE.WIN : SCORE.LOSE;
}
