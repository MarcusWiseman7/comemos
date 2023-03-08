import type { SanityImageAssetDocument } from '@sanity/client';

export interface ICard {
    title: string;
    pic: SanityImageAssetDocument;
    ingredients: [string],
    steps: [string],
    _id: string;
};