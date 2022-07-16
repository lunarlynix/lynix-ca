import Head from "next/head";
import Navbar from "../components/navbar";
import HomeHeader from "../components/headers/homeHeader";

function Home({ homepage_options, player_count, news }) {
  return (
    <div className="">
      <Head>
        <title>Lynix</title>
        <meta name="description" content="Welcome to BloodyARK, The perfect Ark: Survival Evolved experience. This server was established in 2017 and is still running strong as one of the biggest unofficial ark communities."/>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer" />
      </Head>

      <div className="flex flex-col h-screen">
        <Navbar />
        <HomeHeader text={homepage_options.headertext} players={player_count.players} />
      </div>
      <main className="">
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://bloody-ark.com/api/options/homepage_options"
  );
  const homepage_options = await res.json();

  const res_player_count = await fetch(
    "https://bloody-ark.com/api/player_count"
  );

  const player_count = await res_player_count.json();

  const res_news = await fetch(`https://bloody-ark.com/api/news`);
  const news_data = await res_news.json();

  return {
    props: {
      homepage_options,
      player_count,
      news: news_data
    },
  };
}

export default Home;
