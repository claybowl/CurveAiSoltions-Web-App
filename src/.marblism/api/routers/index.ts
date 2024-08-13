/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createAccountRouter from "./Account.router";
import createUserRouter from "./User.router";
import createSessionRouter from "./Session.router";
import createRoleRouter from "./Role.router";
import createArticleRouter from "./Article.router";
import createAiReadinessAssessmentRouter from "./AiReadinessAssessment.router";
import createMessageRouter from "./Message.router";
import createRagVectorRouter from "./RagVector.router";
import createMembershipRouter from "./Membership.router";
import createServiceRouter from "./Service.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as SessionClientType } from "./Session.router";
import { ClientType as RoleClientType } from "./Role.router";
import { ClientType as ArticleClientType } from "./Article.router";
import { ClientType as AiReadinessAssessmentClientType } from "./AiReadinessAssessment.router";
import { ClientType as MessageClientType } from "./Message.router";
import { ClientType as RagVectorClientType } from "./RagVector.router";
import { ClientType as MembershipClientType } from "./Membership.router";
import { ClientType as ServiceClientType } from "./Service.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        account: createAccountRouter(router, procedure),
        user: createUserRouter(router, procedure),
        session: createSessionRouter(router, procedure),
        role: createRoleRouter(router, procedure),
        article: createArticleRouter(router, procedure),
        aiReadinessAssessment: createAiReadinessAssessmentRouter(router, procedure),
        message: createMessageRouter(router, procedure),
        ragVector: createRagVectorRouter(router, procedure),
        membership: createMembershipRouter(router, procedure),
        service: createServiceRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    account: AccountClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
    role: RoleClientType<AppRouter>;
    article: ArticleClientType<AppRouter>;
    aiReadinessAssessment: AiReadinessAssessmentClientType<AppRouter>;
    message: MessageClientType<AppRouter>;
    ragVector: RagVectorClientType<AppRouter>;
    membership: MembershipClientType<AppRouter>;
    service: ServiceClientType<AppRouter>;
}
