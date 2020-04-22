import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import Router from 'next/router'
import MaterialTable from 'material-table';
import useStyles from '../offices/style';
import Alert from '../shared/Alert'

import { getAllOffices, deleteOffice } from '../../includes/requests/offices'

const ListOffices = (props) => {
    const classes = useStyles();
    const { userData } = props
    const [data, setData] = useState([])

    const editDataHandle = (event, rowData) => {
        // alert("You edit " + rowData.name)
        Router.push('/offices/edit/[court_code]', `/offices/edit/${rowData.court_code}`)
    }

    const deleteDataHandle = (event, rowData) => {
        // confirm("You want to delete " + rowData.name)
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
            }, (result)=>{
                if(result.value){
                    console.log('delete : '+rowData.id)

                    const token = userData.token
                    deleteOffice(token, rowData.id).then(rs=>{
                        getAllData()
                    })
                    .catch(err=>{
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
            field: "court_code",
            title: "รหัสหน่วยงาน"
        },
        {
            field: "division_id",
            title: "ภาค/สังกัด"
        },
        {
            field: "court_name",
            title: "ชื่อหน่วยงาน"
        },
        {
            field: "abbr_eng",
            title: "ตัวย่อหน่วยงาน"
        },
        {
            field: "address",
            title: "ที่อยู่"
        },
        {
            field: "tel",
            title: "โทรศัพท์ติดต่อ"
        },
        {
            field: "website",
            title: "ที่อยู่เวบไซด์"
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
        const allOffices = await getAllOffices(token)
        // console.log("...List Data ")
        // console.log(allOffices.data.data)
        setData(allOffices.data.data)
    }

    useEffect(() => {
        getAllData()
    }, [])

    return (
        <>
            {console.log(data)}
            {data.length > 0 ? (<MaterialTable
                title={"รายการหน่วยงาน"}
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

export default connect(mapStateToProps)(ListOffices);