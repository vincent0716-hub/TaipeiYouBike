"use client"
import React, { ChangeEvent } from 'react';;
import { HsinChuMock } from '../../../../Data/mockData'
import { fetchData } from '../../../../Data/api/GetAPI';
import { TableForm } from '../../../../utils/globalType'
import TableTab from '../../../../ui/TableTab'
import SelectCheckboxTab from '../../../../ui/SelectCheckboxTab'

const StopInfo: React.FC = () => {
    const [fetchedDataForTableForm, setFetchedDataForTableForm] = React.useState<TableForm[]>([]);//搜尋table也是改這個狀態
    const [updatedFetchedDataForTableForm, setUpdatedFetchedDataForTableForm] = React.useState<TableForm[]>([]);//搜尋結果table狀態
    const [selectBigCity, setSelectBigCity] = React.useState<string>();
    let DataFormValue: TableForm
    React.useEffect(() => {
        const dataArray: TableForm[] = [];
        if (selectBigCity == 'TP') {
            console.log('T')
            const fetchDataAsync = async () => {
                try {
                    const data = await fetchData();
                    data.map((item: any) => (
                        DataFormValue = {
                            city: "台北市",
                            area: item.sarea,
                            stopName: item.sna.replace("YouBike2.0_", ""),
                            canBorrowAmount: item.sbi,
                            canReturnAmount: item.bemp,
                        },
                        dataArray.push(DataFormValue)
                    ))
                    setFetchedDataForTableForm(dataArray)
                    setUpdatedFetchedDataForTableForm([])
                    //console.log("dataArray", dataArray);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
            fetchDataAsync();
        }
        else if (selectBigCity == 'HsinChu') {
            console.log('H')
            setFetchedDataForTableForm(HsinChuMock)
            setUpdatedFetchedDataForTableForm([])
        }
    }, [selectBigCity]);
    return (
        <div className="flex min-h-screen flex-col  md:py-6 md:px-36  bg-white">
            <SelectCheckboxTab
                fetchedDataForTableForm={fetchedDataForTableForm}
                setUpdatedFetchedDataForTableForm={setUpdatedFetchedDataForTableForm}
                setSelectBigCity={setSelectBigCity} />

            <TableTab
                entireTableData={fetchedDataForTableForm}
                serachedTableData={updatedFetchedDataForTableForm} />
        </div>

    );
};

export default StopInfo;