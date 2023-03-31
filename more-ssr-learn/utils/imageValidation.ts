export function isBase64Image(str: string): boolean {
  // Regular expression to match a base64-encoded image
  const regex = /^data:image\/([a-zA-Z]*);base64,([^\s]*)$/;

  // Test the input string against the regular expression
  return regex.test(str);
}
export function isImageKit(str: string): boolean {
  // Regular expression to match a base64-encoded image
  const regex = /^https:\/\/ik\.imagekit\.io/;

  // Test the input string against the regular expression
  return regex.test(str);
}
