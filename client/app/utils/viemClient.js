import {createWalletClient, createPublicClient, http, custom} from 'viem'
import {filecoinCalibration} from 'viem/chains'

export const walletClient = createWalletClient({
    chain: filecoinCalibration,
    transport: custom(window.ethereum)
  });

export const publicClient = createPublicClient({
    chain: filecoinCalibration,
    transport: http()
})