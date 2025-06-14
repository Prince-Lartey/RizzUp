"use client";

import { useSession } from '@/app/(main)/SessionProvider';
import { PostData } from '@/lib/types';
import Link from 'next/link';
import React from 'react'
import UserAvatar from '../UserAvatar';
import { cn, formatRelativeDate } from '@/lib/utils';
import PostMoreButton from './PostMoreButton';
import Linkify from '../Linkify';
import UserTooltip from '../UserTooltip';
import Image from 'next/image';
import { Media } from '@prisma/client';

interface PostProps {
  post: PostData;
}

export default function Post({ post }: PostProps) {
    const { user } = useSession();

    return (
        <div className='space-y-3 rounded-2xl bg-card p-5 shadow-sm group/post'>
            <div className="flex justify-between gap-3">
                <div className="flex flex-wrap gap-3">
                    <UserTooltip user={post.user}>
                        <Link href={`/users/${post.user.username}`}>
                            <UserAvatar avatarUrl={post.user.avatarUrl} />
                        </Link>
                    </UserTooltip>
                    <div>
                        <UserTooltip user={post.user}>
                            <Link href={`/users/${post.user.username}`} className="block font-medium hover:underline">
                                {post.user.displayName}
                            </Link>
                        </UserTooltip>
                        <Link href={`/posts/${post.id}`} className="block text-sm text-muted-foreground hover:underline" suppressHydrationWarning >
                            {formatRelativeDate(post.createdAt)}
                        </Link>
                    </div>
                </div>
                {post.user.id === user.id && (
                    <PostMoreButton
                        post={post}
                        className="opacity-0 transition-opacity group-hover/post:opacity-100"
                    />
                )}
            </div>
            <Linkify>
                <div className="whitespace-pre-line break-words">{post.content}</div>
            </Linkify>
            {!!post.attachments.length && (
                <MediaPreviews attachments={post.attachments} />
            )}
        </div>
    )
}

interface MediaPreviewsProps {
  attachments: Media[];
}

function MediaPreviews({ attachments }: MediaPreviewsProps) {
    return (
        <div
            className={cn(
                "flex flex-col gap-3",
                attachments.length > 1 && "sm:grid sm:grid-cols-2",
            )}
        >
            {attachments.map((m) => (
                <MediaPreview key={m.id} media={m} />
            ))}
        </div>
    );
}

interface MediaPreviewProps {
    media: Media;
}

function MediaPreview({ media }: MediaPreviewProps) {
    if (media.type === "IMAGE") {
        return (
            <Image
                src={media.url}
                alt="Attachment"
                width={500}
                height={500}
                className="mx-auto size-fit max-h-[30rem] rounded-2xl"
            />
        );
    }

    if (media.type === "VIDEO") {
        return (
            <div>
                <video
                    src={media.url}
                    controls
                    className="mx-auto size-fit max-h-[30rem] rounded-2xl"
                />
            </div>
        );
    }

    return <p className="text-destructive">Unsupported media type</p>;
}