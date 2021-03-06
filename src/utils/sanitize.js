export default {
  allowedTags: [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'blockquote',
    'p',
    'a',
    'ul',
    'ol',
    'nl',
    'li',
    'b',
    'i',
    'strong',
    'em',
    'strike',
    'hr',
    'br',
    'div',
    'img',
    'span',
    'figure',
    'table',
    'tbody',
    'thead',
    'tr',
    'th',
    'td',
    'sup',
  ],
  disallowedTagsMode: 'discard',
  allowedAttributes: {
    a: ['href', 'name', 'target', 'class'],
    // We don't currently allow img itself by default, but this
    // would make sense if we did. You could add srcset here,
    // and if you do the URL is checked for safety
    img: ['src', 'height', 'width', 'alt'],
    div: ['class'],
    h1: ['class', 'style'],
    h2: ['class', 'style'],
    h3: ['class', 'style'],
    h4: ['class', 'style'],
    h5: ['class', 'style'],
    h6: ['class', 'style'],
    p: ['class', 'style'],
    span: ['class', 'style'],
    strong: ['class', 'style'],
    em: ['class', 'style'],
    td: ['colspan']
  },
  // Lots of these won't come up by default because we don't allow them
  selfClosing: [
    'img',
    'br',
    'hr',
    'area',
    'base',
    'basefont',
    'input',
    'link',
    'meta',
  ],
  // URL schemes we permit
  allowedSchemes: ['https', 'mailto'],
  allowedSchemesByTag: {},
  allowedSchemesAppliedToAttributes: ['href', 'src', 'cite'],
  allowProtocolRelative: true,
}