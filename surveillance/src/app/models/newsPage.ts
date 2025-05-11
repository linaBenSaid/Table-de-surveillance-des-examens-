export interface NewsPage{
    title:string
    date:Date
    dataTypeList:DataTypeList[]
}

interface DataTypeList{
    filePath:string
    content:string
    type:string
}