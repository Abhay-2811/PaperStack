export const ContractData = {
  abi: [
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "_auditors",
          "type": "address[]"
        },
        {
          "internalType": "uint256",
          "name": "reward",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "pages",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "PapersCid",
          "type": "string"
        }
      ],
      "stateMutability": "payable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "qty",
          "type": "uint256"
        }
      ],
      "name": "pledgeJob",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "validateJob",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "assignedPages",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "auditors",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "data_cid",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getAssignedPages",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "numPages",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  bytecode:
    '608060405273a9ab19add1f1f7f78465d386fc6e05275e057ef8600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060405162001d5d38038062001d5d83398181016040528101906200007e9190620005ae565b6200009e620000926200012660201b60201c565b6200012e60201b60201c565b823414620000e3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000da90620006bf565b60405180910390fd5b8360049080519060200190620000fb929190620001f2565b50826002819055508160038190555080600590816200011b919062000922565b505050505062000a09565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8280548282559060005260206000209081019282156200026e579160200282015b828111156200026d5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509160200191906001019062000213565b5b5090506200027d919062000281565b5090565b5b808211156200029c57600081600090555060010162000282565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200030482620002b9565b810181811067ffffffffffffffff82111715620003265762000325620002ca565b5b80604052505050565b60006200033b620002a0565b9050620003498282620002f9565b919050565b600067ffffffffffffffff8211156200036c576200036b620002ca565b5b602082029050602081019050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620003af8262000382565b9050919050565b620003c181620003a2565b8114620003cd57600080fd5b50565b600081519050620003e181620003b6565b92915050565b6000620003fe620003f8846200034e565b6200032f565b905080838252602082019050602084028301858111156200042457620004236200037d565b5b835b818110156200045157806200043c8882620003d0565b84526020840193505060208101905062000426565b5050509392505050565b600082601f830112620004735762000472620002b4565b5b815162000485848260208601620003e7565b91505092915050565b6000819050919050565b620004a3816200048e565b8114620004af57600080fd5b50565b600081519050620004c38162000498565b92915050565b600080fd5b600067ffffffffffffffff821115620004ec57620004eb620002ca565b5b620004f782620002b9565b9050602081019050919050565b60005b838110156200052457808201518184015260208101905062000507565b60008484015250505050565b6000620005476200054184620004ce565b6200032f565b905082815260208101848484011115620005665762000565620004c9565b5b6200057384828562000504565b509392505050565b600082601f830112620005935762000592620002b4565b5b8151620005a584826020860162000530565b91505092915050565b60008060008060808587031215620005cb57620005ca620002aa565b5b600085015167ffffffffffffffff811115620005ec57620005eb620002af565b5b620005fa878288016200045b565b94505060206200060d87828801620004b2565b93505060406200062087828801620004b2565b925050606085015167ffffffffffffffff811115620006445762000643620002af565b5b62000652878288016200057b565b91505092959194509250565b600082825260208201905092915050565b7f5472616e736163742065786163742072657761726420616d6f756e7400000000600082015250565b6000620006a7601c836200065e565b9150620006b4826200066f565b602082019050919050565b60006020820190508181036000830152620006da8162000698565b9050919050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200073457607f821691505b6020821081036200074a5762000749620006ec565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620007b47fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000775565b620007c0868362000775565b95508019841693508086168417925050509392505050565b6000819050919050565b600062000803620007fd620007f7846200048e565b620007d8565b6200048e565b9050919050565b6000819050919050565b6200081f83620007e2565b620008376200082e826200080a565b84845462000782565b825550505050565b600090565b6200084e6200083f565b6200085b81848462000814565b505050565b5b8181101562000883576200087760008262000844565b60018101905062000861565b5050565b601f821115620008d2576200089c8162000750565b620008a78462000765565b81016020851015620008b7578190505b620008cf620008c68562000765565b83018262000860565b50505b505050565b600082821c905092915050565b6000620008f760001984600802620008d7565b1980831691505092915050565b6000620009128383620008e4565b9150826002028217905092915050565b6200092d82620006e1565b67ffffffffffffffff811115620009495762000948620002ca565b5b6200095582546200071b565b6200096282828562000887565b600060209050601f8311600181146200099a576000841562000985578287015190505b62000991858262000904565b86555062000a01565b601f198416620009aa8662000750565b60005b82811015620009d457848901518255600182019150602085019450602081019050620009ad565b86831015620009f45784890151620009f0601f891682620008e4565b8355505b6001600288020188555050505b505050505050565b6113448062000a196000396000f3fe6080604052600436106100915760003560e01c8063c0a03b8111610059578063c0a03b811461017d578063c9e3540c146101ba578063e4e81490146101d6578063ee4bf42714610201578063f2fde38b1461021d57610091565b80631b8b444c146100965780634de6217d146100d3578063715018a6146100fe5780638da5cb5b146101155780638dbf100814610140575b600080fd5b3480156100a257600080fd5b506100bd60048036038101906100b891906109d0565b610246565b6040516100ca9190610a3e565b60405180910390f35b3480156100df57600080fd5b506100e8610285565b6040516100f59190610a68565b60405180910390f35b34801561010a57600080fd5b5061011361028b565b005b34801561012157600080fd5b5061012a61029f565b6040516101379190610a3e565b60405180910390f35b34801561014c57600080fd5b5061016760048036038101906101629190610aaf565b6102c8565b6040516101749190610b9a565b60405180910390f35b34801561018957600080fd5b506101a4600480360381019061019f9190610bbc565b61035f565b6040516101b19190610a68565b60405180910390f35b6101d460048036038101906101cf9190610c3a565b610390565b005b3480156101e257600080fd5b506101eb610536565b6040516101f89190610cf7565b60405180910390f35b61021b600480360381019061021691906109d0565b6105c4565b005b34801561022957600080fd5b50610244600480360381019061023f9190610aaf565b6107b9565b005b6004818154811061025657600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60035481565b61029361083c565b61029d60006108ba565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561035357602002820191906000526020600020905b81548152602001906001019080831161033f575b50505050509050919050565b6007602052816000526040600020818154811061037b57600080fd5b90600052602060002001600091509150505481565b6000805b60048054905081101561042e57600481815481106103b5576103b4610d19565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff160361041b576001915061042e565b808061042690610d77565b915050610394565b506001151581151514610476576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046d90610e0b565b60405180910390fd5b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905090508273ffffffffffffffffffffffffffffffffffffffff166108fc826003546002546104e89190610e5a565b6104f29190610e8b565b670de0b6b3a76400006105059190610ecd565b9081150290604051600060405180830381858888f19350505050158015610530573d6000803e3d6000fd5b50505050565b6005805461054390610f30565b80601f016020809104026020016040519081016040528092919081815260200182805461056f90610f30565b80156105bc5780601f10610591576101008083540402835291602001916105bc565b820191906000526020600020905b81548152906001019060200180831161059f57829003601f168201915b505050505081565b670de0b6b3a7640000341461060e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060590610fad565b60405180910390fd5b600a811115610652576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064990611019565b60405180910390fd5b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663aacc5a176040518163ffffffff1660e01b8152600401600060405180830381865afa1580156106c1573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906106ea9190611196565b905060005b828110156107b457600060016003544285858151811061071257610711610d19565b5b60200260200101516107249190610e5a565b61072e91906111df565b6107389190610ecd565b9050600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150506001900390600052602060002001600090919091909150555080806107ac90610d77565b9150506106ef565b505050565b6107c161083c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610830576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082790611282565b60405180910390fd5b610839816108ba565b50565b61084461097e565b73ffffffffffffffffffffffffffffffffffffffff1661086261029f565b73ffffffffffffffffffffffffffffffffffffffff16146108b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108af906112ee565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6109ad8161099a565b81146109b857600080fd5b50565b6000813590506109ca816109a4565b92915050565b6000602082840312156109e6576109e5610990565b5b60006109f4848285016109bb565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610a28826109fd565b9050919050565b610a3881610a1d565b82525050565b6000602082019050610a536000830184610a2f565b92915050565b610a628161099a565b82525050565b6000602082019050610a7d6000830184610a59565b92915050565b610a8c81610a1d565b8114610a9757600080fd5b50565b600081359050610aa981610a83565b92915050565b600060208284031215610ac557610ac4610990565b5b6000610ad384828501610a9a565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610b118161099a565b82525050565b6000610b238383610b08565b60208301905092915050565b6000602082019050919050565b6000610b4782610adc565b610b518185610ae7565b9350610b5c83610af8565b8060005b83811015610b8d578151610b748882610b17565b9750610b7f83610b2f565b925050600181019050610b60565b5085935050505092915050565b60006020820190508181036000830152610bb48184610b3c565b905092915050565b60008060408385031215610bd357610bd2610990565b5b6000610be185828601610a9a565b9250506020610bf2858286016109bb565b9150509250929050565b6000610c07826109fd565b9050919050565b610c1781610bfc565b8114610c2257600080fd5b50565b600081359050610c3481610c0e565b92915050565b600060208284031215610c5057610c4f610990565b5b6000610c5e84828501610c25565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610ca1578082015181840152602081019050610c86565b60008484015250505050565b6000601f19601f8301169050919050565b6000610cc982610c67565b610cd38185610c72565b9350610ce3818560208601610c83565b610cec81610cad565b840191505092915050565b60006020820190508181036000830152610d118184610cbe565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610d828261099a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610db457610db3610d48565b5b600182019050919050565b7f73656e6465722073686f756c642062652061756469746f720000000000000000600082015250565b6000610df5601883610c72565b9150610e0082610dbf565b602082019050919050565b60006020820190508181036000830152610e2481610de8565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610e658261099a565b9150610e708361099a565b925082610e8057610e7f610e2b565b5b828204905092915050565b6000610e968261099a565b9150610ea18361099a565b9250828202610eaf8161099a565b91508282048414831517610ec657610ec5610d48565b5b5092915050565b6000610ed88261099a565b9150610ee38361099a565b9250828201905080821115610efb57610efa610d48565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610f4857607f821691505b602082108103610f5b57610f5a610f01565b5b50919050565b7f5374616b652065786163746c79203120546f6b656e0000000000000000000000600082015250565b6000610f97601583610c72565b9150610fa282610f61565b602082019050919050565b60006020820190508181036000830152610fc681610f8a565b9050919050565b7f4d61782031302070616765732063616e20626520726571756573746564000000600082015250565b6000611003601d83610c72565b915061100e82610fcd565b602082019050919050565b6000602082019050818103600083015261103281610ff6565b9050919050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61107682610cad565b810181811067ffffffffffffffff821117156110955761109461103e565b5b80604052505050565b60006110a8610986565b90506110b4828261106d565b919050565b600067ffffffffffffffff8211156110d4576110d361103e565b5b602082029050602081019050919050565b600080fd5b6000815190506110f9816109a4565b92915050565b600061111261110d846110b9565b61109e565b90508083825260208201905060208402830185811115611135576111346110e5565b5b835b8181101561115e578061114a88826110ea565b845260208401935050602081019050611137565b5050509392505050565b600082601f83011261117d5761117c611039565b5b815161118d8482602086016110ff565b91505092915050565b6000602082840312156111ac576111ab610990565b5b600082015167ffffffffffffffff8111156111ca576111c9610995565b5b6111d684828501611168565b91505092915050565b60006111ea8261099a565b91506111f58361099a565b92508261120557611204610e2b565b5b828206905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061126c602683610c72565b915061127782611210565b604082019050919050565b6000602082019050818103600083015261129b8161125f565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006112d8602083610c72565b91506112e3826112a2565b602082019050919050565b60006020820190508181036000830152611307816112cb565b905091905056fea264697066735822122000f297fc077a462a11d542738cb363f5b95aa51e8a5eb2ece9e198402bfd63d064736f6c63430008120033'
}

