import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

import MUIDataTable from "mui-datatables"
import Button from "@material-ui/core/Button"
import { Edit, Delete } from '@material-ui/icons';
import useStyles from '../../components/officertypes/style';

import { getAllOfficers } from '../../includes/requests/officertypes'

const ListOfficerTypes = (props) => {
    const classes = useStyles();

    const { userData } = props
    const [data, setData] = useState([])

    const columns = [
        {
            name: "id",
            label: "รหัส"
        },
        {
            name: "name",
            label: "ชื่อประเภท"
        },
        {
            name: "description",
            label: "คำอธิบาย"
        },
        {
            name: "remark",
            label: "หมายเหตุ"
        },
        {
            name: "id",
            label: "แก้ไข",
            options: {
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <Link href='/officertypes/edit/[id]' as={`/officertypes/edit/${value}`}>
                            <Button
                                variant="contained"
                                startIcon={<Edit />}
                                className={classes.editButton}>
                                แก้ไข
                            </Button>
                        </Link>
                    )
                }
            }
        },
        {
            name: "id",
            label: "ลบ",
            options: {
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <Button
                            variant="contained"
                            startIcon={<Delete />}
                            className={classes.deleteButton}>
                            ลบ
                        </Button>
                    )
                }
            }
        }
    ];

    const options = {
        filter: true,
        filterType: 'dropdown',
        responsive: 'stacked',
    };

    async function getAllData() {
        const token = userData.token
        const allOffices = await getAllOfficers(token)
        console.log('-- List Data --')
        console.log(allOffices.data.data)
        setData(allOffices.data.data)
    }

    useEffect(() => {
        getAllData()
    }, [])

    return (
        <>
            <MUIDataTable
                title={"รายการประเภทบุคคลากรในหน่วยงาน"}
                data={data}
                columns={columns}
                options={options}
            />
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