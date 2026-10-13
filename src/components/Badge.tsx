import "./Badge.css";

export type BadgeVariant = "success" | "warning" | "danger" | "neutral";

type BadgeProps = {
  label: string;
  variant?: BadgeVariant;
};

export default function Badge({ label, variant = "neutral" }: BadgeProps) {
  return <span className={`badge badge--${variant}`}>{label}</span>;
}
