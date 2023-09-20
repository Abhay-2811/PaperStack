export const ContractData = {
  abi: [
    {
      inputs: [
        {
          internalType: 'address[]',
          name: '_auditors',
          type: 'address[]'
        },
        {
          internalType: 'uint256',
          name: 'reward',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'pages',
          type: 'uint256'
        },
        {
          internalType: 'string',
          name: 'PapersCid',
          type: 'string'
        }
      ],
      stateMutability: 'payable',
      type: 'constructor'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address'
        }
      ],
      name: 'OwnershipTransferred',
      type: 'event'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      name: 'assignedPages',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      name: 'auditors',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'data_cid',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address'
        }
      ],
      name: 'getAssignedPages',
      outputs: [
        {
          internalType: 'uint256[]',
          name: '',
          type: 'uint256[]'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'numPages',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'qty',
          type: 'uint256'
        }
      ],
      name: 'pledgeJob',
      outputs: [],
      stateMutability: 'payable',
      type: 'function'
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newOwner',
          type: 'address'
        }
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address payable',
          name: 'user',
          type: 'address'
        }
      ],
      name: 'validateJob',
      outputs: [],
      stateMutability: 'payable',
      type: 'function'
    }
  ],
  bytecode:
    '608060405273a9ab19add1f1f7f78465d386fc6e05275e057ef8600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060405162001d5d38038062001d5d83398181016040528101906200007e9190620005ae565b6200009e620000926200012660201b60201c565b6200012e60201b60201c565b823414620000e3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000da90620006bf565b60405180910390fd5b8360049080519060200190620000fb929190620001f2565b50826002819055508160038190555080600590816200011b919062000922565b505050505062000a09565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8280548282559060005260206000209081019282156200026e579160200282015b828111156200026d5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509160200191906001019062000213565b5b5090506200027d919062000281565b5090565b5b808211156200029c57600081600090555060010162000282565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200030482620002b9565b810181811067ffffffffffffffff82111715620003265762000325620002ca565b5b80604052505050565b60006200033b620002a0565b9050620003498282620002f9565b919050565b600067ffffffffffffffff8211156200036c576200036b620002ca565b5b602082029050602081019050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620003af8262000382565b9050919050565b620003c181620003a2565b8114620003cd57600080fd5b50565b600081519050620003e181620003b6565b92915050565b6000620003fe620003f8846200034e565b6200032f565b905080838252602082019050602084028301858111156200042457620004236200037d565b5b835b818110156200045157806200043c8882620003d0565b84526020840193505060208101905062000426565b5050509392505050565b600082601f830112620004735762000472620002b4565b5b815162000485848260208601620003e7565b91505092915050565b6000819050919050565b620004a3816200048e565b8114620004af57600080fd5b50565b600081519050620004c38162000498565b92915050565b600080fd5b600067ffffffffffffffff821115620004ec57620004eb620002ca565b5b620004f782620002b9565b9050602081019050919050565b60005b838110156200052457808201518184015260208101905062000507565b60008484015250505050565b6000620005476200054184620004ce565b6200032f565b905082815260208101848484011115620005665762000565620004c9565b5b6200057384828562000504565b509392505050565b600082601f830112620005935762000592620002b4565b5b8151620005a584826020860162000530565b91505092915050565b60008060008060808587031215620005cb57620005ca620002aa565b5b600085015167ffffffffffffffff811115620005ec57620005eb620002af565b5b620005fa878288016200045b565b94505060206200060d87828801620004b2565b93505060406200062087828801620004b2565b925050606085015167ffffffffffffffff811115620006445762000643620002af565b5b62000652878288016200057b565b91505092959194509250565b600082825260208201905092915050565b7f5472616e736163742065786163742072657761726420616d6f756e7400000000600082015250565b6000620006a7601c836200065e565b9150620006b4826200066f565b602082019050919050565b60006020820190508181036000830152620006da8162000698565b9050919050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200073457607f821691505b6020821081036200074a5762000749620006ec565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620007b47fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000775565b620007c0868362000775565b95508019841693508086168417925050509392505050565b6000819050919050565b600062000803620007fd620007f7846200048e565b620007d8565b6200048e565b9050919050565b6000819050919050565b6200081f83620007e2565b620008376200082e826200080a565b84845462000782565b825550505050565b600090565b6200084e6200083f565b6200085b81848462000814565b505050565b5b8181101562000883576200087760008262000844565b60018101905062000861565b5050565b601f821115620008d2576200089c8162000750565b620008a78462000765565b81016020851015620008b7578190505b620008cf620008c68562000765565b83018262000860565b50505b505050565b600082821c905092915050565b6000620008f760001984600802620008d7565b1980831691505092915050565b6000620009128383620008e4565b9150826002028217905092915050565b6200092d82620006e1565b67ffffffffffffffff811115620009495762000948620002ca565b5b6200095582546200071b565b6200096282828562000887565b600060209050601f8311600181146200099a576000841562000985578287015190505b62000991858262000904565b86555062000a01565b601f198416620009aa8662000750565b60005b82811015620009d457848901518255600182019150602085019450602081019050620009ad565b86831015620009f45784890151620009f0601f891682620008e4565b8355505b6001600288020188555050505b505050505050565b6113448062000a196000396000f3fe6080604052600436106100915760003560e01c8063c0a03b8111610059578063c0a03b811461017d578063c9e3540c146101ba578063e4e81490146101d6578063ee4bf42714610201578063f2fde38b1461021d57610091565b80631b8b444c146100965780634de6217d146100d3578063715018a6146100fe5780638da5cb5b146101155780638dbf100814610140575b600080fd5b3480156100a257600080fd5b506100bd60048036038101906100b891906109d0565b610246565b6040516100ca9190610a3e565b60405180910390f35b3480156100df57600080fd5b506100e8610285565b6040516100f59190610a68565b60405180910390f35b34801561010a57600080fd5b5061011361028b565b005b34801561012157600080fd5b5061012a61029f565b6040516101379190610a3e565b60405180910390f35b34801561014c57600080fd5b5061016760048036038101906101629190610aaf565b6102c8565b6040516101749190610b9a565b60405180910390f35b34801561018957600080fd5b506101a4600480360381019061019f9190610bbc565b61035f565b6040516101b19190610a68565b60405180910390f35b6101d460048036038101906101cf9190610c3a565b610390565b005b3480156101e257600080fd5b506101eb610536565b6040516101f89190610cf7565b60405180910390f35b61021b600480360381019061021691906109d0565b6105c4565b005b34801561022957600080fd5b50610244600480360381019061023f9190610aaf565b6107b9565b005b6004818154811061025657600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60035481565b61029361083c565b61029d60006108ba565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561035357602002820191906000526020600020905b81548152602001906001019080831161033f575b50505050509050919050565b6007602052816000526040600020818154811061037b57600080fd5b90600052602060002001600091509150505481565b6000805b60048054905081101561042e57600481815481106103b5576103b4610d19565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff160361041b576001915061042e565b808061042690610d77565b915050610394565b506001151581151514610476576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046d90610e0b565b60405180910390fd5b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905090508273ffffffffffffffffffffffffffffffffffffffff166108fc826003546002546104e89190610e5a565b6104f29190610e8b565b670de0b6b3a76400006105059190610ecd565b9081150290604051600060405180830381858888f19350505050158015610530573d6000803e3d6000fd5b50505050565b6005805461054390610f30565b80601f016020809104026020016040519081016040528092919081815260200182805461056f90610f30565b80156105bc5780601f10610591576101008083540402835291602001916105bc565b820191906000526020600020905b81548152906001019060200180831161059f57829003601f168201915b505050505081565b670de0b6b3a7640000341461060e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060590610fad565b60405180910390fd5b600a811115610652576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064990611019565b60405180910390fd5b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663aacc5a176040518163ffffffff1660e01b8152600401600060405180830381865afa1580156106c1573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906106ea9190611196565b905060005b828110156107b457600060016003544285858151811061071257610711610d19565b5b60200260200101516107249190610e5a565b61072e91906111df565b6107389190610ecd565b9050600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150506001900390600052602060002001600090919091909150555080806107ac90610d77565b9150506106ef565b505050565b6107c161083c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610830576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082790611282565b60405180910390fd5b610839816108ba565b50565b61084461097e565b73ffffffffffffffffffffffffffffffffffffffff1661086261029f565b73ffffffffffffffffffffffffffffffffffffffff16146108b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108af906112ee565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6109ad8161099a565b81146109b857600080fd5b50565b6000813590506109ca816109a4565b92915050565b6000602082840312156109e6576109e5610990565b5b60006109f4848285016109bb565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610a28826109fd565b9050919050565b610a3881610a1d565b82525050565b6000602082019050610a536000830184610a2f565b92915050565b610a628161099a565b82525050565b6000602082019050610a7d6000830184610a59565b92915050565b610a8c81610a1d565b8114610a9757600080fd5b50565b600081359050610aa981610a83565b92915050565b600060208284031215610ac557610ac4610990565b5b6000610ad384828501610a9a565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610b118161099a565b82525050565b6000610b238383610b08565b60208301905092915050565b6000602082019050919050565b6000610b4782610adc565b610b518185610ae7565b9350610b5c83610af8565b8060005b83811015610b8d578151610b748882610b17565b9750610b7f83610b2f565b925050600181019050610b60565b5085935050505092915050565b60006020820190508181036000830152610bb48184610b3c565b905092915050565b60008060408385031215610bd357610bd2610990565b5b6000610be185828601610a9a565b9250506020610bf2858286016109bb565b9150509250929050565b6000610c07826109fd565b9050919050565b610c1781610bfc565b8114610c2257600080fd5b50565b600081359050610c3481610c0e565b92915050565b600060208284031215610c5057610c4f610990565b5b6000610c5e84828501610c25565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610ca1578082015181840152602081019050610c86565b60008484015250505050565b6000601f19601f8301169050919050565b6000610cc982610c67565b610cd38185610c72565b9350610ce3818560208601610c83565b610cec81610cad565b840191505092915050565b60006020820190508181036000830152610d118184610cbe565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610d828261099a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610db457610db3610d48565b5b600182019050919050565b7f73656e6465722073686f756c642062652061756469746f720000000000000000600082015250565b6000610df5601883610c72565b9150610e0082610dbf565b602082019050919050565b60006020820190508181036000830152610e2481610de8565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610e658261099a565b9150610e708361099a565b925082610e8057610e7f610e2b565b5b828204905092915050565b6000610e968261099a565b9150610ea18361099a565b9250828202610eaf8161099a565b91508282048414831517610ec657610ec5610d48565b5b5092915050565b6000610ed88261099a565b9150610ee38361099a565b9250828201905080821115610efb57610efa610d48565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610f4857607f821691505b602082108103610f5b57610f5a610f01565b5b50919050565b7f5374616b652065786163746c79203120546f6b656e0000000000000000000000600082015250565b6000610f97601583610c72565b9150610fa282610f61565b602082019050919050565b60006020820190508181036000830152610fc681610f8a565b9050919050565b7f4d61782031302070616765732063616e20626520726571756573746564000000600082015250565b6000611003601d83610c72565b915061100e82610fcd565b602082019050919050565b6000602082019050818103600083015261103281610ff6565b9050919050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61107682610cad565b810181811067ffffffffffffffff821117156110955761109461103e565b5b80604052505050565b60006110a8610986565b90506110b4828261106d565b919050565b600067ffffffffffffffff8211156110d4576110d361103e565b5b602082029050602081019050919050565b600080fd5b6000815190506110f9816109a4565b92915050565b600061111261110d846110b9565b61109e565b90508083825260208201905060208402830185811115611135576111346110e5565b5b835b8181101561115e578061114a88826110ea565b845260208401935050602081019050611137565b5050509392505050565b600082601f83011261117d5761117c611039565b5b815161118d8482602086016110ff565b91505092915050565b6000602082840312156111ac576111ab610990565b5b600082015167ffffffffffffffff8111156111ca576111c9610995565b5b6111d684828501611168565b91505092915050565b60006111ea8261099a565b91506111f58361099a565b92508261120557611204610e2b565b5b828206905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061126c602683610c72565b915061127782611210565b604082019050919050565b6000602082019050818103600083015261129b8161125f565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006112d8602083610c72565b91506112e3826112a2565b602082019050919050565b60006020820190508181036000830152611307816112cb565b905091905056fea264697066735822122000f297fc077a462a11d542738cb363f5b95aa51e8a5eb2ece9e198402bfd63d064736f6c63430008120033'
}
