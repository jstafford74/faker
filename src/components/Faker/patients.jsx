import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap"
import { useTable, useSortBy } from 'react-table'
// import { columns } from "../columns"
// var users = require("./faker1");
import Patient from "./patients.js";
import "./style.css"

// const data = [];

function NewTable({ columns, data }) {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
        },
        useSortBy
    )

    return (
        <>
            <Table striped bordered hover variant="dark"{...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    {/* Add a sort direction indicator */}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    
                    {rows.map(
                        (row, i) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                
                                    {row.cells.map(cell => {
                                        return (
                                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        )
                                    })}
                                </tr>
                            )
                        }
                    )}
                </tbody>
            </Table>
            <br />
            <div>Showing the first 20 results of {rows.length} rows</div>
        </>
    )
}

function PatientTable(props) {

    const [data, setData] = useState([]);

    const loadPatients = () => {

        function patients() {
            let patArr = [];
            for (let i = 0; i < 25; i++) {
                patArr[i] = new Patient();
                patArr[i].makePatientData();
            }
            setData([patArr]);
            
        }
        patients();
    };

    useEffect(loadPatients, []);
    const columns = React.useMemo(
        () => [
            {
                Header: 'Patient Data',
                columns: [
                    {
                        Header: 'Patient ID',
                        accessor: 'patient_ID',
                    },
                    {
                        Header: 'MRN',
                        accessor: 'patient_Number',
                    },

                    {
                        Header: 'First Name',
                        accessor: 'patient_firstName',
                    },
                    {
                        Header: 'Last Name',
                        accessor: 'patient_lastName',
                    },
                    {
                        Header: 'Address',
                        accessor: 'pAddr_Home',
                    },
                    {
                        Header: 'Appt Date',
                        accessor: 'pAppt_Date',
                    }
                ],
            },

        ],
        []
    )

    return (
        <>
            <NewTable columns={columns} data={data} />
        </>
    )
}

export default PatientTable

