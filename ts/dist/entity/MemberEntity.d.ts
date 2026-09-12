import { CrossrefRestEntityBase } from '../CrossrefRestEntityBase';
import type { CrossrefRestSDK } from '../CrossrefRestSDK';
import type { Control } from '../types';
import type { Member, MemberLoadMatch } from '../CrossrefRestTypes';
declare class MemberEntity extends CrossrefRestEntityBase<Member> {
    constructor(client: CrossrefRestSDK, entopts: any);
    make(this: MemberEntity): MemberEntity;
    load(this: any, reqmatch?: MemberLoadMatch, ctrl?: Control): Promise<MemberEntity>;
}
export { MemberEntity };
