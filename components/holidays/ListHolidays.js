import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import Router from 'next/router'
import MaterialTable from 'material-table';
import useStyles from '../holidays/style';

import { getAllHolidays } from '../../includes/requests/holidays'

const ListHolidays = (props) => {
    const classes = useStyles();
    const { userData } = props
    const [data, setData] = useState([])

    const editDataHandle = (event, rowData) => {
        // alert("You edit " + rowData.name)
        Router.push('/holidays/edit/[id]', `/holidays/edit/${rowData.id}`)
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
            field: "year",
            title: "ปี"
        },
        {
            field: "month",
            title: "เดือน"
        },
        {
            field: "name",
            title: "รายละเอียด"
        },
        {
            field: "start_date",
            title: "เริ่มหยุด"
        },
        {
            field: "end_date",
            title: "สิ้นสุด"
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
        try {
            const allHolidays = await getAllHolidays(token)
            console.log("...List Data ")
            console.log(allHolidays.data.data)
            setData(allHolidays.data.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getAllData()
    }, [])

    return (
        <>
            {console.log(data)}
            {data.length > 0 ? (<MaterialTable
                title={"รายการวันหยุด"}
                data={data}
                columns={columns}
                actions={actions}
                options={options}
            />) : (<>{'loading..'}</>)}

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

export default connect(mapStateToProps)(ListHolidays);