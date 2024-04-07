export function slugify(input: string) {
  return input.split(' ').join('-').toLowerCase();
}
