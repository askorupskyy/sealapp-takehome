import { ContestCreateForm } from "@/components/feat/contest-create/ui";
import { Layout } from "@/components/layout/layout";
import { LayoutTitle } from "@/components/layout/title";

export default function CreateContestPage() {
  return (
    <>
      <div className="pattern-zigzag-3d pattern-amber-800 pattern-bg-transparent pattern-opacity-80 w-full h-full left-0 top-0 absolute z-0"></div>
      <Layout>
        <LayoutTitle>Create Contest 🏆</LayoutTitle>

        <ContestCreateForm />
      </Layout>
    </>
  );
}
