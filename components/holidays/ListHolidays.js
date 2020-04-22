import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import Router from 'next/router'
import MaterialTable from 'material-table';
import useStyles from '../holidays/style';
import Alert from '../../components/shared/Alert'

import { getAllHolidays, deleteHoliday } from '../../includes/requests/holidays'
import { getDateYMDFormat } from '../../includes/lib/date-utils'

const ListHolidays = (props) => {
    const classes = useStyles();
    const { userData } = props
    const [data, setData] = useState([])

    const editDataHandle = (event, rowData) => {
        // alert("You edit " + rowData.name)
        Router.push('/holidays/edit/[id]', `/holidays/edit/${rowData.id}`)
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
                    deleteHoliday(token, rowData.id).then(rs => {
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
            const usedData = allHolidays.data.data.map(d=>{
                d.start_date = getDateYMDFormat(d.start_date)
                d.end_date = getDateYMDFormat(d.end_date)
                return d
            })
            setData(usedData)
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