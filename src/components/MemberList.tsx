import type { Member } from "../types/member";
import MemberCard from "./MemberCard";
import "./MemberList.css";

type MemberListProps = {
  members: Member[];
};

export default function MemberList({ members }: MemberListProps) {
  if (members.length === 0) {
    return <p className="member-list__empty">Aucun membre dans l’équipe</p>;
  }

  return (
    <ul className="member-list">
      {members.map((member) => (
        <li key={member.id}>
          <MemberCard member={member} />
        </li>
      ))}
    </ul>
  );
}