export const dealClient = {
  address: '0x650B740f7451BFEbD18a1dE705C8BBfa64d53C7A',
  abi: [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "int256",
          "name": "errorCode",
          "type": "int256"
        }
      ],
      "name": "ActorError",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ActorNotFound",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FailToCallActor",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidAddress",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        }
      ],
      "name": "InvalidCodec",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidResponseLength",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NegativeValueNotAllowed",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "NotEnoughBalance",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "size",
          "type": "uint64"
        },
        {
          "indexed": true,
          "internalType": "bool",
          "name": "verified",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        }
      ],
      "name": "DealProposalCreate",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "received",
          "type": "string"
        }
      ],
      "name": "ReceivedDataCap",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "AUTHENTICATE_MESSAGE_METHOD_NUM",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "DATACAP_ACTOR_ETH_ADDRESS",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "DATACAP_RECEIVER_HOOK_METHOD_NUM",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MARKET_ACTOR_ETH_ADDRESS",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MARKET_NOTIFY_DEAL_METHOD_NUM",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "addBalance",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "dealRequestIdx",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "idx",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "valid",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "dealRequests",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "piece_cid",
          "type": "bytes"
        },
        {
          "internalType": "uint64",
          "name": "piece_size",
          "type": "uint64"
        },
        {
          "internalType": "bool",
          "name": "verified_deal",
          "type": "bool"
        },
        {
          "internalType": "string",
          "name": "label",
          "type": "string"
        },
        {
          "internalType": "int64",
          "name": "start_epoch",
          "type": "int64"
        },
        {
          "internalType": "int64",
          "name": "end_epoch",
          "type": "int64"
        },
        {
          "internalType": "uint256",
          "name": "storage_price_per_epoch",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "provider_collateral",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "client_collateral",
          "type": "uint256"
        },
        {
          "internalType": "uint64",
          "name": "extra_params_version",
          "type": "uint64"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "location_ref",
              "type": "string"
            },
            {
              "internalType": "uint64",
              "name": "car_size",
              "type": "uint64"
            },
            {
              "internalType": "bool",
              "name": "skip_ipni_announce",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "remove_unsealed_copy",
              "type": "bool"
            }
          ],
          "internalType": "struct ExtraParamsV1",
          "name": "extra_params",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "dealsLength",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getDealByIndex",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bytes",
              "name": "piece_cid",
              "type": "bytes"
            },
            {
              "internalType": "uint64",
              "name": "piece_size",
              "type": "uint64"
            },
            {
              "internalType": "bool",
              "name": "verified_deal",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "label",
              "type": "string"
            },
            {
              "internalType": "int64",
              "name": "start_epoch",
              "type": "int64"
            },
            {
              "internalType": "int64",
              "name": "end_epoch",
              "type": "int64"
            },
            {
              "internalType": "uint256",
              "name": "storage_price_per_epoch",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "provider_collateral",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "client_collateral",
              "type": "uint256"
            },
            {
              "internalType": "uint64",
              "name": "extra_params_version",
              "type": "uint64"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "location_ref",
                  "type": "string"
                },
                {
                  "internalType": "uint64",
                  "name": "car_size",
                  "type": "uint64"
                },
                {
                  "internalType": "bool",
                  "name": "skip_ipni_announce",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "remove_unsealed_copy",
                  "type": "bool"
                }
              ],
              "internalType": "struct ExtraParamsV1",
              "name": "extra_params",
              "type": "tuple"
            }
          ],
          "internalType": "struct DealRequest",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        }
      ],
      "name": "getDealProposal",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "proposalId",
          "type": "bytes32"
        }
      ],
      "name": "getExtraParams",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "extra_params",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "cid",
          "type": "bytes"
        }
      ],
      "name": "getProposalIdSet",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "requestId",
              "type": "bytes32"
            },
            {
              "internalType": "bool",
              "name": "valid",
              "type": "bool"
            }
          ],
          "internalType": "struct RequestId",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "cid",
          "type": "bytes"
        }
      ],
      "name": "getProviderSet",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bytes",
              "name": "provider",
              "type": "bytes"
            },
            {
              "internalType": "bool",
              "name": "valid",
              "type": "bool"
            }
          ],
          "internalType": "struct ProviderSet",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "method",
          "type": "uint64"
        },
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        },
        {
          "internalType": "bytes",
          "name": "params",
          "type": "bytes"
        }
      ],
      "name": "handle_filecoin_method",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        },
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "bytes",
              "name": "piece_cid",
              "type": "bytes"
            },
            {
              "internalType": "uint64",
              "name": "piece_size",
              "type": "uint64"
            },
            {
              "internalType": "bool",
              "name": "verified_deal",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "label",
              "type": "string"
            },
            {
              "internalType": "int64",
              "name": "start_epoch",
              "type": "int64"
            },
            {
              "internalType": "int64",
              "name": "end_epoch",
              "type": "int64"
            },
            {
              "internalType": "uint256",
              "name": "storage_price_per_epoch",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "provider_collateral",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "client_collateral",
              "type": "uint256"
            },
            {
              "internalType": "uint64",
              "name": "extra_params_version",
              "type": "uint64"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "location_ref",
                  "type": "string"
                },
                {
                  "internalType": "uint64",
                  "name": "car_size",
                  "type": "uint64"
                },
                {
                  "internalType": "bool",
                  "name": "skip_ipni_announce",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "remove_unsealed_copy",
                  "type": "bool"
                }
              ],
              "internalType": "struct ExtraParamsV1",
              "name": "extra_params",
              "type": "tuple"
            }
          ],
          "internalType": "struct DealRequest",
          "name": "deal",
          "type": "tuple"
        }
      ],
      "name": "makeDealProposal",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "pieceDeals",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "pieceProviders",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "provider",
          "type": "bytes"
        },
        {
          "internalType": "bool",
          "name": "valid",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "pieceRequests",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "requestId",
          "type": "bytes32"
        },
        {
          "internalType": "bool",
          "name": "valid",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "pieceStatus",
      "outputs": [
        {
          "internalType": "enum DealClient.Status",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "pieceCid",
          "type": "bytes"
        }
      ],
      "name": "updateActivationStatus",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "client",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "withdrawBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  bytecode: {
    object:
      '0x608060405234801561001057600080fd5b50600580546001600160a01b03191633179055614a54806100326000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c806378133bb2116100b8578063d91921ed1161007c578063d91921ed146102f9578063dd08881c1461030e578063dd27fe901461034d578063f44a890314610360578063f4b2e4d814610380578063f82704f01461039357600080fd5b806378133bb214610279578063868e10c4146102995780638da5cb5b146102bb57806396925ae6146102ce578063b34ba252146102ee57600080fd5b8063297ab486116100ff578063297ab486146101fd57806329aa3d2a146102055780634634aed5146102135780636067f4541461023357806374112d661461023e57600080fd5b80627067901461013b57806303988f841461015c5780630a0e0c91146101865780630cf20cc9146101c25780632522f2b7146101e2575b600080fd5b610146639d8b067881565b604051610153919061316f565b60405180910390f35b61016f61016a366004613195565b6103b4565b6040516101539b9a99989796959493929190613284565b61014661019436600461342f565b600381805160208101820180518482526020830160208501209152546001600160401b031693508492505050565b6101d56101d036600461348e565b610627565b60405161015391906134cb565b6101f0600660ff60981b0181565b60405161015391906134e2565b6004546101d5565b6101f0600560ff60981b0181565b610226610221366004613195565b61068a565b60405161015391906134f0565b61014663f98c996681565b61026b61024c366004613195565b6000602052806000526040600020805460019091015490915060ff1682565b604051610153929190613501565b61028c610287366004613566565b6106ae565b60405161015391906135d9565b6102ac6102a7366004613604565b61079e565b6040516101539392919061367a565b6005546101f0906001600160a01b031681565b6102e16102dc366004613195565b610863565b604051610153919061379a565b61014663de180de381565b61030c610307366004613195565b610b1d565b005b61026b61031c36600461342f565b600181805160208101820180518482526020830160208501209152805460019091015490945060ff16925084915050565b6101d561035b3660046137c1565b610b49565b61037361036e366004613566565b610cbe565b604051610153919061381e565b61022661038e366004613195565b610d1d565b6103a66103a136600461342f565b610df0565b60405161015392919061382c565b600481815481106103c457600080fd5b906000526020600020600a90910201805490915081906103e390613862565b80601f016020809104026020016040519081016040528092919081815260200182805461040f90613862565b801561045c5780601f106104315761010080835404028352916020019161045c565b820191906000526020600020905b81548152906001019060200180831161043f57829003601f168201915b50505050600183015460028401805493946001600160401b03831694600160401b90930460ff1693509161048f90613862565b80601f01602080910402602001604051908101604052809291908181526020018280546104bb90613862565b80156105085780601f106104dd57610100808354040283529160200191610508565b820191906000526020600020905b8154815290600101906020018083116104eb57829003601f168201915b505050506003830154600484015460058501546006860154600780880154969785820b97600160401b90960490910b95509293919290916001600160401b0316906008810160405180608001604052908160008201805461056890613862565b80601f016020809104026020016040519081016040528092919081815260200182805461059490613862565b80156105e15780601f106105b6576101008083540402835291602001916105e1565b820191906000526020600020905b8154815290600101906020018083116105c457829003601f168201915b5050509183525050600191909101546001600160401b038116602083015260ff600160401b8204811615156040840152600160481b90910416151560609091015290508b565b6005546000906001600160a01b0316331461064157600080fd5b6000604051806040016040528061065786610eab565b815260200161066585610ef4565b90529050600061067482610f43565b905061067f81610f8d565b925050505b92915050565b6060600061069783610fae565b90506106a78161014001516112b8565b9392505050565b6106c960405160408082019052606081526000602082015290565b600283836040516106db92919061389b565b908152602001604051809103902060405180604001604052908160008201805461070490613862565b80601f016020809104026020016040519081016040528092919081815260200182805461073090613862565b801561077d5780601f106107525761010080835404028352916020019161077d565b820191906000526020600020905b81548152906001019060200180831161076057829003601f168201915b50505091835250506001919091015460ff1615156020909101529392505050565b60008060608082639d8b0677196001600160401b038916016107f1576107c386611315565b60006107cf60016114a2565b90506107dc8160016114c2565b6107e5816114dd565b92506051915050610853565b63f98c9965196001600160401b038916016108145761080f8661150a565b610853565b63de180de2196001600160401b038916016108325761080f86611680565b60405162461bcd60e51b815260040161084a906138fa565b60405180910390fd5b6000989097509095509350505050565b61086b612fab565b6004828154811061087e5761087e61390a565b90600052602060002090600a0201604051806101600160405290816000820180546108a890613862565b80601f01602080910402602001604051908101604052809291908181526020018280546108d490613862565b80156109215780601f106108f657610100808354040283529160200191610921565b820191906000526020600020905b81548152906001019060200180831161090457829003601f168201915b505050918352505060018201546001600160401b0381166020830152600160401b900460ff161515604082015260028201805460609092019161096390613862565b80601f016020809104026020016040519081016040528092919081815260200182805461098f90613862565b80156109dc5780601f106109b1576101008083540402835291602001916109dc565b820191906000526020600020905b8154815290600101906020018083116109bf57829003601f168201915b50505091835250506003820154600781810b6020840152600160401b909104810b6040808401919091526004840154606084015260058401546080840152600684015460a0840152908301546001600160401b031660c083015260e090910190600883019051806080016040529081600082018054610a5a90613862565b80601f0160208091040260200160405190810160405280929190818152602001828054610a8690613862565b8015610ad35780601f10610aa857610100808354040283529160200191610ad3565b820191906000526020600020905b815481529060010190602001808311610ab657829003601f168201915b5050509183525050600191909101546001600160401b038116602083015260ff600160401b8204811615156040840152600160481b90910416151560609091015290525092915050565b6005546001600160a01b03163314610b3457600080fd5b610b46610b4030610eab565b826116de565b50565b6005546000906001600160a01b03163314610b6357600080fd5b600480546001810182556000918252908390829060209020600a90910201610b8b8282613e6a565b50506000423383604051602001610ba493929190613e9c565b60405160208183030381529060405280519060200120905060405160408082018152838252600160208084019190915260008481529081905220815181556020820151600191909101805460ff19169115159190911790555060405160408082019052818152600160208201819052610c1d8680613920565b604051610c2b92919061389b565b9081526020016040518091039020815181556020820151600191909101805460ff191691151591909117905550610c686060850160408601613ede565b1515817ffd6419d07e4c269e58d0c63969756c2124155b4a8d6dd08b8cd46e3a9acbf625610c9c6040880160208901613eff565b8760c00135604051610caf929190613f20565b60405180910390a39392505050565b610cd8604051604080820190526000808252602082015290565b60018383604051610cea92919061389b565b9081526020016040518091039020604051604081810190528154815260019091015460ff16151560208201529392505050565b60606000610d2a83610fae565b9050610d34613045565b604051602081016040528083519052815260208201516001600160401b03166020820152604082015115156040820152610d6d30610eab565b6060820152610d7c600061172a565b6080820152606082015160a0820152608082015160070b60c082015260a082015160070b60e0820152610db260c0830151610ef4565b610100820152610dc560e0830151610ef4565b610120820152610dd9610100830151610ef4565b610140820152610de881611782565b949350505050565b6002818051602081018201805184825260208301602085012091528054909450849350610e1f92509050613862565b80601f0160208091040260200160405190810160405280929190818152602001828054610e4b90613862565b8015610e985780601f10610e6d57610100808354040283529160200191610e98565b820191906000526020600020905b815481529060010190602001808311610e7b57829003601f168201915b5050506001909301549192505060ff1682565b610ebf604051602081016040526060815290565b604051806020016040528083604051602001610edb9190613f3b565b6040516020818303038152906040528152509050919050565b610f0f60405160408082019052606081526000602082015290565b6000610f1c836000611876565b90506000604051604080820190528083518152602001836020015115159052949350505050565b610f5e60405160408082019052606081526000602082015290565b6000610f69836118c7565b90506000610f8260056387ed0a646051856000806118ff565b9050610de8816119f1565b600080610f9f83518460200151611a85565b905060008151610de890613f65565b610fb6612fab565b6000828152602081905260408120604051604080820190528154815260019091015460ff16151560208201908152909150516110045760405162461bcd60e51b815260040161084a90613fe1565b60048151815481106110185761101861390a565b90600052602060002090600a02016040518061016001604052908160008201805461104290613862565b80601f016020809104026020016040519081016040528092919081815260200182805461106e90613862565b80156110bb5780601f10611090576101008083540402835291602001916110bb565b820191906000526020600020905b81548152906001019060200180831161109e57829003601f168201915b505050918352505060018201546001600160401b0381166020830152600160401b900460ff16151560408201526002820180546060909201916110fd90613862565b80601f016020809104026020016040519081016040528092919081815260200182805461112990613862565b80156111765780601f1061114b57610100808354040283529160200191611176565b820191906000526020600020905b81548152906001019060200180831161115957829003601f168201915b50505091835250506003820154600781810b6020840152600160401b909104810b6040808401919091526004840154606084015260058401546080840152600684015460a0840152908301546001600160401b031660c083015260e0909101906008830190518060800160405290816000820180546111f490613862565b80601f016020809104026020016040519081016040528092919081815260200182805461122090613862565b801561126d5780601f106112425761010080835404028352916020019161126d565b820191906000526020600020905b81548152906001019060200180831161125057829003601f168201915b5050509183525050600191909101546001600160401b038116602083015260ff600160401b8204811615156040840152600160481b9091041615156060909101529052509392505050565b606060006112c660406114a2565b90506112d3816004611ab7565b6112df83518290611ac3565b6112ee83602001518290611ae1565b6112fd836040015182906114c2565b61130c836060015182906114c2565b6106a7816114dd565b33600560ff60981b011461133b5760405162461bcd60e51b815260040161084a90614035565b600061134682611aed565b905060006113578260200151611b4f565b905060008151519050600181604051611370919061406d565b90815260200160405180910390206001015460ff166113a15760405162461bcd60e51b815260040161084a906140c0565b6002816040516113b1919061406d565b90815260200160405180910390206001015460ff16156113e35760405162461bcd60e51b815260040161084a9061412a565b600061140c6001836040516113f8919061406d565b908152602001604051809103902054610fae565b90508060400151151583604001511515146114395760405162461bcd60e51b815260040161084a9061416e565b8060c0015161144c846101000151610f8d565b111561146a5760405162461bcd60e51b815260040161084a906141c4565b80610100015161147e846101400151610f8d565b1061149b5760405162461bcd60e51b815260040161084a9061421e565b5050505050565b6114aa61312b565b6114b5815183611d84565b5060006020820152919050565b6114d982826114d2576014611e01565b6015611e01565b5050565b60608160200151156115015760405162461bcd60e51b815260040161084a90614251565b81515192915050565b33600560ff60981b01146115305760405162461bcd60e51b815260040161084a90614035565b600061153b82611e10565b905060006115498251611b4f565b9050600181515160405161155d919061406d565b90815260200160405180910390206001015460ff1661158e5760405162461bcd60e51b815260040161084a906140c0565b60028151516040516115a0919061406d565b90815260200160405180910390206001015460ff16156115d25760405162461bcd60e51b815260040161084a9061412a565b60405180604001604052808260800151518152600160209091015260028251516040516115ff919061406d565b90815260200160405180910390208151819061161b9082614261565b506020820151600191909101805460ff1916911515919091179055506020820151600382515160405161164e919061406d565b9081526020016040518091039020805467ffffffffffffffff19166001600160401b0392909216919091179055505050565b33600660ff60981b01146116a65760405162461bcd60e51b815260040161084a90614384565b7f10aa319ed8cad9bceb033c0c2788c4ae17469ac844e4c6e2c2e20e74ca8a7be86040516116d3906143bc565b60405180910390a150565b60006116e983611e7c565b905060006117026005633105f1a66051858760006118ff565b905080511561172457604051630e74990760e01b815260040160405180910390fd5b50505050565b61173e604051602081016040526060815290565b600061174983611e98565b90506040516020810160405280825160405160200161176891906143d9565b604051602081830303815290604052815250915050919050565b6060600061179060406114a2565b905061179d81600b611ab7565b6117d18351516040516020016117b391906143f0565b60405160208183030381529060405282611f1790919063ffffffff16565b6117e083602001518290611ae1565b6117ef836040015182906114c2565b6117ff8360600151518290611f39565b61180f8360800151518290611f39565b61181e8360a001518290611ac3565b61182d8360c001518290611f46565b61183c8360e001518290611f46565b61185461184d846101000151611f74565b8290611f39565b61186561184d846101200151611f74565b61130c61184d846101400151611f74565b61189c604051806060016040528060608152602001600015158152602001600081525090565b6106a7836040516020016118b09190614405565b604051602081830303815290604052836000612089565b606060006118d560406114a2565b90506118e2816002611ab7565b6118ef8351518290611f39565b61130c61184d8460200151611f74565b60604783811015611927578084604051634787a10360e11b815260040161084a92919061441a565b6000806005607f60991b01898787611940576000611943565b60015b8b8b8f60405160200161195b96959493929190614431565b604051602081830303815290604052604051611977919061406d565b600060405180830381855af49150503d80600081146119b2576040513d603f01601f191681016040523d815291503d6000602084013e6119b7565b606091505b5091509150816119da57604051638a7db5bf60e01b815260040160405180910390fd5b6119e38161215e565b9a9950505050505050505050565b611a0c60405160408082019052606081526000602082015290565b606060008084511115611a3b57611a238482612235565b9092509050600082511115611a3b57610de8826123a8565b60405160408082019052806000604051818152601f19601f8301168101602001604052908015611a72576020820181803683370190505b5081526000602090910152949350505050565b611aab604051806060016040528060608152602001600015158152602001600081525090565b6106a783836000612089565b6114d98260048361250e565b611ad08260038351612515565b611adc81835190612632565b505050565b6114d982600083612515565b611b07604051604080820190526060808252602082015290565b600080611b148482612659565b9250905060028114611b2857611b28614492565b611b328483612235565b9084529150611b418483612235565b506020840152509092915050565b611b57613045565b600080611b648482612659565b92509050600b8114611b7857611b78614492565b6060611b848584612235565b9350905080600081518110611b9b57611b9b61390a565b60200101516001600160f81b03191615611bb757611bb7614492565b60018151611bc591906144be565b6001600160401b03811115611bdc57611bdc61333a565b604051818152601f19601f8301168101602001604052908015611c06576020820181803683370190505b5084515260015b8151811015611c7e57818181518110611c2857611c2861390a565b60200101516001600160f81b031916855151611c456001846144be565b81518110611c5557611c5561390a565b60200101906001600160f81b031916908160001a90535080611c76816144d1565b915050611c0d565b50611c8985846126a5565b6001600160401b0390911660208601529250611ca585846126e6565b90151560408601529250611cb98584612235565b8560600151919091529250611cce8584612235565b8560800151919091529250611ce38584612751565b60a08601919091529250611cf78584612860565b60079190910b60c08601529250611d0e8584612860565b60079190910b60e086015292506060611d278685612235565b94509050611d34816123a8565b6101008601526060611d468786612235565b95509050611d53816123a8565b6101208701526060611d658887612235565b96509050611d72816123a8565b61014088015250949695505050505050565b611d9f60405160408082019052606081526000602082015290565b611daa6020836144fa565b15611dd257611dba6020836144fa565b611dc59060206144be565b611dcf908361450e565b91505b602083018290526040518084526000815282810160200181811015611df657600080fd5b604052509192915050565b611adc60e082178351906128af565b611e2b60405160408082019052606081526000602082015290565b600080611e388482612659565b9250905060028114611e4c57611e4c614492565b611e568483612235565b9084529150611e6584836126a5565b506001600160401b03166020840152509092915050565b60606000611e8a60406114a2565b905061130c83518290611f39565b611eb360405160408082019052606081526000602082015290565b611ece60405160408082019052606081526000602082015290565b6701ffffffffffffff600784901c1692607f166000849003611efd57611ef482826128af565b50909392505050565b611f0a82608083176128af565b5050611ece565b50919050565b611f2460d88351906128af565b50611f32602a8351906128af565b506114d982825b611ad08260028351612515565b60008160070b12611f5d576114d982600083612515565b6114d9826001611f6f84600019614521565b612515565b60606000825151611f8690600161450e565b6001600160401b03811115611f9d57611f9d61333a565b604051818152601f19601f8301168101602001604052908015611fc7576020820181803683370190505b50905082602001511515600114611fdf576000611fe5565b600160f81b5b81600081518110611ff857611ff861390a565b60200101906001600160f81b031916908160001a905350600160005b845151811015611ef457845181815181106120315761203161390a565b60200101516001600160f81b0319168383815181106120525761205261390a565b60200101906001600160f81b031916908160001a90535081612073816144d1565b9250508080612081906144d1565b915050612014565b6120af604051806060016040528060608152602001600015158152602001600081525090565b602084018451600059601f831615600181146120dd57601f84166020908103808601845283010192506120e7565b6020820192508382525b508282848660046101c2fa506020815101810160405280515b6020811461212e5760006020830151146001811461211e575061212e565b60208301925050601f1901612100565b815284525050506020810183905281156121485781612152565b6121528151612922565b60408201529392505050565b60606000808060208501855181019061217791906145da565b919450925090506001600160401b0382166121b1578051156121ac57604051630e74990760e01b815260040160405180910390fd5b612214565b6001600160401b038216605114806121d257506001600160401b0382166071145b156121f95780516000036121ac57604051630e74990760e01b815260040160405180910390fd5b8160405163f1f6bced60e01b815260040161084a919061316f565b8215610de8578260405163d4bb667160e01b815260040161084a91906134cb565b606060008060006122468686612960565b96509092506001600160401b0316905060ff82166006148061226b575060ff82166002145b6122875760405162461bcd60e51b815260040161084a90614685565b60051960ff8316016122c05761229d8686612960565b96509092506001600160401b0316905060ff82166002146122c0576122c0614492565b60006122cc828761450e565b90506000826001600160401b038111156122e8576122e861333a565b604051818152601f19601f8301168101602001604052908015612312576020820181803683370190505b5090506000875b8381101561238b578981815181106123335761233361390a565b60200101516001600160f81b0319168383815181106123545761235461390a565b60200101906001600160f81b031916908160001a90535081612375816144d1565b9250508080612383906144d1565b915050612319565b5081612397858a61450e565b9650965050505050505b9250929050565b6123c360405160408082019052606081526000602082015290565b81516000036123fb57604051806040016040528060405160408082019052600181526000602080830182905291835291015292915050565b60006001835161240b91906144be565b6001600160401b038111156124225761242261333a565b604051818152601f19601f830116810160200160405290801561244c576020820181803683370190505b5090506000836000815181106124645761246461390a565b60200101516001600160f81b031916600160f81b03612481575060015b60015b84518110156124f35784818151811061249f5761249f61390a565b60200101516001600160f81b031916836124ba6001846144be565b815181106124ca576124ca61390a565b60200101906001600160f81b031916908160001a905350806124eb816144d1565b915050612484565b50604051604080820190529182521515602082015292915050565b611adc8383835b6017816001600160401b03161161253b5761172460e0600584901b1682178451906128af565b60ff816001600160401b03161161257c576125636018611fe0600585901b16178451906128af565b506117246001600160401b038216600185519190612add565b61ffff816001600160401b0316116125be576125a56019611fe0600585901b16178451906128af565b506117246001600160401b038216600285519190612add565b63ffffffff816001600160401b031611612602576125e9601a611fe0600585901b16178451906128af565b506117246001600160401b038216600485519190612add565b612619601b611fe0600585901b16178451906128af565b506117246001600160401b038216600885519190612add565b61264d60405160408082019052606081526000602082015290565b6106a783838451612b6c565b6000806000806126698686612960565b96509092506001600160401b0316905060ff821660041461269c5760405162461bcd60e51b815260040161084a906146c9565b95939450505050565b6000806000806126b58686612960565b96509092506001600160401b0316905060ff82161561269c5760405162461bcd60e51b815260040161084a9061471b565b6000806000806126f68686612960565b96509092506001600160401b0316905060ff82166007146127295760405162461bcd60e51b815260040161084a9061475f565b60158114806127385750601481145b61274457612744614492565b6014141595939450505050565b606060008060006127628686612960565b96509092506001600160401b0316905060ff82166003146127955760405162461bcd60e51b815260040161084a906147b0565b60006127a1828761450e565b90506000826001600160401b038111156127bd576127bd61333a565b604051818152601f19601f83011681016020016040529080156127e7576020820181803683370190505b5090506000875b8381101561238b578981815181106128085761280861390a565b60200101516001600160f81b0319168383815181106128295761282961390a565b60200101906001600160f81b031916908160001a9053508161284a816144d1565b9250508080612858906144d1565b9150506127ee565b6000806000806128708686612960565b96509092506001600160401b0316905060ff821660011480612893575060ff8216155b61269c5760405162461bcd60e51b815260040161084a90614812565b6128ca60405160408082019052606081526000602082015290565b6000835151905060006128de82600161450e565b9050846020015182106128ff576128ff856128fa836002614822565b612c46565b84516020838201018581538151831115612917578282525b509495945050505050565b600061292d82612c61565b1561293a57506000919050565b60006020830151905061294c81612caa565b915060086020845103028201915050919050565b6000806000806129708686612e9a565b905061297d60018661450e565b94506007600582901c16601f8216601c81106129ab5760405162461bcd60e51b815260040161084a90614883565b60188160ff1610156129c95790945060ff169250849150612ad69050565b8060ff16601803612a265760006129e08989612e9a565b90506129ed60018961450e565b975060188160ff161015612a135760405162461bcd60e51b815260040161084a906148b6565b9195505060ff169250849150612ad69050565b8060ff16601903612a60576000612a3d8989612ee8565b9050612a4a60028961450e565b97509195505061ffff169250849150612ad69050565b8060ff16601a03612a9c576000612a778989612f29565b9050612a8460048961450e565b97509195505063ffffffff169250849150612ad69050565b8060ff16601b14612aaf57612aaf614492565b6000612abb8989612f6a565b9050612ac860088961450e565b975091955090935085925050505b9250925092565b612af860405160408082019052606081526000602082015290565b600084515190506000612b0b828561450e565b90508560200151811115612b2857612b28866128fa836002614822565b60006001612b38866101006149d4565b612b4291906144be565b905086518281018783198251161781528151841115612b5f578382525b5096979650505050505050565b612b8760405160408082019052606081526000602082015290565b8251821115612b9557600080fd5b600084515190506000612ba8848361450e565b90508560200151811115612bc557612bc5866128fa836002614822565b60008087518051856020830101935080851115612be0578482525b505050602086015b60208610612c205780518252612bff60208361450e565b9150612c0c60208261450e565b9050612c196020876144be565b9550612be8565b60001960208790036101000a018019825116818451161790925250959695505050505050565b600082519050612c568383611d84565b506117248382612632565b60008060208301815b8451811015612c9f57815192508215612c8857506000949350505050565b602091820191612c98908261450e565b9050612c6a565b506001949350505050565b6000811560018114612e9157600160801b600160401b640100000000620100006101006010600460026000198b019081041790810417908104179081041790810417908104179081041790810417600101926040517ff8f9cbfae6cc78fbefe7cdc3a1793dfcf4f0e8bbd8cec470b6a28a7a5a3e1efd81527ff5ecf1b3e9debc68e1d9cfabc5997135bfb7a7a3938b7b606b5b4b3f2f1f0ffe60208201527ff6e4ed9ff2d6b458eadcdf97bd91692de2d4da8fd2d0ac50c6ae9a827252361660408201527fc8c0b887b0a8a4489c948c7f847c6125746c645c544c444038302820181008ff60608201527ff7cae577eec2a03cf3bad76fb589591debb2dd67e0aa9834bea6925f6a4a2e0e60808201527fe39ed557db96902cd38ed14fad815115c786af479b7e8324736353433727170760a08201527fc976c13bb96e881cb166a933a55e490d9d56952b8d4e801485467d236242260660c08201527f753a6d1b65325d0c552a4d1345224105391a310b29122104190a11030902010060e082015261010081016040527e818283848586878898a8b8c8d8e8f929395969799a9b9d9e9faaeb6bedeeff600160f81b8082880204818160ff0385015104600160ff1b86116101000201965060001985018516612e87576001870196505b5050505050611f11565b50600092915050565b6000612ea782600161450e565b83511015612ec75760405162461bcd60e51b815260040161084a90614a0e565b828281518110612ed957612ed961390a565b602001015160f81c9392505050565b6000612ef582600261450e565b83511015612f155760405162461bcd60e51b815260040161084a90614a0e565b60008260200184015160f01c949350505050565b6000612f3682600461450e565b83511015612f565760405162461bcd60e51b815260040161084a90614a0e565b60008260200184015160e01c949350505050565b6000612f7782600861450e565b83511015612f975760405162461bcd60e51b815260040161084a90614a0e565b60008260200184015160c01c949350505050565b6040518061016001604052806060815260200160006001600160401b0316815260200160001515815260200160608152602001600060070b8152602001600060070b815260200160008152602001600081526020016000815260200160006001600160401b03168152602001613040604051608081016040908152606080835260006020840181905291830182905282015290565b905290565b604051806101600160405280613065604051602081016040526060815290565b815260200160006001600160401b03168152602001600015158152602001613097604051602081016040526060815290565b81526020016130b0604051602081016040526060815290565b815260200160608152602001600060070b8152602001600060070b81526020016130eb60405160408082019052606081526000602082015290565b815260200161310b60405160408082019052606081526000602082015290565b815260200161304060405160408082019052606081526000602082015290565b604051806040016040528061315160405160408082019052606081526000602082015290565b8152602001600081525090565b6001600160401b0381165b82525050565b60208101610684828461315e565b805b8114610b4657600080fd5b80356106848161317d565b6000602082840312156131aa576131aa600080fd5b6000610de8848461318a565b60005b838110156131d15780820151838201526020016131b9565b50506000910152565b60006131ea826000815192915050565b8084526020840193506132018185602086016131b6565b601f01601f19169290920192915050565b801515613169565b6131698160070b90565b80613169565b6000608083018251848203855261324182826131da565b9150506020830151613256602086018261315e565b5060408301516132696040860182613212565b50606083015161327c6060860182613212565b509392505050565b6101608082528101613296818e6131da565b90506132a5602083018d61315e565b6132b2604083018c613212565b81810360608301526132c4818b6131da565b90506132d3608083018a61321a565b6132e060a083018961321a565b6132ed60c0830188613224565b6132fa60e0830187613224565b613308610100830186613224565b61331661012083018561315e565b818103610140830152613329818461322a565b9d9c50505050505050505050505050565b634e487b7160e01b600052604160045260246000fd5b601f19601f83011681018181106001600160401b03821117156133755761337561333a565b6040525050565b600061338b6000604051905090565b90506133978282613350565b919050565b60006001600160401b038211156133b5576133b561333a565b601f19601f83011660200192915050565b82818337506000910152565b60006133e56133e08461339c565b61337c565b90508281526020810184848401111561340057613400600080fd5b61327c8482856133c6565b600082601f83011261341f5761341f600080fd5b8135610de88482602086016133d2565b60006020828403121561344457613444600080fd5b81356001600160401b0381111561345d5761345d600080fd5b610de88482850161340b565b60006001600160a01b038216610684565b61317f81613469565b80356106848161347a565b600080604083850312156134a4576134a4600080fd5b60006134b08585613483565b92505060206134c18582860161318a565b9150509250929050565b602081016106848284613224565b61316981613469565b6020810161068482846134d9565b602080825281016106a781846131da565b6040810161350f8285613224565b6106a76020830184613212565b60008083601f84011261353157613531600080fd5b5081356001600160401b0381111561354b5761354b600080fd5b6020830191508360018202830111156123a1576123a1600080fd5b6000806020838503121561357c5761357c600080fd5b82356001600160401b0381111561359557613595600080fd5b6135a18582860161351c565b92509250509250929050565b600060408301825184820385526135c482826131da565b915050602083015161327c6020860182613212565b602080825281016106a781846135ad565b6001600160401b03811661317f565b8035610684816135ea565b60008060006060848603121561361c5761361c600080fd5b600061362886866135f9565b9350506020613639868287016135f9565b92505060408401356001600160401b0381111561365857613658600080fd5b6136648682870161340b565b9150509250925092565b63ffffffff8116613169565b60608101613688828661366e565b613695602083018561315e565b81810360408301526136a781846131da565b95945050505050565b60006101608301825184820385526136c882826131da565b91505060208301516136dd602086018261315e565b5060408301516136f06040860182613212565b506060830151848203606086015261370882826131da565b915050608083015161371d608086018261321a565b5060a083015161373060a086018261321a565b5060c083015161374360c0860182613224565b5060e083015161375660e0860182613224565b5061010083015161376b610100860182613224565b5061012083015161378061012086018261315e565b506101408301518482036101408601526136a7828261322a565b602080825281016106a781846136b0565b60006101608284031215611f1157611f11600080fd5b6000602082840312156137d6576137d6600080fd5b81356001600160401b038111156137ef576137ef600080fd5b610de8848285016137ab565b60408201815161380b8482613224565b5060208201516117246020850182613212565b6040810161068482846137fb565b6040808252810161383d81856131da565b90506106a76020830184613212565b634e487b7160e01b600052602260045260246000fd5b60028104600182168061387657607f821691505b602082108103611f1157611f1161384c565b60006138958385846133c6565b50500190565b6000610de8828486613888565b603281526000602082017f7468652066696c65636f696e206d6574686f642074686174207761732063616c8152711b1959081a5cc81b9bdd081a185b991b195960721b602082015291505b5060400190565b60208082528101610684816138a8565b634e487b7160e01b600052603260045260246000fd5b6000808335601e193685900301811261393b5761393b600080fd5b8084019250823591506001600160401b0382111561395b5761395b600080fd5b60208301925060018202360383131561397657613976600080fd5b509250929050565b600061068461398a8381565b90565b6139968361397e565b81546008840282811b60001990911b908116901990911617825550505050565b6000611adc81848461398d565b818110156114d9576139d66000826139b6565b6001016139c3565b601f821115611adc576139fc81600081815281906020902092915050565b6020601f85010481016020851015613a115750805b61149b6020601f8601048301826139c3565b826001600160401b03811115613a3b57613a3b61333a565b613a458254613862565b613a508282856139de565b6000601f831160018114613a845760008415613a6c5750858201355b600019600886021c1981166002860217865550613aea565b601f198416613a9e86600081815281906020902092915050565b60005b82811015613ac15788850135825560209485019460019092019101613aa1565b86831015613add57600019601f88166008021c19858a01351682555b6001600288020188555050505b50505050505050565b611adc838383613a23565b60008135610684816135ea565b60006001600160401b03835b81169019929092169190911792915050565b60006001600160401b038216610684565b613b4382613b29565b613b4e818354613b0b565b8255505050565b80151561317f565b6000813561068481613b55565b600068ff0000000000000000613b178460401b90565b6000811515610684565b613b9382613b80565b613b4e818354613b6a565b61317f8160070b90565b6000813561068481613b9e565b6000610684613bc761398a8460070b90565b60070b90565b613b4382613bb5565b60006fffffffffffffffff0000000000000000613b178460401b90565b613bfc82613bb5565b613b4e818354613bd6565b600081356106848161317d565b600060001983613b17565b613c288261397e565b613b4e818354613c14565b60008235607e1936849003018112613c4d57613c4d600080fd5b9190910192915050565b600069ff000000000000000000613b178460481b90565b613c7782613b80565b613b4e818354613c57565b8082613c8e8180613920565b613c99818386613af3565b50505050600181016020830180613caf81613afe565b9050613cbb8184613b3a565b505050600181016040830180613cd081613b5d565b9050613cdc8184613b8a565b505050600181016060830180613cf181613b5d565b905061149b8184613c6e565b6114d98282613c82565b8082613d138180613920565b613d1e818386613af3565b50505050600181016020830180613d3481613afe565b9050613d408184613b3a565b505050600181016040830180613d5581613b5d565b9050613d618184613b8a565b5050506002810160608301613d768185613920565b613d81818386613af3565b50505050600381016080830180613d9781613ba8565b9050613da38184613bcd565b5050506003810160a0830180613db881613ba8565b9050613dc48184613bf3565b5050506004810160c0830180613dd981613c07565b9050613de58184613c1f565b5050506005810160e0830180613dfa81613c07565b9050613e068184613c1f565b50505060068101610100830180613e1c81613c07565b9050613e288184613c1f565b50505060078101610120830180613e3e81613afe565b9050613e4a8184613b3a565b505050600881016101408301613e608185613c33565b61149b8184613cfd565b6114d98282613d07565b60006106848260601b90565b600061068482613e74565b613169613e9782613469565b613e80565b6000613ea88286613224565b602082019150613eb88285613e8b565b601482019150613ec88284613224565b506020019392505050565b803561068481613b55565b600060208284031215613ef357613ef3600080fd5b6000610de88484613ed3565b600060208284031215613f1457613f14600080fd5b6000610de884846135f9565b60408101613f2e828561315e565b6106a76020830184613224565b61020560f11b81526002016000613f528284613e8b565b50601401919050565b6000610684825190565b6000613f75826000815192915050565b60208301613f8281613f5b565b92506020821015613fa357613f9e600019836020036008021b90565b831692505b5050919050565b601881526000602082017f70726f706f73616c4964206e6f7420617661696c61626c650000000000000000815291505b5060200190565b6020808252810161068481613faa565b602781526000602082017f6d73672e73656e646572206e6565647320746f206265206d61726b6574206163815266746f722066303560c81b602082015291506138f3565b6020808252810161068481613ff1565b6000614055826000815192915050565b6140638185602086016131b6565b9290920192915050565b60006106a78284614045565b602a81526000602082017f706965636520636964206d757374206265206164646564206265666f726520618152697574686f72697a696e6760b01b602082015291506138f3565b6020808252810161068481614079565b603b81526000602082017f6465616c206661696c656420706f6c69637920636865636b3a2070726f76696481527f657220616c726561647920636c61696d65642074686973206369640000000000602082015291506138f3565b60208082528101610684816140d0565b601c81526000602082017f76657269666965645f6465616c20706172616d206d69736d617463680000000081529150613fda565b602080825281016106848161413a565b602981526000602082017f73746f726167652070726963652067726561746572207468616e2072657175658152681cdd08185b5bdd5b9d60ba1b602082015291506138f3565b602080825281016106848161417e565b602d81526000602082017f636c69656e7420636f6c6c61746572616c2067726561746572207468616e207281526c195c5d595cdd08185b5bdd5b9d609a1b602082015291506138f3565b60208082528101610684816141d4565b600c81526000602082016b24b73b30b634b21021a127a960a11b81529150613fda565b602080825281016106848161422e565b61426f826000815192915050565b6001600160401b038111156142865761428661333a565b6142908254613862565b61429b8282856139de565b6020601f8311600181146142d057600084156142b8578287015190505b600019600886021c1981166002860217865550614336565b601f1984166142ea86600081815281906020902092915050565b60005b8281101561430d57848901518255602094850194600190920191016142ed565b868310156143295784890151600019601f89166008021c191682555b6001600288020188555050505b505050505050565b602981526000602082017f6d73672e73656e646572206e6565647320746f2062652076657269667265672081526830b1ba37b91033181b60b91b602082015291506138f3565b602080825281016106848161433e565b6011815260006020820170446174614361702052656365697665642160781b81529150613fda565b6020808252810161068481614394565b60008082525b5060010190565b60006143e4826143cc565b91506106a78284614045565b60008082526001820191506106a78284614045565b60006144118284613224565b50602001919050565b60408101613f2e8285613224565b61316981613b29565b60c0810161443f828961315e565b61444c6020830188613224565b614459604083018761315e565b614466606083018661315e565b818103608083015261447881856131da565b905061448760a0830184614428565b979650505050505050565b634e487b7160e01b600052600160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b81810381811115610684576106846144a8565b600060001982036143d2576143d26144a8565b634e487b7160e01b600052601260045260246000fd5b600082614509576145096144e4565b500690565b80820180821115610684576106846144a8565b600061452d8260070b90565b91506145398360070b90565b925050818103677fffffffffffffff198112677fffffffffffffff82131715610684576106846144a8565b6000815190506106848161317d565b600081519050610684816135ea565b60006145906133e08461339c565b9050828152602081018484840111156145ab576145ab600080fd5b61327c8482856131b6565b600082601f8301126145ca576145ca600080fd5b8151610de8848260208601614582565b6000806000606084860312156145f2576145f2600080fd5b60006145fe8686614564565b935050602061460f86828701614573565b92505060408401516001600160401b0381111561462e5761462e600080fd5b613664868287016145b6565b602e81526000602082017f696e76616c6964206d616a20286578706563746564204d616a546167206f722081526d4d616a42797465537472696e672960901b602082015291506138f3565b602080825281016106848161463a565b601f81526000602082017f696e76616c6964206d616a20286578706563746564204d616a4172726179290081529150613fda565b6020808252810161068481614695565b602581526000602082017f696e76616c6964206d616a20286578706563746564204d616a556e7369676e6581526464496e742960d81b602082015291506138f3565b60208082528101610684816146d9565b601f81526000602082017f696e76616c6964206d616a20286578706563746564204d616a4f74686572290081529150613fda565b602080825281016106848161472b565b602481526000602082017f696e76616c6964206d616a20286578706563746564204d616a54657874537472815263696e672960e01b602082015291506138f3565b602080825281016106848161476f565b603581526000602082017f696e76616c6964206d616a20286578706563746564204d616a5369676e6564498152746e74206f72204d616a556e7369676e6564496e742960581b602082015291506138f3565b60208082528101610684816147c0565b81810280821583820485141761483a5761483a6144a8565b5092915050565b602581526000602082017f63616e6e6f742068616e646c6520686561646572732077697468206578747261815264203e20323760d81b602082015291506138f3565b6020808252810161068481614841565b600c81526000602082016b34b73b30b634b21031b137b960a11b81529150613fda565b6020808252810161068481614893565b80825b6001851115614905578086048111156148e4576148e46144a8565b60018516156148f257908102905b80026148fe8560011c90565b94506148c9565b94509492505050565b60008261491d575060016106a7565b8161492a575060006106a7565b8160018114614940576002811461494a57614977565b60019150506106a7565b60ff84111561495b5761495b6144a8565b8360020a915084821115614971576149716144a8565b506106a7565b5060208310610133831016604e8410600b84101617156149aa575081810a838111156149a5576149a56144a8565b6106a7565b6149b784848460016148c6565b925090508184048111156149cd576149cd6144a8565b0292915050565b60006106a7600019848461490e565b6014815260006020820173736c6963696e67206f7574206f662072616e676560601b81529150613fda565b60208082528101610684816149e356fea26469706673582212201b01dc0326e954f45b2120214245737e9936f175da312cd5e4a515286105e75a64736f6c63430008110033',
    sourceMap:
      '2642:9612:31:-:0;;;3748:49;;;;;;;;;-1:-1:-1;3772:5:31;:18;;-1:-1:-1;;;;;;3772:18:31;3780:10;3772:18;;;2642:9612;;;;;;',
    linkReferences: {}
  }
}
