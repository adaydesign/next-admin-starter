import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
// import Router from 'next/router'
import MaterialTable from 'material-table';
// import useStyles from './style';
// import Alert from '../shared/Alert'

import { getAllRoles } from '../../includes/requests/roles'

const ListRoles = (props) => {
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
        {
            field: "role_group_name",
            title: "กลุ่มของบทบาท"
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
            const allData = await getAllRoles(token)
            const usedData = allData.data.data.map(d =>{
                d.role_group_name = d.role_group.name
                return d
            })
            
            console.log("...List Data ")
            console.log(usedData)
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
                title={"รายการบทบาท - Roles"}
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

export default connect(mapStateToProps)(ListRoles);