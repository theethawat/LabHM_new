"use client";

import {
  Pagination as ShadcnPagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getLinkPath } from "@/lib/utils";
import _ from "lodash";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({
  currPage,
  totalPage,
  anotherKey = "",
}: {
  currPage: number;
  totalPage: number;
  anotherKey: string;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const array = Array.from({ length: totalPage }, (_, i) => i + 1);

  const createPageHref = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());

    if (anotherKey.trim()) {
      const additionalParams = new URLSearchParams(anotherKey.trim());
      additionalParams.forEach((value, key) => {
        if (value === "") {
          params.delete(key);
          return;
        }
        params.set(key, value);
      });
    }

    params.set("page", String(page));
    const query = params.toString();
    const pathWithQuery = query ? `${pathname}?${query}` : pathname;
    return getLinkPath(pathWithQuery);
  };

  return (
    <ShadcnPagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={
              currPage > 1 ? createPageHref(currPage - 1) : createPageHref(1)
            }
            className={
              currPage === 1
                ? "pointer-events-none cursor-not-allowed text-gray-400"
                : ""
            }
          />
        </PaginationItem>
        {_.map(array, (pageNum) => (
          <PaginationItem key={pageNum}>
            <PaginationLink href={createPageHref(pageNum)}>
              {pageNum}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href={
              currPage < totalPage
                ? createPageHref(currPage + 1)
                : createPageHref(totalPage)
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
