import Head from 'next/head'

export default function PageHead(props: { title: string }) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta
        property="og:title"
        content="Andrey Gruzdev - Software Engineer"
        key="title"
      />
    </Head>
  )
}
