import Head from "next/head";

import styles from "../styles/Home.module.css";

import type { NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

interface IProps {
  query: ParsedUrlQuery
  asPath?: string | undefined
}

const Home: NextPage<IProps> = (props: IProps) => {
  const promotion = "https://stage-images.earthtoday.com/eyJidWNrZXQiOiJlYXJ0aHRvZGF5LXN0YWdlLWltYWdlcyIsImtleSI6Ii91c2Vycy82MzAyNzY0NTE1OTgxMDA4ODk2L3Byb21vdGlvbl9zaGFyaW5nLzVkNjE3NjZiLWMwZTYtNGM3Yi1iNmFjLThkZjQ5ZDBjNzBiNS1lZDY4YjRhYi0wNzVkLTQ0NWItYjlkMS1lYTI1OTQxNzk4M2YucG5nIiwiZWRpdHMiOnsicm90YXRlIjpudWxsLCJyZXNpemUiOnsid2lkdGgiOjEyMDAsImhlaWdodCI6NjI3LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjowLCJnIjowLCJiIjowLCJhbHBoYSI6MH19fX0="
  const taylor = "https://stage-images.earthtoday.com/eyJidWNrZXQiOiJlYXJ0aHRvZGF5LXN0YWdlLWltYWdlcyIsImtleSI6Ii91c2Vycy8yODgwODM4ODM5OTQwMDY3MzI4L2xpbmtzLzEwMjI3OTQxODAyMzgyOTg3MjY0LzA0YzQ4ZjUyLWM0OTEtNDY0ZS04NTVjLTViMjc3MzI4ODUwZi1hYjY3NjE2ZDAwMDBiMjczZTc4N2NmZmVjMjBhYTJhMzk2YTYxNjQ3IiwiZWRpdHMiOnsicm90YXRlIjpudWxsLCJyZXNpemUiOnsiZml0IjoiY292ZXIifX19"
  const ogImage = !!props.query.promoName ? promotion : taylor;
  const ogUrl = `https://www.nguyenduythuan.dev${props.asPath}`

  return (
    <div
      className={styles.container}
      style={{
        color: "white",
        backgroundSize: "cover",
        backgroundImage: `url(
          https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg
        )`,
        backgroundColor: `rgba(0,0,0,0.5)`,
        backgroundBlendMode: "hard-light",
      }}
    >
      <Head>
        <title>Nguyen Duy Thuan</title>
        <meta property="al:ios:url" content="https://uonearth.urbn8.io" />
        <meta property="al:ios:app_store_id" content="6470965614" />
        <meta property="al:ios:app_name" content="Uon.Earth" />

        {/* <meta property="al:android:url" content="uonearth://" />
        <meta property="al:android:package" content="uon.earth" />
        <meta property="al:android:app_name" content="Uon.Earth" /> */}


        <meta name="og:title" content="Nguyen Duy Thuan name=og:title" />
        <meta name="og:type" content="website" />
        <meta property="og:title" content="Nguyen Duy Thuan property=og:title" />
        <meta property="og:type" content="website" />

        <meta
          name="description"
          content="A website created by Nguyen Duy Thuan"
        />
        <meta
          property="description"
          content="A website created by Nguyen Duy Thuan"
        />
        <meta name="og:site_name" content="NguyenDuyThuan" />

        <meta name="og:image" content={ogImage} />
        <meta name="og:image:width" content="720" />
        <meta name="og:image:height" content="480" />
        <meta name="og:url" content={ogUrl} />
        <meta name="og:rich_attachment" content="true" />

        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="720" />
        <meta property="og:image:height" content="480" />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:rich_attachment" content="true" />

        <link rel="icon" href="/coin.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Nguyễn Duy Thuận</h1>

        <p className={styles.description}>Javascript Developer</p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nguyen Duy Thuan &copy; {new Date().getFullYear()}
        </a>
      </footer>
    </div>
  );
};

Home.displayName = "Home";
Home.getInitialProps = async (context): Promise<IProps> => {
  console.log('context.query ======== :>> ', context.query);

  return {
    query: context.query,
    asPath: context.asPath,
  }
};

export default Home;
