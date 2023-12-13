import React from 'react'
import { TableForm } from '../../../utils/globalType'
const TableBody = ({ entireTableData, serachedTableData }: { entireTableData: TableForm[], serachedTableData: TableForm[] }) => {
    return <tbody>
        {
            serachedTableData.length != 0 ? (
                serachedTableData.map((row: TableForm, index: number) => (
                    <tr className={index % 2 !== 0 ? 'bg-[#F1F1F1]' : ''} key={index}>
                        <td scope="row">{row.city}</td>
                        <td>{row.area}</td>
                        <td>{row.stopName}</td>
                        <td scope="row">{row.canBorrowAmount}</td>
                        <td>{row.canReturnAmount}</td>
                    </tr>
                ))
            ) : (
                entireTableData.map((row: TableForm, index: number) => (
                    <tr className={index % 2 !== 0 ? 'bg-[#F1F1F1]' : ''} key={index}>
                        <td scope="row">{row.city}</td>
                        <td>{row.area}</td>
                        <td>{row.stopName}</td>
                        <td scope="row">{row.canBorrowAmount}</td>
                        <td>{row.canReturnAmount}</td>
                    </tr>
                ))
            )
        }
    </tbody>
}

export default TableBody