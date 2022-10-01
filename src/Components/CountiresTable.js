import React, { useCallback, useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import DataTable from 'react-data-table-component'

const CountiresTable = () => {
    const [hideDirector, setHideDirector] = useState(false);
    const [selectedRow, setSelectedRow] = useState([])
    const [toggleRow, setToggleRow] = useState(false)
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState('')
    const [filterName, setFilterName] = useState([])
    const [pending, setPending] = useState(true)
    const [deleteItems, setDeleteItems] = useState([])

    const getcountriesData = async () => {
        try {
            const response = await axios.get("https://restcountries.com/v2/all")
            setCountries(response.data)
            setFilterName(response.data)
            setPending(false)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getcountriesData()
    }, [])

    useEffect(() => {
        const filterData = countries?.filter((country) => {
            if (country.name.toLowerCase().match(search.toLowerCase())) {
                return country
            }
        })
        setFilterName(filterData)
    }, [search])

    const columns = useMemo(
        () => [
            {
                name: 'Countries Name',
                selector: (row) => row.name,
                sortable: true,
                left: true,
                style: {
                    backgroundColor: 'rgba(63, 195, 128, 0.9)',
                    color: 'white',
                },
            },
            {
                name: 'Countries Capital',
                selector: (row) => row.capital
            },
            {
                name: 'Countries Native Name',
                selector: (row) => row.nativeName,
            },
            {
                name: 'Countries  Region',
                selector: (row) => row.region,
                left: true,

            },
            {
                name: 'Countries Flag',
                selector: (row) => <img src={row.flag} width='50px' height='50px' />,
                omit: hideDirector,
            },
            {
                name: 'Action',
                cell: (row) => <button className='btn btn-primary' onClick={() => alert(row.name)} >Edit</button>
            },
        ],
        [hideDirector],
    )
    const rowSelectCritera = (row) => row.region === 'Europe'
    const rowDisebledCritera = (row) => row.region === 'Oceania'
    // console.log(countries)
    const handleChange = useCallback((row) => {
        const handle = row.selectedRows.map((x) => { return x.name })
        setSelectedRow(handle)
    }, [selectedRow])
    const contextActions = useMemo(() => {

        const handleDelete = () => {

            if (window.confirm(`Are you sure you want to delete:\r ${selectedRow}?`)) {
                setToggleRow(!toggleRow)
                let b = selectedRow
                let a = filterName
                a = filterName.filter((el) => {
                    return (!b.includes(el.name))
                })
                setFilterName(a)
                let ar = filterName
                ar = filterName.filter((el) => {
                    return (b.includes(el.name))
                })
                setDeleteItems(ar)
            }

        }
        return (
            <button type='text' onClick={handleDelete} className='btn btn-danger' >Delete</button>
        )
    }, [filterName, toggleRow, selectedRow])
    // console.log(deleteItems)
    return (
        <div>
            <button className='btn btn-info' onClick={() => setHideDirector(!hideDirector)}>Hide Directory Column</button>
            <DataTable
                title='Country Lists'
                columns={columns}
                data={filterName}
                pagination
                fixedHeader
                fixedHeaderScrollHeight='408px'
                selectableRows
                onSelectedRowsChange={handleChange}
                contextActions={contextActions}
                clearSelectedRows={toggleRow}
                // selectableRowSelected={rowSelectCritera}
                // selectableRowDisabled={rowDisebledCritera}
                selectableRowsHighlight
                highlightOnHover
                subHeader
                subHeaderComponent={
                    <input type='text' placeholder='Search here' className=' w-25 form-control' value={search} onChange={(e) => setSearch(e.target.value)} />
                }
                progressPending={pending}
            />
            <br />
            <DataTable columns={columns} data={deleteItems} />

        </div>
    )
}

export default CountiresTable