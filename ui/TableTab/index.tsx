import React, { ChangeEvent } from 'react';
import Table from '@mui/joy/Table';
import TableContainer from '@mui/material/TableContainer';
import Sheet from '@mui/joy/Sheet';
import TableBody from '../../components/Table/TableBody'
import TableHead from '../../components/Table/TableHead'
import { TableForm, top100Films, checkboxDataForm } from '../../utils/globalType'
const TableComponent = ({ entireTableData, serachedTableData }: { entireTableData: TableForm[], serachedTableData: TableForm[] }) => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkWindowWidth = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };

        checkWindowWidth(); // Check on initial render

        window.addEventListener('resize', checkWindowWidth); // Check on window resize

        return () => {
            window.removeEventListener('resize', checkWindowWidth); // Cleanup event listener
        };
    }, []);
    return (<section className='flex' style={{
        marginTop: isMobile ? '' : '',
        marginBottom: isMobile ? '' : '3rem'
    }}> <TableContainer style={{
        borderRadius: '24px',
        marginTop: isMobile ? '1rem' : '',
        marginBottom: isMobile ? '2rem' : '',
        marginLeft: isMobile ? '2rem' : '',
        marginRight: isMobile ? '2rem' : '',
    }}>
            <Sheet sx={{ height: 400, overflow: 'auto' }}>
                <Table
                    stickyHeader
                    size="lg"
                    sx={tableStyles}
                >
                    <TableHead />
                    <TableBody entireTableData={entireTableData} serachedTableData={serachedTableData} />
                </Table>
            </Sheet>
        </TableContainer></section>
    )
}
const tableStyles = {
    '& th[scope="col"]': { backgroundColor: "#B6CD0F" },
    '& thead th:nth-child(1)': { textAlign: 'center', color: 'white' },
    '& thead th:nth-child(2)': { textAlign: 'center', color: 'white' },
    '& thead th:nth-child(3)': { width: '50%', textAlign: 'center', color: 'white' },
    '& thead th:nth-child(4)': { textAlign: 'center', color: 'white' },
    '& thead th:nth-child(5)': { textAlign: 'center', color: 'white' },
    '& tr ': { textAlign: 'center' },
    '& tr td:nth-child(4)': { color: '#B6CD0F' },
    '& tr td:nth-child(5)': { color: '#B6CD0F' },
};
export default TableComponent;
