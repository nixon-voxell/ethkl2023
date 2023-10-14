const { expect } = require("chai");
const { ethers } = require("hardhat");

describe('MyNFT', function () {
    it('Should mint and transfer an NFT to someone', async function () {
        // const owner = '0x8B8cE9DA22b1A0bBeB9f134549aBE203dBb680CB'
        const recipient = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266' 
        const metadataURI = 'cid/test.png'

        const TiredLife = await ethers.getContractFactory('TiredLife');
        const tiredLife = await TiredLife.deploy(owner)
        console.log(tiredLife)
        await tiredLife.waitForDeployment()

        let balance = await tiredLife.balanceOf(recipient);
        expect(balance).to.equal(0);

        const newlyMintedToken = await tiredLife.payToMint(recipient, metadataURI, { value: ethers.parseEther('0.01') });
   
        await newlyMintedToken.wait();

        balance = await tiredLife.balanceOf(recipient);
        expect(balance).to.equal(1);

        expect(await tiredLife.isContentOwned(metadataURI)).to.equal(true);
    })

})