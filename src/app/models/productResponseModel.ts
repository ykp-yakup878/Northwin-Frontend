import { Product } from "./product";
import { ResponseModel } from "./responseModel";

export interface ProductResponseModels extends ResponseModel{
    data:Product[],
    
}