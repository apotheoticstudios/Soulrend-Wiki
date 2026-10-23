// MiniSearch settings shared by the build (which creates the index) and the browser (which loads it).
// They must match, or the serialized index can't be loaded.
export const SEARCH_OPTIONS = {
  fields: ['title', 'aliases', 'items', 'headings', 'category', 'text'],
  storeFields: ['title', 'path', 'category', 'summary', 'icon'],
  searchOptions: {
    boost: { title: 5, aliases: 4, items: 3, headings: 2, category: 1.5 },
    prefix: true,
    fuzzy: 0.2,
  },
};
