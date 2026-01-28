import {
  Pagination as ShadcnPagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import _ from "lodash";

export default function Pagination({
  currPage,
  totalPage,
  anotherKey = "",
}: {
  currPage: number;
  totalPage: number;
  anotherKey: string;
}) {
  const array = Array.from({ length: totalPage }, (_, i) => i + 1);
  return (
    <ShadcnPagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={currPage > 1 ? `?page=${currPage - 1}&${anotherKey}` : "#"}
            className={
              currPage === 1
                ? "pointer-events-none cursor-not-allowed text-gray-400"
                : ""
            }
          />
        </PaginationItem>
        {_.map(array, (pageNum) => (
          <PaginationItem
            key={pageNum}
            active={pageNum === currPage ? true : false}
          >
            <PaginationLink href={`?page=${pageNum}&${anotherKey}`}>
              {pageNum}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href={
              currPage < totalPage ? `?page=${currPage + 1}&${anotherKey}` : "#"
            }
            className={
              currPage === totalPage
                ? "pointer-events-none cursor-not-allowed text-gray-400"
                : ""
            }
          />
        </PaginationItem>
      </PaginationContent>
    </ShadcnPagination>
  );
}
