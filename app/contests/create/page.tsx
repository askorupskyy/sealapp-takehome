import { ContestCreateForm } from "@/components/feat/contest-create/ui";
import { Layout } from "@/components/layout/layout";
import { LayoutTitle } from "@/components/layout/title";

export default function CreateContestPage() {
  return (
    <Layout>
      <LayoutTitle>Create Contest</LayoutTitle>

      <ContestCreateForm />
    </Layout>
  );
}
