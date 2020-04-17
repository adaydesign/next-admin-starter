import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getAllDivisions } from '../../includes/requests/divisions'
const ListDivisions = (props) => {

    const { userData } = props

    async function getAllData() {
        const token = userData.token
        const allDivisions = await getAllDivisions(token)
        console.log("...List Data ")
        console.log(allDivisions.data.data)
    }

    useEffect(() => {
        getAllData()

    }, [])

    return (
        <>
            ListAllDivisions
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