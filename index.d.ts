/** Parses all comment metadata in the HTML (or any string). */
declare export function meta(html: string): Array<{ [x: string]: string }>
export default meta;