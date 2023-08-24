import { Login, CheckUser, Register } from "../repositories/auth.repository";

export const LoginUseCase = async (data: any) => {
    
    const LoginProses = await Login(data)

    if (LoginProses.success) {
        // const userData = await chec
        localStorage.setItem('userData', JSON.stringify({
            token:LoginProses.token
        }))
    }

    return { token: LoginProses.token };
}


export const CheckLogin = () => {
    if (typeof localStorage != 'undefined') {

        const getItem:string|null = localStorage.getItem('userData')

        console.log('check login', getItem)

        if (getItem !== undefined) {

            const userData = JSON.parse(getItem);
    
            if (userData) {
                return userData
            }
        }

        return null

    }

    return false
}


export const CheckUserUseCase = async (token: any) => {
    // const user = await Che
}


export const RegisterUseCase = async (data: any) => {
    
    const RegisterProses = await Register(data)


    if (RegisterProses.success) {

            localStorage.setItem('userData', JSON.stringify({
                token: RegisterProses.token,
            }))

            return {
                data: {
                    token: RegisterProses.token,
                    // ...userData
                },
                ...RegisterProses
            }
        // }

    }

    return RegisterProses
}
