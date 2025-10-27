import assert from 'assert'
import { type DeployFunction } from 'hardhat-deploy/types'

const contractName = 'yourtokenname'

const deploy: DeployFunction = async (hre) => {
    const { getNamedAccounts, deployments } = hre

    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()

    assert(deployer, 'Missing named deployer account')

    console.log(`Network: ${hre.network.name}`)
    console.log(`Deployer: ${deployer}`)

    // Fetch LayerZero's EndpointV2 address for the current network
    const endpointV2Deployment = await hre.deployments.get('EndpointV2')

    // Deploy yourtokenname
    const { address } = await deploy(contractName, {
        from: deployer,
        args: [
            'yourtokenname', // Token name
            'ROOTS',         // Token symbol
            endpointV2Deployment.address, // LayerZero's EndpointV2 address
            deployer,       // Owner/delegate address
        ],
        log: true,
        skipIfAlreadyDeployed: false,
    })

    console.log(`Deployed contract: ${contractName}, network: ${hre.network.name}, address: ${address}`)
}

deploy.tags = [contractName]

export default deploy