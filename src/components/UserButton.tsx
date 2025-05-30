"use client";

import { useSession } from "@/app/(main)/SessionProvider";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "./ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Check, LogOutIcon, Monitor, Moon, Sun, UserIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { logout } from "@/app/(auth)/actions";
import { useQueryClient } from "@tanstack/react-query";

interface UserButtonProps {
    className?: string;
}

export default function UserButton({ className }: UserButtonProps) {
    const { user } = useSession();

    const { theme, setTheme } = useTheme();

    const queryClient = useQueryClient();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className={cn("flex-none rounded-full", className)}>
                    <UserAvatar avatarUrl={user.avatarUrl} size={40} />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="">
                <DropdownMenuLabel>Logged in as @{user.username}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href={`/users/${user.username}`}>
                    <DropdownMenuItem>
                        <UserIcon className="mr-2 size-4" />
                        Profile
                    </DropdownMenuItem>
                </Link>
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <Monitor className="mr-2 size-4" />
                        Theme
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent className="">
                            <DropdownMenuItem onClick={() => setTheme("system")} className="text-xs">
                                <Monitor className="mr-2 size-4" />
                                System default
                                {theme === "system" && <Check className="ms-2 size-4" />}
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("light")} className="text-xs">
                                <Sun className="mr-2 size-4" />
                                Light
                                {theme === "light" && <Check className="ms-2 size-4" />}
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")} className="text-xs">
                                <Moon className="mr-2 size-4" />
                                Dark
                                {theme === "dark" && <Check className="ms-2 size-4" />}
                            </DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={() => {
                        queryClient.clear();
                        logout();
                    }}>
                    <LogOutIcon className="mr-2 size-4" />
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}