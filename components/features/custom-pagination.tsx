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
}: {
  currPage: number;
  totalPage: number;
}) {
  const array = Array.from({ length: totalPage }, (_, i) => i + 1);
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={currPage > 1 ? `?page=${currPage - 1}` : "#"}
          />
        </PaginationItem>
        {_.map(array, (pageNum) => (
          <PaginationItem
            key={pageNum}
            active={pageNum === currPage ? true : false}
          >
            <PaginationLink href={`?page=${pageNum}`}>{pageNum}</PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href={currPage < totalPage ? `?page=${currPage + 1}` : "#"}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
