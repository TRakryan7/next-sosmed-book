import { PostData } from "@/utils/api";

export const Login = async (data: any) => {
    // console.log(data);
    const res = await PostData('user/login', data)
    return res
}

export const Register = async (data: any) => {
    // console.log(data);
    const res = await PostData('user/register', data)
    return res
}


export const CheckUser = async (token:any) => {
    
}