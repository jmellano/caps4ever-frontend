export class ClanWarLogs {
  war_ranking: {
    season: number;
    ranking: {
      name: string;
      score: number;
    }
  };


  constructor(war_ranking: { season: number; ranking: { name: string; score: number } }) {
    this.war_ranking = war_ranking;
  }
}
