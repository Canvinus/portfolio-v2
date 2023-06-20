interface NavLink {
  label: string
  href: string
}

const Links = [
  { label: 'Me', href: '/#me' },
  { label: 'Projects', href: '/#projects' },
]

export { type NavLink, Links }
