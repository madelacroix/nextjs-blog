import Head from "next/head";
import Layout, {siteTitle} from "../components/layout";
import utilStyles from "../styles/utils.module.css"
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {
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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br/>
              <small className={utilStyles.lightText}>              
                <Date dateString={date}/>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}