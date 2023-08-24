const BASE_URL_API = process.env.NEXT_PUBLIC_API_STAGING_URL



const getToken = () => {
    if (typeof localStorage != 'undefined') {
        const sessionUser:any = localStorage.getItem('userData');

        if (sessionUser !== undefined) {
            const getData = JSON.parse(sessionUser) ?? '{}'

            return getData.token
        }

        return ''
    }
}

export const GetData = async (url:string) => {
    try {
        const response = await fetch(`${BASE_URL_API}`, {
            method:'GET'
        })
        return response.json()
    } catch (e) {
        return e
    }
}

export const PostData = async (url:string, data:any) => {
    try {
        const response = await fetch(`${BASE_URL_API+url}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data)
        })
        const resJson = await response.json()

        return resJson
    } catch (e) {
        return (e)
   }
}

export const GetDataWithToken = async (url: string, token:string = '') => {
    let tokenSession: string

    if (token !== '') {
        tokenSession = token
    } else {
        tokenSession = getToken()
    }

    try {
        const response = await fetch(`${BASE_URL_API}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${tokenSession}`
            }
        })
        const resJson = await response.json()

        return resJson
    } catch (e) {
        return e
    }
    

}


export const PostDataWithToken = async (url: string, data: any) => {
    const tokenSession = getToken()
    try {
        const response = await fetch(`${BASE_URL_API}`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: 'application/json',
                Authorization: `Bearer ${tokenSession}`
            },
            body:JSON.stringify(data)
        })
        return response.json()
    } catch (e) {
        console.error('error fetching data:', e)
        return e
    }
}