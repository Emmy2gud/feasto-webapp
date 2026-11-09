import { Bell, ShieldCheck, TriangleAlert } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type SettingsGroupId = "security" | "notifications" | "danger";

export type SettingsGroup = {
  id: SettingsGroupId;
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const settingsGroups: SettingsGroup[] = [
  {
    id: "security",
    label: "Password and security",
    title: "Password and security",
    description: "Change the password you sign in with and control two-factor authentication.",
    icon: ShieldCheck,
  },
  {
    id: "notifications",
    label: "Notifications",
    title: "Notifications",
    description: "Choose which order and account messages reach you.",
    icon: Bell,
  },
  {
    id: "danger",
    label: "Danger zone",
    title: "Danger zone",
    description: "Permanently close your Feasto account.",
    icon: TriangleAlert,
  },
];
