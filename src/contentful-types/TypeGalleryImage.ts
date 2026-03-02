import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeGalleryImageFields {
    photo: Asset;
    tags?: Entry<Record<string, any>>[];
    caption?: EntryFields.Symbol;
    title?: EntryFields.Symbol;
}

export type TypeGalleryImage = Entry<TypeGalleryImageFields>;
