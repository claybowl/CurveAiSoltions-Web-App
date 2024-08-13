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

        createMany: procedure.input($Schema.RagVectorInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).ragVector.createMany(input as any))),

        create: procedure.input($Schema.RagVectorInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).ragVector.create(input as any))),

        deleteMany: procedure.input($Schema.RagVectorInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).ragVector.deleteMany(input as any))),

        delete: procedure.input($Schema.RagVectorInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).ragVector.delete(input as any))),

        findFirst: procedure.input($Schema.RagVectorInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).ragVector.findFirst(input as any))),

        findMany: procedure.input($Schema.RagVectorInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).ragVector.findMany(input as any))),

        findUnique: procedure.input($Schema.RagVectorInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).ragVector.findUnique(input as any))),

        updateMany: procedure.input($Schema.RagVectorInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).ragVector.updateMany(input as any))),

        update: procedure.input($Schema.RagVectorInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).ragVector.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.RagVectorCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RagVectorCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RagVectorCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RagVectorCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.RagVectorCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RagVectorCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RagVectorGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RagVectorGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RagVectorCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RagVectorCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RagVectorGetPayload<T>, Context>) => Promise<Prisma.RagVectorGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.RagVectorDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RagVectorDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RagVectorDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RagVectorDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.RagVectorDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RagVectorDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RagVectorGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RagVectorGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RagVectorDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RagVectorDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RagVectorGetPayload<T>, Context>) => Promise<Prisma.RagVectorGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.RagVectorFindFirstArgs, TData = Prisma.RagVectorGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.RagVectorFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RagVectorGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RagVectorFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RagVectorFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RagVectorGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.RagVectorGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.RagVectorFindManyArgs, TData = Array<Prisma.RagVectorGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.RagVectorFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.RagVectorGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RagVectorFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RagVectorFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.RagVectorGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.RagVectorGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.RagVectorFindUniqueArgs, TData = Prisma.RagVectorGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.RagVectorFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RagVectorGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RagVectorFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RagVectorFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RagVectorGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.RagVectorGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.RagVectorUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RagVectorUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RagVectorUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RagVectorUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.RagVectorUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RagVectorUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RagVectorGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RagVectorGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RagVectorUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RagVectorUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RagVectorGetPayload<T>, Context>) => Promise<Prisma.RagVectorGetPayload<T>>
            };

    };
}
