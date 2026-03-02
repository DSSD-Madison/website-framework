import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeGetInvolvedSectionFields {
    heading?: EntryFields.Symbol;
    text?: EntryFields.Symbol;
    path?: EntryFields.Symbol;
    image?: Asset;
}

export type TypeGetInvolvedSection = Entry<TypeGetInvolvedSectionFields>;
