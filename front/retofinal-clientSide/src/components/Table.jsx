import { useEffect } from "react";
import {
  usePagination,
  useTable,
  useSortBy,
  //useFilters,
  useGlobalFilter,
  //   useAsyncDebounce
} from "react-table/dist/react-table.development";
import TableContainer from "../containers/TableContainer";
import GlobalFilter from "./GlobalFilter";

export default function Table({
  data,
  columns,
  fetchData,
  pageCount: controlledPageCount,
}) {
  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0},
 //     manualPagination: true,
     // pageCount: controlledPageCount,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    canPreviousPage,
    canNextPage,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    nextPage,
    previousPage,
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
    page,
    pageOptions,
    pageCount,
    gotoPage,
    setPageSize,
  } = tableInstance;

  useEffect(() => {
    fetchData();
  }, [ fetchData]);

  return (
    <div>
      <pre>
        <code>
          {JSON.stringify(
            {
              state,
              pageCount,
              canNextPage,
              canPreviousPage,
            },
            null,
            2
          )}
        </code>
      </pre>
      <TableContainer>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
            <tr>
              <th
                colSpan={visibleColumns.length}
                style={{
                  textAlign: "left",
                }}
              >
                <GlobalFilter
                  preGlobalFilteredRows={preGlobalFilteredRows}
                  globalFilter={state.globalFilter}
                  setGlobalFilter={setGlobalFilter}
                />
              </th>
            </tr>
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableContainer>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => {nextPage(); console.log(state.pageIndex)}} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {state.pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={state.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={state.pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
