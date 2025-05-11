export interface newsResponse{
    content: NewsList
    totalPages:number
    number:number
}


export interface NewsList{
    id:number
    title:string
    dateCreation:Date

}