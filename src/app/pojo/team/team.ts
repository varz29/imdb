import { Teammember } from "./teammember";

export class Team {
    name: string;
    description: string
    id: number;
    totalTeamMember: number;
    teamMembers: Array<Teammember>
}
