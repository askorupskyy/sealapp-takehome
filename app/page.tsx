import { Layout } from "@/components/layout/layout";

export default function Home() {
  return (
    <Layout>
      <a className="underline text-lg" href="/contests/create">
        Create contest
      </a>
    </Layout>
  );
}
