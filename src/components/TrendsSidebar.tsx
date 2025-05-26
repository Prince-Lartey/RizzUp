import { validateRequest } from '@/auth';
import prisma from '@/lib/prisma';
import { userDataSelect } from '@/lib/types';
import { Loader2 } from 'lucide-react';
import React, { Suspense } from 'react'

export default function TrendsSidebar() {
    return (
        <div className="sticky top-[5.25rem] hidden md:block lg:w-80 w-72 h-fit flex-non space-y-5 rounded-2xl">
            <Suspense fallback={<Loader2 className="mx-auto animate-spin" />}>
                <WhoToFollow />
            </Suspense>
        </div>
    )
}

async function WhoToFollow() {
    const { user } = await validateRequest();

    if (!user) return null;

    const usersToFollow = await prisma.user.findMany({
        where: {
            NOT: {
                id: user.id,
            },
            // followers: {
            //     none: {
            //     followerId: user.id,
            //     },
            // },
        },
        select: userDataSelect,
        take: 5,
  });

  return (
    <div className="space-y-5 rounded-2xl bg-card p-5 shadow-sm">
        <div className="text-base font-bold">rizzUp Recommends</div>
    </div>
  )
}
