interface NavLink {
  label: string
  href: string
}

const Links = [
  { label: 'Me', href: '/#me' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Hacks', href: '/#hacks' },
]

export { type NavLink, Links }
