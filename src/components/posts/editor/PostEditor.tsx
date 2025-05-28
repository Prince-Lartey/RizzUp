"use client"

import { useSession } from "@/app/(main)/SessionProvider";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { submitPost } from "./actions";
import UserAvatar from "@/components/UserAvatar";
import { cn } from "@/lib/utils";
import LoadingButton from "@/components/LoadingButton";
import { useState } from "react";
import "./styles.css"
import { useSubmitPostMutation } from "./mutation";

export default function PostEditor() {
    const { user } = useSession();

    const mutation = useSubmitPostMutation();

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                bold: false,
                italic: false,
            }),
            Placeholder.configure({
                placeholder: "Got something cool to say?",
            }),
        ],
    });

    const input =
        editor?.getText({
            blockSeparator: "\n",
        }) || "";

    function onSubmit() {
        mutation.mutate(input, {
            onSuccess: () => {
                editor?.commands.clearContent()
            }
        })
    }

    return (
        <div className="flex flex-col gap-5 rounded-2xl bg-card p-5 shadow-sm">
            <div className="flex gap-5">
                <UserAvatar avatarUrl={user.avatarUrl} className="hidden sm:inline" />
                <div className="w-full">
                    <EditorContent
                        editor={editor}
                        className={cn(
                        "max-h-[20rem] w-full overflow-y-auto rounded-2xl bg-background px-5 py-3",
                        )}
                        // onPaste={onPaste}
                    />
                </div>
            </div>
            <div className="flex justify-end">
                <LoadingButton
                    onClick={onSubmit}
                    loading={mutation.isPending}
                    disabled={!input.trim()}
                    className="min-w-20 "
                >
                    Post
                </LoadingButton>
            </div>
        </div>
    )
}