import React, { ChangeEvent } from 'react'
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import FormControl from '@mui/joy/FormControl';
import Stack from '@mui/joy/Stack';
import Autocomplete from '@mui/joy/Autocomplete';
import Image from 'next/image';
import Bikes from '../../public/bikes.png'
import { TableForm, top100Films, checkboxDataForm } from '../../utils/globalType'
import { TaipeiCityArea, HsinChuCityArea, HsinChuMock } from '../../Data/mockData'
import CheckBocArea from '../../ui/CheckBocArea'
type SelectCheckboxTabProps = {
    fetchedDataForTableForm: TableForm[],
    setUpdatedFetchedDataForTableForm: React.Dispatch<React.SetStateAction<TableForm[]>>,
    setSelectBigCity: React.Dispatch<React.SetStateAction<string | undefined>>
}
const SelectCheckboxTab = ({ fetchedDataForTableForm, setUpdatedFetchedDataForTableForm, setSelectBigCity }: SelectCheckboxTabProps) => {
    ////// RWD setting
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkWindowWidth = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkWindowWidth();

        window.addEventListener('resize', checkWindowWidth);

        return () => {
            window.removeEventListener('resize', checkWindowWidth);
        };
    }, []);
    ///////
    const [checkboxData, setCheckboxData] = React.useState<checkboxDataForm[]>([]);
    const [checkedFromData, setCeckedFromData] = React.useState<boolean[]>([]);
    const handleCityChange = (event: any, newValue: any) => {
        // console.log(`You chose "${newValue}"`);
        console.log(newValue)
        setSelectBigCity(newValue)
        newValue === 'TP' ? setCheckboxData(TaipeiCityArea) : setCheckboxData(HsinChuCityArea)
        const newCheckboxData = Array((newValue === 'TP' ? TaipeiCityArea : HsinChuCityArea).length).fill(true);
        setCeckedFromData(newCheckboxData)
    };
    const handleSearch = (value: any) => {
        if (value) {
            const matchingRows = fetchedDataForTableForm.filter((item: any) => {
                return Object.values(item).some((columnValue: any) =>
                    columnValue.toString().toLowerCase().includes(value.toLowerCase())
                );
            });
            const resultArray = [...matchingRows];
            setUpdatedFetchedDataForTableForm(resultArray)
        }
        else {
            setUpdatedFetchedDataForTableForm([])
        }
    };
    return (
        <section className='flex'
            style={{
                margin: isMobile ? '2rem' : '',
            }}
        >
            <div style={{
                backgroundColor: '#FFFFFF',
                width: isMobile ? '100%' : '50%'
            }} className=" items-center justify-between  flex-col w-1/2">
                <h6 style={{
                    color: '#B6CD0F',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                    border: 'none',
                    fontSize: '1.5rem'
                }} >站點資訊</h6>
                <div style={{
                    backgroundColor: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',    // Align items in the center
                    gap: '5px',
                    flexDirection: isMobile ? 'column' : '',
                }} className=" items-center flex  gap-5">
                    <Select
                        placeholder="選擇縣市"
                        variant="soft"
                        style={{
                            width: isMobile ? '100%' : '200px',
                            marginBottom: isMobile ? '1rem' : '',
                        }}
                        onChange={handleCityChange}
                    >
                        <Option value="TP" >台北市</Option>
                        <Option value="HsinChu">新竹科學園區</Option>
                    </Select>
                    <Stack spacing={2} sx={{ width: isMobile ? '100%' : 300 }}>

                        <FormControl id="free-solo-2-demo">
                            <Autocomplete
                                placeholder="選擇站點"
                                type="search"
                                freeSolo
                                disableClearable
                                options={top100Films.map((option) => option.title)}
                                onChange={(event, newValue) => handleSearch(newValue)}
                            />
                        </FormControl>
                    </Stack>
                </div>
                <CheckBocArea
                    isMobile={isMobile}
                    checkedFromData={checkedFromData}
                    checkboxData={checkboxData}
                    fetchedDataForTableForm={fetchedDataForTableForm}
                    setCeckedFromData={setCeckedFromData}
                    setUpdatedFetchedDataForTableForm={setUpdatedFetchedDataForTableForm} />
            </div>
            <div style={{
                backgroundColor: '#FFFFFF',
                display: isMobile ? 'none' : ''
            }} className=" items-center justify-between  w-1/2 flex"
            >
                <Image
                    src={Bikes}
                    alt=""
                    style={{ width: '150%', height: '150%', }}
                    width={500}
                    height={300}
                />
            </div>
        </section>
    )
}


export default SelectCheckboxTab