import { ContentError, jsonErrorLine } from './diagnostics.mjs';

// Splits a page into its JSON header (between `---` lines) and Markdown body.
// `bodyLine` is the 0-based line where the body starts, used to map Markdown line numbers back to the file.
export function parseFrontmatter(source, file) {
  const text = source.replace(/\r\n?/g, '\n');
  const lines = text.split('\n');
  if (lines[0].trim() !== '---') {
    return { data: {}, body: text, bodyLine: 0 };
  }
  const end = lines.findIndex((line, i) => i > 0 && line.trim() === '---');
  if (end < 0) {
    throw new ContentError(file, 1, 'JSON header opens with --- but is never closed by another --- line');
  }
  const json = lines.slice(1, end).join('\n');
  let data;
  try {
    data = json.trim() ? JSON.parse(json) : {};
  } catch (error) {
    throw new ContentError(file, jsonErrorLine(error, json) + 1, `Invalid JSON header: ${error.message}`);
  }
  if (typeof data !== 'object' || data === null || Array.isArray(data)) {
    throw new ContentError(file, 2, 'JSON header must be an object ({ ... })');
  }
  return { data, body: lines.slice(end + 1).join('\n'), bodyLine: end + 1 };
}
