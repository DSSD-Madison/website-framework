import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeProjectFields {
    preview: Asset;
    title: EntryFields.Symbol;
    team: Entry<Record<string, any>>[];
    description: EntryFields.RichText;
}

export type TypeProject = Entry<TypeProjectFields>;
