import { Prisma } from '../generated/prisma';

export const postDataInclude = {
    user: {
        select: {
            username: true,
            displayName: true,
            avatarUrl: true
        }
    }
    
} satisfies Prisma.PostInclude;

export type PostData = Prisma.PostGetPayload<{
    include: typeof postDataInclude;
}>;