/** Parses all comment metadata in the HTML/Markdown contents. */
declare export function meta(html: string): Array<{ [x: string]: string }>
export default meta;