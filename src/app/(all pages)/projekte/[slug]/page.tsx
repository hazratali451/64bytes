import SingleProjekte from "@/components/projekte/SingleProjekte";

// app/projects/[slug]/page.tsx
export default async function ProjectPage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <SingleProjekte slug={slug} />;
}
