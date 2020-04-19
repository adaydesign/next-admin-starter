import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import Router from 'next/router'
import MaterialTable from 'material-table';
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

    const options = {
        headerStyle: {
          backgroundColor: '#01579b',
          color: '#FFF'
        },
      }


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
                options={options}
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