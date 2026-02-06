import FundingDetailPage from "./funding-detail-page";
import { ResearchFundDataTranslations } from "@/translations/research-fund";

// Generate static params for all funding IDs
export async function generateStaticParams() {
  return Object.keys(ResearchFundDataTranslations).map((fundingId) => ({
    slug: fundingId,
  }));
}

// Create like this for next if it contain the api calling
export default async function FundingDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <FundingDetailPage fundingId={slug} />;
}
