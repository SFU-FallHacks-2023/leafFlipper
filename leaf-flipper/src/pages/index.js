import Head from 'next/head';
import Leaf from '../components/Leaf';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Leaf Turner</title>
        <meta name="description" content="Leaf flipping Next.js app" />
      </Head>

      <main>
        <h1>Click to Turn the Leaf</h1>
        <Leaf />
      </main>
    </div>
  );
}
