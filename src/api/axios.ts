import axios from 'axios'

const baseURL = 'https://dummyjson.com/'

export const ins = axios.create({ baseURL })
