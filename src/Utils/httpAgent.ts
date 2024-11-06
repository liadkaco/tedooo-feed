import axios, {AxiosInstance} from "axios"

const httpAgent: AxiosInstance = axios.create({
    baseURL:"https://backend.tedooo.com",
     headers:{ "Content-Type": "application/json"}
    })

export default httpAgent;