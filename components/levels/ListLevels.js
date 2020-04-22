import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import Router from 'next/router'
import MaterialTable from 'material-table';
import useStyles from '../levels/style';
import Alert from '../shared/Alert'

import { getAllLevels, deleteLevel } from '../../includes/requests/levels'

const ListLevels = (props) => {
    const classes = useStyles();
    const { userData } = props
    const [data, setData] = useState([])

    const editDataHandle = (event, rowData) => {
        // alert("You edit " + rowData.name)
        Router.push('/levels/edit/[id]', `/levels/edit/${rowData.id}`)
    }

    const deleteDataHandle = (event, rowData) => {
        confirm("This Menu don't delete " + rowData.name)
        // Alert(
        //     {
        //         title: 'คุณต้องการลบข้อมูลนี้หรือไม่ ?',
        //         text: `ชื่อรายการ ${rowData.name}`,
        //         icon: 'warning',
        //         showCancelButton: true,
        //         confirmButtonColor: '#3085d6',
        //         cancelButtonColor: '#d33',
        //         confirmButtonText: 'ใช่ ลบได้เลย',
        //         cancelButtonText: 'ยกเลิก'
        //     }, (result)=>{
        //         if(result.value){
        //             console.log('delete : '+rowData.id)

        //             const token = userData.token
        //             deleteLevel(token, rowData.id).then(rs=>{
        //                 getAllData()
        //             })
        //             .catch(err=>{
        //                 alert(err)
        //             })
        //         }
        //     })
    }



    const columns = [
        {
            field: "id",
            title: "รหัส"
        },
        {
            field: "name",
            title: "ตัวย่อระดับข้าราชการ"
        },
        {
            field: "description",
            title: "ชื่อระดับข้าราชการ"
        },

    ];

    const actions = [
        {
            icon: 'edit',
            tooltip: 'แก้ไข',
            onClick: (event, rowData) => editDataHandle(event, rowData)
        },
        // {
        //     icon: 'delete',
        //     tooltip: 'ลบ',
        //     onClick: (event, rowData) => deleteDataHandle(event, rowData)
        // }
    ]

    const options = {
        headerStyle: {
            backgroundColor: '#01579b',
            color: '#FFF'
        },
    }


    async function getAllData() {
        const token = userData.token
        const allLevels = await getAllLevels(token)
        // console.log("...List Data ")
        // console.log(allLevels.data.data)
        setData(allLevels.data.data)
    }

    useEffect(() => {
        getAllData()
    }, [])

    return (
        <>
            {console.log(data)}
            {data.length > 0 ? (<MaterialTable
                title={"รายการระดับข้าราชการ"}
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

export default connect(mapStateToProps)(ListLevels);