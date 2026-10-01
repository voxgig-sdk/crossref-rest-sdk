export interface Funder {
    id?: string;
    message?: Record<string, any>;
    messagetype?: string;
    status?: string;
}
export interface FunderLoadMatch {
    id: string;
}
export interface Journal {
    id?: string;
    message?: Record<string, any>;
    messagetype?: string;
    status?: string;
}
export interface JournalLoadMatch {
    id: string;
}
export interface Member {
    id?: string;
    message?: Record<string, any>;
    messagetype?: string;
    status?: string;
}
export interface MemberLoadMatch {
    id: string;
}
export interface Type {
    id?: string;
    message?: Record<string, any>;
    messagetype?: string;
    status?: string;
}
export interface TypeLoadMatch {
    id: string;
}
export interface Work {
    id?: string;
    message?: Record<string, any>;
    messagetype?: string;
    messageversion?: string;
    status?: string;
}
export interface WorkLoadMatch {
    id: string;
    mailto?: string;
}
