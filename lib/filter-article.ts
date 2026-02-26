import _ from "lodash";
import { News, Research, NewsTag, ResearchTag } from "@/types";

const filterTagNews = (articles: News[], tag: string) => {
  if (!tag || tag === "" || tag === NewsTag.all) {
    return articles;
  }
  return articles.filter((article) => article.tag === tag);
};

const filterTagResearch = (articles: Research[], tag: ResearchTag | string) => {
  if (!tag || tag === "") {
    return articles;
  }

  if (!Object.values(ResearchTag).includes(tag as ResearchTag)) {
    return articles;
  }

  const researchTag = tag as ResearchTag;

  return _.filter(articles, (article) => {
    return _.includes(article?.tags, researchTag);
  });
};

export const filterArticles = (
  article: News[] | Research[],
  {
    page = 1,
    size = 10,
    tag = "",
  }: { page: number; size: number; tag: string },
) => {
  let filteredArticles = article;

  // Filter by tag
  if (article.length > 0 && "tag" in article[0]) {
    filteredArticles = filterTagNews(article as News[], tag);
  }

  if (article.length > 0 && "tags" in article[0]) {
    filteredArticles = filterTagResearch(article as Research[], tag);
  }

  const total = _.size(filteredArticles);
  const totalPage = Math.ceil(total / size);

  // Paginate
  const startIndex = (page - 1) * size;
  const endIndex = startIndex + size;
  const paginatedArticles = filteredArticles?.slice(startIndex, endIndex);

  return {
    rows: paginatedArticles,
    total,
    totalPage,
  };
};
