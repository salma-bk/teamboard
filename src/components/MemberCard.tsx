import type { Member } from "../types/member";
import type { Role } from "../types/member";
import Avatar from "./Avatar";
import Badge from "./Badge";
import "./MemberCard.css";

type MemberCardProps = {
  member: Member;
};

const roleLabels: Record<Role, string> = {
  developer: "Développeur",
  designer: "Designer",
};

const statusLables: Record<Member["status"], string> = {
  available: "Disponible",
  busy: "Occupé",
  absent: "Absent",
};

const statusVariants = {
  available: "success",
  busy: "warning",
  absent: "danger",
} as const;

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <article className="member-card">
      <Avatar member={member} />
      <div className="member-card__info">
        <h2>
          {member.firstName} {member.lastName}
        </h2>
        <p>{member.email}</p>
        <p>{roleLabels[member.role]}</p>

        <Badge
          label={statusLables[member.status]}
          variant={statusVariants[member.status]}
        />
      </div>
    </article>
  );
}
