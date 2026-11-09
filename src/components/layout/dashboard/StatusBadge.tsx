import { Check, Clock, XCircle } from "lucide-react";

interface StatusBadgeProps {
  status: string;
  className?: string;
}

export default function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  const normalized = status.toLowerCase();

  let style = "bg-slate-100 text-slate-700 border-slate-200";
  let dotColor = "bg-slate-400";
  let icon = null;

  if (normalized.includes("new") || normalized.includes("pending")) {
    style = "bg-sky-50 text-sky-700 border-sky-200/80";
    dotColor = "bg-sky-500";
    icon = <Clock className="w-3 h-3 text-sky-600" />;
  } else if (normalized.includes("prepar") || normalized.includes("cook")) {
    style = "bg-amber-50 text-amber-700 border-amber-200/80";
    dotColor = "bg-amber-500";
    icon = <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />;
  } else if (
    normalized.includes("ready") ||
    normalized.includes("active") ||
    normalized.includes("verified") ||
    normalized.includes("paid") ||
    normalized.includes("success") ||
    normalized.includes("delivered") ||
    normalized.includes("done")
  ) {
    style = "bg-emerald-50 text-emerald-700 border-emerald-200/80";
    dotColor = "bg-emerald-500";
    icon = <Check className="w-3 h-3 text-emerald-600" />;
  } else if (normalized.includes("transit") || normalized.includes("delivery") || normalized.includes("on the way")) {
    style = "bg-orange-50 text-[#ee8c2b] border-orange-200/80";
    dotColor = "bg-[#ee8c2b]";
    icon = <span className="w-1.5 h-1.5 rounded-full bg-[#ee8c2b] animate-ping" />;
  } else if (normalized.includes("cancel") || normalized.includes("reject") || normalized.includes("suspend") || normalized.includes("dispute")) {
    style = "bg-rose-50 text-rose-700 border-rose-200/80";
    dotColor = "bg-rose-500";
    icon = <XCircle className="w-3 h-3 text-rose-600" />;
  } else if (normalized.includes("review") || normalized.includes("offline")) {
    style = "bg-slate-100 text-slate-600 border-slate-200";
    dotColor = "bg-slate-400";
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${style} ${className}`}
    >
      {icon ? icon : <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />}
      {status}
    </span>
  );
}
