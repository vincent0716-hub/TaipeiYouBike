type TableForm = {
    city: string,
    area: string,
    stopName: string,
    canBorrowAmount: string,
    canReturnAmount: string
}
export const TaipeiCityArea=[
    {name:'大安區'},
    {name:'大同區'},
    {name:'士林區'},
    {name:'文山區'},
    {name:'中正區'},
    {name:'中山區'},
    {name:'內湖區'},
    {name:'北投區'},
    {name:'松山區'},
    {name:'南港區'},
    {name:'信義區'},
    {name:'萬華區'},
    {name:'臺大公館校區'},
]
export const HsinChuCityArea=[
    {name:'新竹科學園區'}
  
]
export const HsinChuMock: TableForm[] = [
{ area: "東區", canBorrowAmount: '4', canReturnAmount: '9', city: "新竹市", stopName: "新竹市新竹市新竹市新竹市" },
  { area: "北區", canBorrowAmount: '2', canReturnAmount: '7', city: "新竹市", stopName: "新竹市新竹市" },
  { area: "東區", canBorrowAmount: '3', canReturnAmount: '4', city: "新竹市", stopName: "新竹市新竹市新竹市新竹市" },
  { area: "北區", canBorrowAmount: '5', canReturnAmount: '11', city: "新竹市", stopName: "新竹市新竹市" },
  { area: "香山區", canBorrowAmount: '7', canReturnAmount: '1', city: "新竹市", stopName: "新竹市新竹市新竹市新竹市7" }
];