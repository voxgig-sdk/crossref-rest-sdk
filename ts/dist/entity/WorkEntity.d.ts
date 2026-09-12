import { CrossrefRestEntityBase } from '../CrossrefRestEntityBase';
import type { CrossrefRestSDK } from '../CrossrefRestSDK';
import type { Control } from '../types';
import type { Work, WorkLoadMatch } from '../CrossrefRestTypes';
declare class WorkEntity extends CrossrefRestEntityBase<Work> {
    constructor(client: CrossrefRestSDK, entopts: any);
    make(this: WorkEntity): WorkEntity;
    load(this: any, reqmatch?: WorkLoadMatch, ctrl?: Control): Promise<WorkEntity>;
}
export { WorkEntity };
