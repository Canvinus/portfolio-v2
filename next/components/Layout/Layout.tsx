import Footer from './Footer'
import Header from './Header'

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}
