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

        createMany: procedure.input($Schema.AiReadinessAssessmentInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiReadinessAssessment.createMany(input as any))),

        create: procedure.input($Schema.AiReadinessAssessmentInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiReadinessAssessment.create(input as any))),

        deleteMany: procedure.input($Schema.AiReadinessAssessmentInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiReadinessAssessment.deleteMany(input as any))),

        delete: procedure.input($Schema.AiReadinessAssessmentInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiReadinessAssessment.delete(input as any))),

        findFirst: procedure.input($Schema.AiReadinessAssessmentInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).aiReadinessAssessment.findFirst(input as any))),

        findMany: procedure.input($Schema.AiReadinessAssessmentInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).aiReadinessAssessment.findMany(input as any))),

        findUnique: procedure.input($Schema.AiReadinessAssessmentInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).aiReadinessAssessment.findUnique(input as any))),

        updateMany: procedure.input($Schema.AiReadinessAssessmentInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiReadinessAssessment.updateMany(input as any))),

        update: procedure.input($Schema.AiReadinessAssessmentInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiReadinessAssessment.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.AiReadinessAssessmentCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiReadinessAssessmentCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiReadinessAssessmentCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiReadinessAssessmentCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.AiReadinessAssessmentCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiReadinessAssessmentCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AiReadinessAssessmentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AiReadinessAssessmentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiReadinessAssessmentCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiReadinessAssessmentCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AiReadinessAssessmentGetPayload<T>, Context>) => Promise<Prisma.AiReadinessAssessmentGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.AiReadinessAssessmentDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiReadinessAssessmentDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiReadinessAssessmentDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiReadinessAssessmentDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.AiReadinessAssessmentDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiReadinessAssessmentDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AiReadinessAssessmentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AiReadinessAssessmentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiReadinessAssessmentDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiReadinessAssessmentDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AiReadinessAssessmentGetPayload<T>, Context>) => Promise<Prisma.AiReadinessAssessmentGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.AiReadinessAssessmentFindFirstArgs, TData = Prisma.AiReadinessAssessmentGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AiReadinessAssessmentFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AiReadinessAssessmentGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AiReadinessAssessmentFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AiReadinessAssessmentFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AiReadinessAssessmentGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AiReadinessAssessmentGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.AiReadinessAssessmentFindManyArgs, TData = Array<Prisma.AiReadinessAssessmentGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.AiReadinessAssessmentFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.AiReadinessAssessmentGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AiReadinessAssessmentFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AiReadinessAssessmentFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.AiReadinessAssessmentGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.AiReadinessAssessmentGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.AiReadinessAssessmentFindUniqueArgs, TData = Prisma.AiReadinessAssessmentGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AiReadinessAssessmentFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AiReadinessAssessmentGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AiReadinessAssessmentFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AiReadinessAssessmentFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AiReadinessAssessmentGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AiReadinessAssessmentGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.AiReadinessAssessmentUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiReadinessAssessmentUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiReadinessAssessmentUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiReadinessAssessmentUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.AiReadinessAssessmentUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiReadinessAssessmentUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AiReadinessAssessmentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AiReadinessAssessmentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiReadinessAssessmentUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiReadinessAssessmentUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AiReadinessAssessmentGetPayload<T>, Context>) => Promise<Prisma.AiReadinessAssessmentGetPayload<T>>
            };

    };
}
