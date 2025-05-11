export interface examUpdAccList{
    updated:examUpdAcc[],
    accepted:examUpdAcc[]
}
export interface examUpdAcc{
    oldDate:string,
    newDate:string,
    newTime:string,
    status:string,
    profId:number
}

export interface examTime{
    enseignant: string
    planning:Planning[]
}

interface Planning{
    date: Date
    heure:string
    surveillance:string
}