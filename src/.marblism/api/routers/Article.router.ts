/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.ArticleInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).article.createMany(input as any))),

        create: procedure.input($Schema.ArticleInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).article.create(input as any))),

        deleteMany: procedure.input($Schema.ArticleInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).article.deleteMany(input as any))),

        delete: procedure.input($Schema.ArticleInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).article.delete(input as any))),

        findFirst: procedure.input($Schema.ArticleInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).article.findFirst(input as any))),

        findMany: procedure.input($Schema.ArticleInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).article.findMany(input as any))),

        findUnique: procedure.input($Schema.ArticleInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).article.findUnique(input as any))),

        updateMany: procedure.input($Schema.ArticleInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).article.updateMany(input as any))),

        update: procedure.input($Schema.ArticleInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).article.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ArticleCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ArticleCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ArticleCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ArticleCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ArticleCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ArticleCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ArticleGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ArticleGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ArticleCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ArticleCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ArticleGetPayload<T>, Context>) => Promise<Prisma.ArticleGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ArticleDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ArticleDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ArticleDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ArticleDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ArticleDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ArticleDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ArticleGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ArticleGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ArticleDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ArticleDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ArticleGetPayload<T>, Context>) => Promise<Prisma.ArticleGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ArticleFindFirstArgs, TData = Prisma.ArticleGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ArticleFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ArticleGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ArticleFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ArticleFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ArticleGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ArticleGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ArticleFindManyArgs, TData = Array<Prisma.ArticleGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ArticleFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ArticleGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ArticleFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ArticleFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ArticleGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ArticleGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ArticleFindUniqueArgs, TData = Prisma.ArticleGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ArticleFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ArticleGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ArticleFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ArticleFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ArticleGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ArticleGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ArticleUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ArticleUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ArticleUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ArticleUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ArticleUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ArticleUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ArticleGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ArticleGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ArticleUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ArticleUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ArticleGetPayload<T>, Context>) => Promise<Prisma.ArticleGetPayload<T>>
            };

    };
}
