
import { getAxios, postAxios } from './http';


export async function getTest(name: string, age?: number) {
    return await getAxios('/list', { name, age })
}


