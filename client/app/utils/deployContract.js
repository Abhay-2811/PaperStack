import { ContractData } from './contract_data';
import { walletClient, publicClient } from './viemClient';
import {parseUnits} from 'viem'

export const deployContract = async (auditorsArray, reward, pages, papersCid) => {
    console.log(auditorsArray, reward, pages, papersCid);
    const [account] = await walletClient.getAddresses()
    if(account){
        const hash = await walletClient.deployContract({
            ...ContractData,
            account,
            args: [Array<String>(auditorsArray), Number(reward), Number(pages), papersCid],
            value: parseUnits(reward,18)
        });
        const receipt = await publicClient.waitForTransactionReceipt({hash});
        return receipt.contractAddress;
    }

}
