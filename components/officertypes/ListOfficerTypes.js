import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
// import Link from 'next/link'
import Router from 'next/router'

// import MUIDataTable from "mui-datatables"
import MaterialTable from 'material-table'
import Button from "@material-ui/core/Button"
import { Edit, Delete } from '@material-ui/icons';
import useStyles from '../../components/officertypes/style';

import { getAllOfficers } from '../../includes/requests/officertypes'

const ListOfficerTypes = (props) => {
    const classes = useStyles();

    const { userData } = props
    const [data, setData] = useState([])
    
    const editDataHandle = (event, rowData)=>{
        // alert("You edit " + rowData.name)
        Router.push('/officertypes/edit/[id]',`/officertypes/edit/${rowData.id}`)
    }

    const deleteDataHandle = (event, rowData)=>{
        confirm("You want to delete " + rowData.name)
    }

    const columns = [
        {
            field: "id",
            title: "รหัส"
        },
        {
            field: "name",
            title: "ชื่อประเภท"
        },
        {
            field: "description",
            title: "คำอธิบาย"
        },
        {
            field: "remark",
            title: "หมายเหตุ"
        },
    ];

    const actions = [
        {
            icon: 'edit',
            tooltip: 'แก้ไข',
            onClick: (event, rowData) => editDataHandle(event, rowData)
          },
          {
            icon: 'delete',
            tooltip: 'ลบ',
            onClick: (event, rowData) => deleteDataHandle(event, rowData)
          }
    ]

    async function getAllData() {
        const token = userData.token
        const allOffices = await getAllOfficers(token)
        console.log('-- List Data --')
        console.log(allOffices.data.data)
        setData(allOffices.data.data)
    }

    useEffect(() => {
        getAllData()
    }, [])

    return (
        <>
            <MaterialTable
                title="รายการ"
                data={data}
                columns={columns}
                actions={actions}
            />
        </>)
}


function mapStateToProps(state) {
    return {
        userData: {
            ...state
        }
    };
}

export default connect(mapStateToProps)(ListOfficerTypes);