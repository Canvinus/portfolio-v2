const scrollIntoTheView = (id: string) => {
  let element = document.getElementById(id) as HTMLElement
  if (!element) return

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  })
}

export { scrollIntoTheView }
