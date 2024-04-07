import { GetListBootcampResponse } from "../bootcamp/get-list-bootcamp-response";
import { responseModel } from "./response-model";


export interface bootcampResponseModel extends responseModel{
    data:GetListBootcampResponse[]
    
}