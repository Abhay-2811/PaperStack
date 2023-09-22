
import {createPublicClient, http} from 'viem'
import {filecoinCalibration} from 'viem/chains'


export const publicClient = createPublicClient({
    chain: filecoinCalibration,
    transport: http()
})