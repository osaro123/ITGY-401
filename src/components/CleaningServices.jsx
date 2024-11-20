import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table';

const CleaningServices = () => {
  // Define data for the table
  const data = [
    { id: 1, name: 'Basic Cleaning', price: '$50', description: 'Surface cleaning of all rooms.', duration: '2 hours' },
    { id: 2, name: 'Deep Cleaning', price: '$100', description: 'Thorough cleaning of all areas.', duration: '4 hours' },
    { id: 3, name: 'Office Cleaning', price: '$150', description: 'Professional cleaning for office spaces.', duration: '5 hours' },
    { id: 4, name: 'Carpet Cleaning', price: '$80', description: 'Steam and vacuum carpet cleaning.', duration: '3 hours' },
    { id: 5, name: 'Window Cleaning', price: '$70', description: 'Interior and exterior window cleaning.', duration: '2 hours' },
  ];

  // Define columns using the column helper
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor('id', {
      header: 'ID',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('name', {
      header: 'Service Name',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('price', {
      header: 'Price',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('description', {
      header: 'Description',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('duration', {
      header: 'Duration',
      cell: (info) => info.getValue(),
    }),
  ];

  // Create the table instance
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="mt-12">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead className="bg-stone-100 text-stone-950">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border border-gray-300 p-4 text-left"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="border border-gray-300 p-4"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CleaningServices;
