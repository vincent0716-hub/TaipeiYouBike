import React, { ChangeEvent } from 'react'
import { TableForm, checkboxDataForm } from '../../utils/globalType'
import MuiCheckbox from '../../components/Checkbox'
const CheckBoxArea = ({ checkedFromData, checkboxData, fetchedDataForTableForm, setCeckedFromData, setUpdatedFetchedDataForTableForm, isMobile }: {
    fetchedDataForTableForm: TableForm[]
    checkedFromData: boolean[],
    checkboxData: checkboxDataForm[],
    setCeckedFromData: React.Dispatch<React.SetStateAction<boolean[]>>,
    setUpdatedFetchedDataForTableForm: React.Dispatch<React.SetStateAction<TableForm[]>>,
    isMobile: boolean
}) => {

    const handleChangeParent = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked === false) {
            setCeckedFromData(Array(checkedFromData.length).fill(false))
            setUpdatedFetchedDataForTableForm([])
        }
        else setCeckedFromData(Array(checkedFromData.length).fill(true))
        { setUpdatedFetchedDataForTableForm(fetchedDataForTableForm) }
    };
    const handleChangefullandSearch = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        const cityArray: checkboxDataForm[] = []
        checkedFromData.splice(index, 1, !checkedFromData[index])
        setCeckedFromData([...checkedFromData])
        //find true city and asign it into the array
        checkedFromData.map((item: any, index: number) => {
            if (item === true) {
                cityArray.push(checkboxData[index])
            }
        });
        const filteredTableArray = fetchedDataForTableForm.filter(item => {
            return cityArray.some(searchItem => searchItem.name === item.area);
        });
        setUpdatedFetchedDataForTableForm(filteredTableArray)
    };
    return (
        <div style={{
        }}>
            <MuiCheckbox
                checked={checkedFromData.every((value) => value)}
                label="全部勾選"
                onChange={handleChangeParent}
                indeterminate={!checkedFromData.every((value) => value) && checkedFromData.some((value) => value)} />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '10px' }}>
                {checkboxData.map((items, index) =>
                    <MuiCheckbox
                        checked={checkedFromData[index]}
                        label={items.name}
                        onChange={handleChangefullandSearch(index)} />
                )}
            </div>
        </div>
    )
}

export default CheckBoxArea