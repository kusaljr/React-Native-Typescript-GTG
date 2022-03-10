import axios from 'axios'
import { API } from './config'

const createQuery = (route: string)=>()=>axios({
    method: 'get',
    url: `${API}${route}`
}).then((res)=> res.data)

export const getCoinDataQuery = ()=> createQuery("");