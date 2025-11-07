import Head from "next/head"
import EditorialHero from "../components/EditorialHero"
import EditorialProjects from "../components/EditorialProjects"
import MinimalAbout from "../components/MinimalAbout"
import MinimalFooter from "../components/MinimalFooter"

export default function Home() {
  return (
    <>
      <Head>
        <title>Code by EL | Creative Technical Product Builder & Software Engineer</title>
        <meta name="description" content="Code by EL is Ella L'Esperance: creative technical product maker, Nasdaq Developer Experience engineer, and Tufts lacrosse alum building thoughtful digital experiences." />
        <meta name="keywords" content="Code by EL, Ella L'Esperance, creative technical product builder, software engineer, product engineer, Nasdaq, AI tools, build in public, UI/UX engineer, design systems, Supabase, LangChain, Next.js, human-centered design" />
        <meta name="author" content="Ella L'Esperance" />
        <meta property="og:title" content="Code by EL | Creative Technical Product Builder" />
        <meta property="og:description" content="A creative technical product maker exploring the edges of code, product, and people." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/images/favicon.png" type="image/png" />
      </Head>

      <main className="w-full">
        <EditorialHero />
        <EditorialProjects />
        <MinimalAbout />
      </main>
      <MinimalFooter />
    </>
  )
}
