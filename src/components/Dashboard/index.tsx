"use client"
import React, {SVGProps, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Selection,
  ChipProps,
  SortDescriptor,
} from "@heroui/react";

// import { createCustomerWithCustomId, getCustomers } from '@/server/functions/customers';


export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function capitalize(s: string) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";
}

export const PlusIcon = ({size = 24, width, height, ...props}: IconSvgProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path d="M6 12h12" />
        <path d="M12 18V6" />
      </g>
    </svg>
  );
};

export const VerticalDotsIcon = ({size = 24, width, height, ...props}: IconSvgProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
        fill="currentColor"
      />
    </svg>
  );
};

export const SearchIcon = (props: IconSvgProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

export const ChevronDownIcon = ({strokeWidth = 1.5, ...otherProps}: IconSvgProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...otherProps}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export const columns = [
  {name: "IMG", uid: "img", sortable: true, width: 200},
  {name: "TITLE", uid: "title", sortable: true, window:500},
  {name: "DATE", uid: "date", sortable: true, width:200},
  {name: "STATUS", uid: "status", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

export const statusOptions = [
  {name: "Published", uid: "published"},
  {name: "Pending", uid: "Pending"},
  {name: "Rejected", uid: "rejected"},
];

export const blogData = [
  {
    id: 1,
    img: "/images/blog/blog-03.jpg",
    title: "9 simple ways to improve your design skills",
    status: "published",
    date: "2025-04-04"
  },
  {
    id: 2,
    img: "/images/blog/blog-03.jpg",
    title: "9 simple ways to improve your design skills",
    status: "Pending",
    date: "2025-04-04"
  },
  {
    id: 3,
    img: "/images/blog/blog-03.jpg",
    title: "9 simple ways to improve your design skills",
    status: "Rejected",
    date: "2025-04-04"
  },
  {
    id: 4,
    img: "/images/blog/blog-03.jpg",
    title: "9 simple ways to improve your design skills",
    status: "published",
    date: "2025-04-04"
  },
  {
    id: 5,
    img: "/images/blog/blog-03.jpg",
    title: "9 simple ways to improve your design skills",
    status: "published",
    date: "2025-04-04"
  },
  {
    id: 6,
    img: "/images/blog/blog-03.jpg",
    title: "9 simple ways to improve your design skills",
    status: "pending",
    date: "2025-04-04"
  }
];

const statusColorMap: Record<string, ChipProps["color"]> = {
  published: "success",
  pending: "warning",
  rejected: "danger",
};

const INITIAL_VISIBLE_COLUMNS = ["img", "title", "date", "status", "actions"];

type User = (typeof blogData)[0];


const Dashboard = () => {

  // const [customers, setCustomers] = React.useState<any[]>([]);
  
  // useEffect(() => {
  //   getData()
  // },[])
  // const getData = async() =>{
  //   const data = await getCustomers();
  //   setCustomers(data);
  // };
  const [filterValue, setFilterValue] = React.useState("");
    const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([]));
    const [visibleColumns, setVisibleColumns] = React.useState<Selection>(
      new Set(INITIAL_VISIBLE_COLUMNS),
    );
    const [statusFilter, setStatusFilter] = React.useState<Selection>("all");
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
      column: "age",
      direction: "ascending",
    });
  
    const [page, setPage] = React.useState(1);
  
    const hasSearchFilter = Boolean(filterValue);
  
    const headerColumns = React.useMemo(() => {
      if (visibleColumns === "all") return columns;
  
      return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
    }, [visibleColumns]);
  
    const filteredItems = React.useMemo(() => {
      let filteredblogData = [...blogData];
  
      if (hasSearchFilter) {
        filteredblogData = filteredblogData.filter((user) =>
          user.title.toLowerCase().includes(filterValue.toLowerCase()),
        );
      }
      if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
        filteredblogData = filteredblogData.filter((user) =>
          Array.from(statusFilter).includes(user.status),
        );
      }
  
      return filteredblogData;
    }, [blogData, filterValue, statusFilter]);
  
    const pages = Math.ceil(filteredItems.length / rowsPerPage);
  
    const items = React.useMemo(() => {
      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;
  
      return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);
  
    const sortedItems = React.useMemo(() => {
      return [...items].sort((a: User, b: User) => {
        const first = a[sortDescriptor.column as keyof User] as number;
        const second = b[sortDescriptor.column as keyof User] as number;
        const cmp = first < second ? -1 : first > second ? 1 : 0;
  
        return sortDescriptor.direction === "descending" ? -cmp : cmp;
      });
    }, [sortDescriptor, items]);
  
    const renderCell = React.useCallback((blog: any, columnKey: React.Key) => {
      const cellValue = blog[columnKey as keyof any];
    
      const slug = blog.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
  
      switch (columnKey) {
        case "img":
          return (
            <Image width={50} height={70} className="h-[70px] w-[130px] rounded-lg" src={blog.img} alt="thumb" />
          );
        case "title":
          return (
            <Link
              href={`/blog/${slug}`}
              className="relative block w-full"
            >
              <span className="text-bold text-tiny capitalize text-default-400 underline line-clamp-1">
                {blog.title}
              </span>
            </Link> 
            // <div className="flex flex-col">
            //   <p className="text-bold text-tiny capitalize text-default-400">{blog.title}</p>
            // </div>
          );
        case "date":
          return (
            <div className="flex flex-col">
              {cellValue}
            </div>
          );
        case "status":
          return (
            <Chip
              className={`capitalize ${statusColorMap[blog.status]}`} // Correctly use backticks for template literals
              color="danger"
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
            // <Chip color="success">Success</Chip>
          );
        case "actions":
          return (
            <div className="relative flex justify-end items-center gap-2">
              <Dropdown>
                <DropdownTrigger>
                  <Button isIconOnly size="sm" variant="light">
                    <VerticalDotsIcon className="text-default-300" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu className="border-gray-500 sm:max-w-[500px] -stroke w-full rounded-lg border bg-[#f8f8f8] text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none">
                  <DropdownItem key="publish" className="py-1">Publish</DropdownItem>
                  <DropdownItem key="pending" className="py-1">Pending</DropdownItem>
                  <DropdownItem key="reject" className="py-1">Reject</DropdownItem>
                  <DropdownItem key="delete" className="py-1">Delete</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          );
        default:
          return cellValue;
      }
    }, []);
  
    const onNextPage = React.useCallback(() => {
      if (page < pages) {
        setPage(page + 1);
      }
    }, [page, pages]);
  
    const onPreviousPage = React.useCallback(() => {
      if (page > 1) {
        setPage(page - 1);
      }
    }, [page]);
  
    const onRowsPerPageChange = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    }, []);
  
    const onSearchChange = React.useCallback((value?: string) => {
      if (value) {
        setFilterValue(value);
        setPage(1);
      } else {
        setFilterValue("");
      }
    }, []);
  
    const onClear = React.useCallback(() => {
      setFilterValue("");
      setPage(1);
    }, []);
  
    const topContent = React.useMemo(() => {
      return (
        <div className="flex flex-col gap-4">
          <div className="flex justify-between gap-3 items-end">
            <Input
              isClearable
              placeholder="Search by title..."
              startContent={<SearchIcon />}
              value={filterValue}
              onClear={() => onClear()}
              onValueChange={onSearchChange}
              style={{outline:'none', marginLeft:'10px'}}
              className="sm:max-w-[44%] -stroke w-full rounded-sm border bg-[#f8f8f8] text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            />
            <div className="flex gap-3">
              <Dropdown>
                <DropdownTrigger className="hidden sm:flex">
                  <Button
                    className="group relative items-center justify-center  border-gray-500 sm:max-w-[500px] -stroke w-full rounded-lg border bg-[#f8f8f8] text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    endContent={<ChevronDownIcon className="text-small" />} variant="flat"
                  >
                    Status
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  disallowEmptySelection
                  aria-label="Table Columns"
                  closeOnSelect={false}
                  selectedKeys={statusFilter}
                  selectionMode="multiple"
                  onSelectionChange={setStatusFilter}
                  className="p-3 border-gray-500 rounded-lg w-[150px] sm:max-w-[500px] -stroke border bg-[#f8f8f8] text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                >
                  {statusOptions.map((status) => (
                    <DropdownItem key={status.uid} className="py-2 capitalize text-black dark:text-white">
                      {capitalize(status.name)}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
              <Link href='/blog-submmit' className="w-[150px] flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
                Add New
              </Link>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-default-400 text-small">Total {blogData.length} blogs</span>
            <label className="flex items-center text-default-400 text-small">
              page:
              <select
                className="bg-transparent outline-none text-default-400 text-small"
                onChange={onRowsPerPageChange}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
            </label>
          </div>
        </div>
      );
    }, [
      filterValue,
      statusFilter,
      visibleColumns,
      onSearchChange,
      onRowsPerPageChange,
      blogData.length,
      hasSearchFilter,
    ]);
  
    const bottomContent = React.useMemo(() => {
      return (
        <div className="py-2 px-2 flex justify-between items-center">
          {/* <span className="w-[30%] text-small text-default-400">
            {selectedKeys === "all"
              ? "All items selected"
              : `${selectedKeys.size} of ${filteredItems.length} selected`}
          </span> */}
          <Pagination
            isCompact
            showControls
            showShadow
            color="primary"
            page={page}
            total={pages}
            onChange={setPage}
            // style={{ backgroundColor: "#f0f0f0", borderRadius: "5px" }}
            className="border-gray-500 -stroke rounded-lg border bg-[#f8f8f8] text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
          />
          <div className="hidden sm:flex w-[30%] justify-end gap-2">
            <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}
              className="p-2 border-gray-500 -stroke rounded-lg border bg-[#f8f8f8] text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            >
              Previous
            </Button>
            <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}
              className="p-2 border-gray-500 -stroke rounded-lg border bg-[#f8f8f8] text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            >
              Next
            </Button>
          </div>
        </div>
      );
    }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            {/* {customers.map((customer) => (
              <li key={customer.customerId}>{customer.customerId}</li>
            ))}
            <form action={createCustomerWithCustomId}>
              <input type="text" name="customerId" placeholder="add a new customer ID"></input>
              <button type="submit" className="border-2 border-red-500 p-1">
                submit
              </button>
            </form> */}
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <Table
                isHeaderSticky
                aria-label="Example table with custom cells, pagination and sorting"
                bottomContent={bottomContent}
                bottomContentPlacement="outside"
                selectedKeys={selectedKeys}
                selectionMode="none"
                sortDescriptor={sortDescriptor}
                topContent={topContent}
                topContentPlacement="outside"
                onSelectionChange={setSelectedKeys}
                onSortChange={setSortDescriptor}
              >
                <TableHeader columns={headerColumns}>
                  {(column) => (
                    <TableColumn
                      key={column.uid}
                      // align={column.uid === "actions" ? "start" : "start"}
                      align="center"
                      allowsSorting={column.sortable}
                      className={`w-[${column.width}px] border-b dark:border-gray-700`}
                      
                    >
                      {column.name}
                    </TableColumn>
                  )}
                </TableHeader>
                <TableBody emptyContent={"No blogData found"} items={sortedItems}>
                  {(item) => (
                    <TableRow key={item.id}
                      className="border-b dark:border-gray-700"
                    >
                      {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

export default Dashboard;
