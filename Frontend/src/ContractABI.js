export const ContractABI = [
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_user",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_lurl",
          "type": "string"
        }
      ],
      "name": "Convert_lurl_turl",
      "outputs": [
        {
          "internalType": "bytes3",
          "name": "",
          "type": "bytes3"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "bytes3",
          "name": "_turl",
          "type": "bytes3"
        }
      ],
      "name": "Correspond_lurl",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "string",
          "name": "_user",
          "type": "string"
        }
      ],
      "name": "get_turl_lurl",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        },
        {
          "internalType": "bytes3[]",
          "name": "",
          "type": "bytes3[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]