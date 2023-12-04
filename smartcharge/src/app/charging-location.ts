export interface ChargingLocation {
    id:number,
    name:string,
    city:string,
    state:string,
    photo:string,
    availableBrands:string[],
    reservedTime:[string[],string[]], // [[OLA][9:00 AM - 10:00 AM],[ATHER][8:30 AM - 9:30 AM]]

}
