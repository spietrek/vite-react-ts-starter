export const openInNewTab = (url: string): void => {
  if (url.length > 0) {
    const win = window.open(url, '_blank')
    win?.focus()
  }
}
