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

        createMany: procedure.input($Schema.MembershipInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).membership.createMany(input as any))),

        create: procedure.input($Schema.MembershipInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).membership.create(input as any))),

        deleteMany: procedure.input($Schema.MembershipInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).membership.deleteMany(input as any))),

        delete: procedure.input($Schema.MembershipInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).membership.delete(input as any))),

        findFirst: procedure.input($Schema.MembershipInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).membership.findFirst(input as any))),

        findMany: procedure.input($Schema.MembershipInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).membership.findMany(input as any))),

        findUnique: procedure.input($Schema.MembershipInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).membership.findUnique(input as any))),

        updateMany: procedure.input($Schema.MembershipInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).membership.updateMany(input as any))),

        update: procedure.input($Schema.MembershipInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).membership.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.MembershipCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MembershipCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MembershipCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MembershipCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.MembershipCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MembershipCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MembershipGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MembershipGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MembershipCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MembershipCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MembershipGetPayload<T>, Context>) => Promise<Prisma.MembershipGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.MembershipDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MembershipDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MembershipDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MembershipDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.MembershipDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MembershipDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MembershipGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MembershipGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MembershipDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MembershipDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MembershipGetPayload<T>, Context>) => Promise<Prisma.MembershipGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.MembershipFindFirstArgs, TData = Prisma.MembershipGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.MembershipFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MembershipGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MembershipFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MembershipFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MembershipGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MembershipGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.MembershipFindManyArgs, TData = Array<Prisma.MembershipGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.MembershipFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.MembershipGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MembershipFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MembershipFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.MembershipGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.MembershipGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.MembershipFindUniqueArgs, TData = Prisma.MembershipGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.MembershipFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MembershipGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MembershipFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MembershipFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MembershipGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MembershipGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.MembershipUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MembershipUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MembershipUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MembershipUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.MembershipUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MembershipUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MembershipGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MembershipGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MembershipUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MembershipUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MembershipGetPayload<T>, Context>) => Promise<Prisma.MembershipGetPayload<T>>
            };

    };
}
