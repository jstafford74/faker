import React from "react";

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
                }
                {
                    Header: 'Appt Date',
                    accessor: 'pAppt_Date',
                }
            ],
        },

    ],
    []
)

export default columns;