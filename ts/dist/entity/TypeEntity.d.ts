import { CrossrefRestEntityBase } from '../CrossrefRestEntityBase';
import type { CrossrefRestSDK } from '../CrossrefRestSDK';
import type { Control } from '../types';
import type { Type, TypeLoadMatch } from '../CrossrefRestTypes';
declare class TypeEntity extends CrossrefRestEntityBase<Type> {
    constructor(client: CrossrefRestSDK, entopts: any);
    make(this: TypeEntity): TypeEntity;
    load(this: any, reqmatch?: TypeLoadMatch, ctrl?: Control): Promise<TypeEntity>;
}
export { TypeEntity };
