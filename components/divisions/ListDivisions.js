import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import Router from 'next/router'
import MaterialTable from 'material-table';
import useStyles from '../../components/divisions/style';
import Alert from '../../components/shared/Alert'

import { getAllDivisions, deleteDivision } from '../../includes/requests/divisions'

const ListDivisions = (props) => {
    const classes = useStyles();
    const { userData } = props
    const [data, setData] = useState([])

    const editDataHandle = (event, rowData) => {
        // alert("You edit " + rowData.name)
        Router.push('/divisions/edit/[id]', `/divisions/edit/${rowData.id}`)
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
                    deleteDivision(token, rowData.id).then(rs=>{
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
        // console.log("...List Data ")
        // console.log(allDivisions.data.data)
        setData(allDivisions.data.data)
    }

    useEffect(() => {
        getAllData()
    }, [])

    return (
        <>
            {console.log(data)}
            {data.length > 0 ? (<MaterialTable
                title={"รายการภาค/สังกัด"}
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

export default connect(mapStateToProps)(ListDivisions);