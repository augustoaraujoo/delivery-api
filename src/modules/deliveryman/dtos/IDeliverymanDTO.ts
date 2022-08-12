interface IDeliverymanDTO {
    id?: string;
    username: string;
    password: string;
}
interface IUpdateDeliveryDTO {
    id_delivery: string 
    id_deliveryman: string;
}

export { IDeliverymanDTO,IUpdateDeliveryDTO }