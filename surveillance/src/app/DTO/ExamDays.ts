// export interface examDays{
//     date:Date,
//     time:string[],
//     status:string
// }
export interface examDays{
    date:Date,
    time:examTime[],
    status:string
}

interface examTime{
    startTime:string,
    endTime:string
}