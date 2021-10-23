async function main() {
    const MyNFT = await ethers.getContractFactory("Essences")
  
    // Start deployment, returning a promise that resolves to a contract object
    const myNFT = await MyNFT.deploy('https://gateway.pinata.cloud/ipfs/')
    console.log("Contract deployed to address:", myNFT.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  