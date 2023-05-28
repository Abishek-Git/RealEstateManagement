import { ISeller } from "./ISeller";

export interface IpurchaseOrder{
    purhcaseId : number;
    buyer : number;
    maxAcceptedPrice : number;
    date : string;
    property : number;
    seller : number;
    
    
}