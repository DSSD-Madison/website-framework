import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeMemberFields {
    fullName: EntryFields.Symbol;
    email?: EntryFields.Symbol;
    photo?: Asset;
    role: EntryFields.Symbol;
    graduated: EntryFields.Boolean;
    linkedIn?: EntryFields.Symbol;
    personalWebsite?: EntryFields.Symbol;
}

export type TypeMember = Entry<TypeMemberFields>;
