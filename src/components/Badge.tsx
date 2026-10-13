import "./Badge.css";

type BadgeProps = {
  label: string;
  variant: "success" | "warning" | "danger" | "neutral";
};

export default function Badge({ label, variant }: BadgeProps) {
  return <span className={`badge badge--${variant}`}>{label}</span>;
}
