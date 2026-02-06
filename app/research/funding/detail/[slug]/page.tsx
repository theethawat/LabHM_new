import FundingDetailPage from "./funding-detail-page";
import { ResearchFundDataTranslations } from "@/translations/research-fund";
import _ from "lodash";

// Create like this for next if it contain the api calling
export default async function FundingDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <FundingDetailPage fundingId={slug} />;
}

export async function generateStaticParams() {
  // Return an array of objects, each with the 'slug' property matching the dynamic segment name
  return _.map(ResearchFundDataTranslations, (eachData: any) => ({
    slug: eachData.id, // Ensure the slug is a string
  }));
}
