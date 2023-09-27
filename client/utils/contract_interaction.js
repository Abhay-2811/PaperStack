import { ContractData } from './contract_data';
import { publicClient } from './viemClient';
import {parseUnits, parseEther} from 'viem'


export const deployContract = async (auditorsArray, reward, pages, papersCid, walletClient) => {
    const [account] = await walletClient.getAddresses()
    if(account){
        const hash = await walletClient.deployContract({
            ...ContractData,
            account,
            args: [auditorsArray, parseUnits(reward,18), Number(pages), papersCid],
            value: parseUnits(reward,18)
        });
        const receipt = await publicClient.waitForTransactionReceipt({hash});
        return receipt.contractAddress;
    }

}

export const add_contributor = async(contractAddress,qty,walletClient)=>{
    const [account] = await walletClient.getAddresses();
    const { request } = await publicClient.simulateContract({
        account,
        address: contractAddress,
        abi: ContractData.abi,
        functionName: 'pledgeJob',
        args: [qty],
        value: parseEther('1')
      })
      const hash = await walletClient.writeContract(request);
      await publicClient.waitForTransactionReceipt({ hash });
}

export const get_alloted_pages = async(contractAdd, userAdd)=>{
    const pagesAlloted = await publicClient.readContract({
        address: contractAdd,
        abi: ContractData.abi,
        functionName: 'getAssignedPages',
        args: [userAdd]
    });
    console.log(pagesAlloted);
    return pagesAlloted;
}

export const get_cid = async(contractAdd)=>{
    const cid = await publicClient.readContract({
        address: contractAdd,
        abi: ContractData.abi,
        functionName:'data_cid'
    });
    console.log(cid);
    return cid;
}
