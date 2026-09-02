import { Check } from "lucide-react";

export default function StatusBadge({ status }: { status: string }) {
    const styles = {
        "New Order":
            "bg-blue-50 text-blue-600 border-blue-100",

        Preparing:
            "bg-orange-50 text-orange-600 border-orange-100",

        Ready:
            "bg-green-50 text-green-600 border-green-100",

        Completed:
            "bg-gray-50 text-gray-600 border-gray-200",

        Cancelled:
            "bg-red-50 text-red-600 border-red-100",
    };

    return (
        <span
            className={`
                inline-flex
                items-center
                gap-1.5
                px-2.5
                py-1
                rounded-full
                border
                text-[11px]
                font-medium
                ${styles[status as keyof typeof styles]}
            `}
        >
            {status === "Ready" && <Check className="w-3 h-3" />}

            {status !== "Ready" && (
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
            )}

            {status}
        </span>
    );
}