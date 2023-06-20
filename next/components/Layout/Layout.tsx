import Footer from './Footer'

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      {props.children}
      <Footer />
    </>
  )
}
