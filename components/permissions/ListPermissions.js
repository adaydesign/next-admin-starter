import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
// import Router from 'next/router'
import MaterialTable from 'material-table';
// import useStyles from './style';
// import Alert from '../shared/Alert'

import { getAllPermissions } from '../../includes/requests/permissions'

const ListPermissions = (props) => {
    // const classes = useStyles();
    const { userData } = props
    const [data, setData] = useState([])

    const columns = [
        {
            field: "id",
            title: "รหัส"
        },
        {
            field: "name",
            title: "ชื่อ"
        },
        {
            field: "description",
            title: "คำอธิบาย"
        },

    ];

    const options = {
        headerStyle: {
            backgroundColor: '#01579b',
            color: '#FFF'
        },
    }


    async function getAllData() {
        const token = userData.token
        try {
            const allData = await getAllPermissions(token)
            
            console.log("...List Data ")
            console.log(allData.data.data)
            setData(allData.data.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getAllData()
    }, [])

    return (
        <>
            {data.length > 0 ? (<MaterialTable
                title={"รายการกลุ่มของบทบาท - Role Groups"}
                data={data}
                columns={columns}
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

export default connect(mapStateToProps)(ListPermissions);