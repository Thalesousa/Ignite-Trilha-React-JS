import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Title post em Lorem ipsum dolor sit amet.</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident 
              rerum quos expedita suscipit quis mollitia!
            </p>
          </a>

          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Title post em Lorem ipsum dolor sit amet.</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident 
              rerum quos expedita suscipit quis mollitia!
            </p>
          </a>

          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Title post em Lorem ipsum dolor sit amet.</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident 
              rerum quos expedita suscipit quis mollitia!
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ],{
    fetch: ['post.title', 'post.content'],
    pageSize: 100,
  })

  console.log(response)

  return {
    props: {}
  }
}