export class ClanInformation {
  description: string;
  name: string;
  badge: {
    image: string
  };
  members []: {
    name: string;
    donations: number;
  };

  constructor(description: string, name: string, url: string, members) {
    this.description = description;
    this.name = name;
    this.badge = {
      image: url
    };
    this.members = members;
  }
}
