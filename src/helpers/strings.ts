// create function that accepts a string of html, replaces html tags not next to each other with an empty string, and replaces html tags next to each other with a single space string
export const removeHtmlTags = (html: string): string => {
  const regex = /(<([^>]+)>)/gi
  const regex2 = /(<([^>]+)>)(<([^>]+)>)/gi

  const htmlWithoutTagsNextToEachOther = html.replace(regex2, ' ')
  const htmlWithoutTags = htmlWithoutTagsNextToEachOther.replace(regex, '')
  return htmlWithoutTags
}
