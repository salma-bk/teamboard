import type { Member } from "../types/member";
import "./Avatar.css";

type AvatarProps = {
  member: Member;
};
export default function Avatar({ member }: AvatarProps) {
  const initials = `${member.firstName[0]}${member.lastName[0]}`.toUpperCase();

  return (
    <div className="avatar">
      {member.avatarUrl ? (
        <img src={member.avatarUrl} alt={`Avatar de ${member.firstName}`} />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
}
