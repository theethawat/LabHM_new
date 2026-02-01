import FundingDetailPage from "./funding-detail-page";

// Create like this for next if it contain the api calling
export default async function FundingDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <FundingDetailPage fundingId={slug} />;
}
