import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { Button, ButtonProps } from "./ui/button";

interface LoadingButtonProps extends ButtonProps {
    loading: boolean;
}

export default function LoadingButton({
    loading,
    disabled,
    className,
    ...props
}: LoadingButtonProps) {
    return (
        <Button
            disabled={loading || disabled}
            className={cn("bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-2xl hover:shadow-indigo-500/25 transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-50 flex items-center justify-center gap-2", className)}
            {...props}
        >
            {loading && <Loader2 className="size-5 animate-spin" />}
            {props.children}
        </Button>
    );
}