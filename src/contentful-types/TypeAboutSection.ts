import type { Entry, EntryFields } from "contentful";

export interface TypeAboutSectionFields {
    title?: EntryFields.Symbol;
    info?: EntryFields.RichText;
}

export type TypeAboutSection = Entry<TypeAboutSectionFields>;
