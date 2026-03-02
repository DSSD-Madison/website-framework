import type { Entry, EntryFields } from "contentful";

export interface TypeBlogPostFields {
    author: Entry<Record<string, any>>;
    title: EntryFields.Symbol;
    body: EntryFields.RichText;
}

export type TypeBlogPost = Entry<TypeBlogPostFields>;
