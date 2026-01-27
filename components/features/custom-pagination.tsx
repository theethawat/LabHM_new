import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import _ from "lodash";

export default function CustomPagination({
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
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={currPage > 1 ? `?page=${currPage - 1}&${anotherKey}` : "#"}
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
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href={
              currPage < totalPage ? `?page=${currPage + 1}&${anotherKey}` : "#"
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
