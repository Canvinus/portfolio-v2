import Head from 'next/head'

export default function PageHead(props: { title: string }) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta
        property="og:title"
        content="Andrey Gruzdev - Web3 Developer"
        key="title"
      />
      <meta name={'description'} content={'Andrey Gruzdev - Web3 Developer'} />
    </Head>
  )
}
