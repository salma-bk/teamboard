// src/types/member.ts
export type Role = "developer" | "designer" | "product" | "manager";
export type Status = "available" | "busy" | "absent";

export type Member = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  status: Status;
  avatarUrl?: string;
};