import { Fragment, useCallback } from "react";
import {
  usePagination,
  useTable,
  useSortBy,
  useGlobalFilter,
  useExpanded,
} from "react-table/dist/react-table.development";
import TableContainer from "../containers/TableContainer";
import GlobalFilter from "./GlobalFilter";

export default function Table({
  columns,
  data,
}) {
  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 10},
    },
    useGlobalFilter,
    useSortBy,
    useExpanded,
    usePagination,
  );

  const {
    canPreviousPage,
    canNextPage,
    getTableProps,
    getTableBodyProps,
    headerGroups,
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

 // console.log(tableInstance)
  
  const renderRowSubComponent = useCallback(
    
    ({ row, data }) => (
      <pre
        style={{
          fontSize: '10px',
        }}
      >
        <h1>Productos:</h1>
        {data.map(p => {
          if (p.id === row.values.id){
            console.log(p)
            return <h2>{p.productoList.map(l => {
              
              return <ul>
                <li>{l.nombreProducto}</li>
                <ul>
                  <li>Cantidad: {l.cantidad} unidades</li>
                  <li>Precio Unitario: ${l.precio}</li>
                </ul>
              </ul>;
            })}</h2>
          }
          return "";
        } )}
      </pre>
    ),
    []
  )

  return (
    <div>
      <TableContainer>
        <table {...getTableProps()}>
          <thead>
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
            
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <Fragment>
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
                {row.isExpanded ? (
                  <tr>
                    <td colSpan={visibleColumns.length}>
                      {/*
                          Inside it, call our renderRowSubComponent function. In reality,
                          you could pass whatever you want as props to
                          a component like this, including the entire
                          table instance. But for this example, we'll just
                          pass the row
                        */}
                      {renderRowSubComponent({ row, data })}
                    </td>
                  </tr>
                ) : null}
                </Fragment>
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
        <button onClick={() => nextPage()} disabled={!canNextPage}>
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
