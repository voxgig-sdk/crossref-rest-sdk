import { CrossrefRestEntityBase } from '../CrossrefRestEntityBase';
import type { CrossrefRestSDK } from '../CrossrefRestSDK';
import type { Control } from '../types';
import type { Funder, FunderLoadMatch } from '../CrossrefRestTypes';
declare class FunderEntity extends CrossrefRestEntityBase<Funder> {
    constructor(client: CrossrefRestSDK, entopts: any);
    make(this: FunderEntity): FunderEntity;
    load(this: any, reqmatch?: FunderLoadMatch, ctrl?: Control): Promise<FunderEntity>;
}
export { FunderEntity };
