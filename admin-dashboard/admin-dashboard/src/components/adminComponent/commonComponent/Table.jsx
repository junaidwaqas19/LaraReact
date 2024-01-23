import React from 'react';
import LinkIcon from './LinkIcon';

const Table = ({ headers, data, linkIcon, onEditClick, onDeleteClick }) => {
  
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {headers.map((header, index) => (
                <th key={index} scope="col" className="px-6 py-3">
                  {header.label}
                </th>
              ))}
              {linkIcon.length > 0 && <th scope="col" className="px-6 py-3">Action</th>}
            </tr>
          </thead>
          <tbody>
            {(data && data.length > 0) ? (
              data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={
                    rowIndex % 2 === 0
                      ? 'bg-white border-b dark:bg-gray-900 dark:border-gray-700'
                      : 'border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700'
                  }
                >
                  {headers.map((header, columnIndex) => (
                    <td key={columnIndex} className="px-6 py-4">
                      {row[header.key]}
                    </td>
                  ))}
                  <td className="px-6 py-4 flex items-center">
                    {linkIcon.includes('edit') && (
                      <LinkIcon type="edit" onClick={() => onEditClick(row)} />
                    )}
                    {linkIcon.includes('delete') && (
                      <LinkIcon type="delete" onClick={() => onDeleteClick(row)} />
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={headers.length + (linkIcon.length > 0 ? 1 : 0)} className="text-center">
                  {data ? 'Loading...' : 'No data available.'}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
