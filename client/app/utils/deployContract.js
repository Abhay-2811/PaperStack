import { ContractData } from './contract_data';
import { walletClient, publicClient } from './viemClient';
import {parseUnits} from 'viem'

export const deployContract = async (auditorsArray, reward, pages, papersCid) => {
    const [account] = await walletClient.getAddresses()
    if(address){
        const hash = await walletClient.deployContract({
            ...ContractData,
            account,
            args: [auditorsArray, reward, pages, papersCid],
            value: parseUnits(reward,18)
        });
        const receipt = await publicClient.waitForTransactionReceipt({hash});
        return receipt.contractAddress;
    }

}
