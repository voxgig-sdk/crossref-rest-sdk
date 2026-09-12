import { FunderEntity } from './entity/FunderEntity';
import { JournalEntity } from './entity/JournalEntity';
import { MemberEntity } from './entity/MemberEntity';
import { TypeEntity } from './entity/TypeEntity';
import { WorkEntity } from './entity/WorkEntity';
export type * from './CrossrefRestTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { CrossrefRestEntityBase } from './CrossrefRestEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class CrossrefRestSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Funder(entopts?: Record<string, any>): FunderEntity;
    Journal(entopts?: Record<string, any>): JournalEntity;
    Member(entopts?: Record<string, any>): MemberEntity;
    Type(entopts?: Record<string, any>): TypeEntity;
    Work(entopts?: Record<string, any>): WorkEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): CrossrefRestSDK;
    tester(testopts?: any, sdkopts?: any): CrossrefRestSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof CrossrefRestSDK;
export { stdutil, config, BaseFeature, CrossrefRestEntityBase, CrossrefRestSDK, SDK, };
