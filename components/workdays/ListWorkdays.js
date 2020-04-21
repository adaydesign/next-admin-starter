import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import Router from 'next/router'
import MaterialTable from 'material-table';
import useStyles from './style';
import Alert from '../shared/Alert'

import { getAllWorkdays, deleteWorkday } from '../../includes/requests/workdays'

const ListWorkdays = (props) => {
    const classes = useStyles();
    const { userData } = props
    const [data, setData] = useState([])

    const editDataHandle = (event, rowData) => {
        // alert("You edit " + rowData.name)
        Router.push('/workdays/edit/[id]', `/workdays/edit/${rowData.id}`)
    }

    const deleteDataHandle = (event, rowData) => {
        //confirm("You want to delete " + rowData.name)
        // Swal.fire({
        //     title: 'Are you sure?',
        //     text: "You won't be able to revert this!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, delete it!'
        //   }).then((result) => {
        //     if (result.value) {
        //       Swal.fire(
        //         'Deleted!',
        //         'Your file has been deleted.',
        //         'success'
        //       )
        //     }
        //   })
        Alert(
            {
                title: 'คุณต้องการลบข้อมูลนี้หรือไม่ ?',
                text: `ชื่อรายการ ${rowData.name}`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'ใช่ ลบได้เลย',
                cancelButtonText: 'ยกเลิก'
            }, (result) => {
                if (result.value) {
                    console.log('delete : ' + rowData.id)

                    const token = userData.token
                    deleteWorkday(token, rowData.id).then(rs => {
                        getAllData()
                    })
                        .catch(err => {
                            alert(err)
                        })
                }
            })

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
            field: "count",
            title: "จำนวนวันทำงาน"
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
            const allWorkdays = await getAllWorkdays(token)
            console.log("...List Data ")
            console.log(allWorkdays.data.data)
            setData(allWorkdays.data.data)
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
                title={"รายการวันทำงาน"}
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

export default connect(mapStateToProps)(ListWorkdays);