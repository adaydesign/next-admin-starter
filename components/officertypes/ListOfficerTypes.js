import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getAllOfficers } from '../../includes/requests/officertypes'

const ListOfficerTypes = (props) => {

    const { userData } = props

    useEffect(() => {

        async function getAllData() {
            const token = userData.token
            const allOffices = await getAllOfficers(token)
            console.log('-- List Data --')
            console.log(allOffices.data.data)
        }

        getAllData()
    }, [])

    return (
        <>
            ListOfficerTypes
        </>)
}


function mapStateToProps(state) {
    return {
        userData: {
            ...state
        }
    };
}

export default connect(mapStateToProps)(ListOfficerTypes);