import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';

//import Link from 'next/link'
import Router from 'next/router'

//import MUIDataTable from "mui-datatables"
import MaterialTable from 'material-table'

import Button from "@material-ui/core/Button"
import { Edit, Delete } from '@material-ui/icons';
import useStyles from '../../components/divisions/style';

import { getAllDivisions } from '../../includes/requests/divisions'
const ListDivisions = (props) => {
    const classes = useStyles();
    const { userData } = props
    const [data, setdata] = useState([])

    const editDataHandle = (event, rowData) => {
        // alert("You edit " + rowData.name)
        Router.push('/divisions/edit/[id]', `/divisions/edit/${rowData.id}`)
    }

    const deleteDataHandle = (event, rowData) => {
        confirm("You want to delete " + rowData.name)
    }
    
    const columns = [
        {
            field: "id",
            title: "รหัส"
        },
        {
            field: "name",
            title: "ชื่อภาค/สังกัด"
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
        const allDivisions = await getAllDivisions(token)
        console.log("...List Data ")
        console.log(allDivisions.data.data)
        setdata(allDivisions.data.data)
    }

    useEffect(() => {
        getAllData()

    }, [])

    return (
        <>
            <MaterialTable
                title={"รายการภาค/สังกัด"}
                data={data}
                columns={columns}
                actions={actions}
            />
        </>
    )

}

function mapStateToProps(state) {
    return {
        userData: {
            ...state
        }
    };
}

export default connect(mapStateToProps)(ListDivisions);