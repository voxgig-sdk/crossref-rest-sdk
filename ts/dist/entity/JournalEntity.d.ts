import { CrossrefRestEntityBase } from '../CrossrefRestEntityBase';
import type { CrossrefRestSDK } from '../CrossrefRestSDK';
import type { Control } from '../types';
import type { Journal, JournalLoadMatch } from '../CrossrefRestTypes';
declare class JournalEntity extends CrossrefRestEntityBase<Journal> {
    constructor(client: CrossrefRestSDK, entopts: any);
    make(this: JournalEntity): JournalEntity;
    load(this: any, reqmatch?: JournalLoadMatch, ctrl?: Control): Promise<JournalEntity>;
}
export { JournalEntity };
