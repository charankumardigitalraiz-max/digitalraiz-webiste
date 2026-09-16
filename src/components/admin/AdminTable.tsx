import React from "react";
import AdminPagination, { AdminPaginationProps } from "./AdminPagination";

export interface Column {
  header: string;
  className?: string;
}

export interface AdminTableProps {
  columns: Column[];
  children: React.ReactNode;
  loading?: boolean;
  empty?: boolean;
  emptyMessage?: string;
  pagination?: AdminPaginationProps;
}

export default function AdminTable({
  columns,
  children,
  loading = false,
  empty = false,
  emptyMessage = "No records found.",
  pagination,
}: AdminTableProps) {
  return (
    <div className="admin-table-container">
      <div className="overflow-x-auto">
        <table className="admin-table">
          <thead>
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className={col.className || ""}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={columns.length} className="py-8 text-center text-slate-400 font-mono text-xs">
                  Loading data...
                </td>
              </tr>
            ) : empty ? (
              <tr>
                <td colSpan={columns.length} className="py-8 text-center text-slate-400 font-mono text-xs">
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              children
            )}
          </tbody>
        </table>
      </div>

      {pagination && (
        <AdminPagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          totalItems={pagination.totalItems}
          itemsPerPage={pagination.itemsPerPage}
          onPageChange={pagination.onPageChange}
        />
      )}
    </div>
  );
}
