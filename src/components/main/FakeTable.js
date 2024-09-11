// FakeTable.js
import React from 'react';
import { useTable } from 'react-table';

const FakeTable = () => {
    const data = [
        { id: 1, name: 'John Doe', age: 30, city: 'New York', occupation: 'Engineer', salary: '$100,000', status: 'Active' },
        { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles', occupation: 'Designer', salary: '$80,000', status: 'Inactive' },
        { id: 3, name: 'Michael Johnson', age: 35, city: 'Chicago', occupation: 'Developer', salary: '$120,000', status: 'Active' },
        { id: 4, name: 'Emily Brown', age: 28, city: 'Houston', occupation: 'Manager', salary: '$90,000', status: 'Active' },
        { id: 5, name: 'William Taylor', age: 32, city: 'Miami', occupation: 'Consultant', salary: '$110,000', status: 'Inactive' },
        { id: 6, name: 'Olivia Anderson', age: 27, city: 'San Francisco', occupation: 'Analyst', salary: '$85,000', status: 'Active' },
        { id: 7, name: 'James Wilson', age: 29, city: 'Seattle', occupation: 'Sales', salary: '$95,000', status: 'Inactive' }
    ];

    const columns = React.useMemo(
        () => [
            { Header: 'ID', accessor: 'id' },
            { Header: 'Name', accessor: 'name' },
            { Header: 'Age', accessor: 'age' },
            { Header: 'City', accessor: 'city' },
            { Header: 'Occupation', accessor: 'occupation' },
            { Header: 'Salary', accessor: 'salary' },
            { Header: 'Status', accessor: 'status' },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    });

    return (
        <div className="overflow-x-auto">
            <table {...getTableProps()} className="table-fixed w-full">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()} className="px-4 py-2 border">
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()} className="px-4 py-2 border">
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default FakeTable;
