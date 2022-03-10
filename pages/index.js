import Head from "next/head";
import Layout, {siteTitle} from "../components/layout";
import utilStyles from "../styles/utils.module.css"

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello Bean, i am the Supreme Lean Green Bean</p>
        <p>
          (This is my first ever Next.js website. Build one like this on <a href="https://nextjs.org/learn">here</a>.)
        </p>
        <p>
          Look at my <a href="./posts/first-post">First Post</a>
        </p>
      </section>
    </Layout>
  )
}