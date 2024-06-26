import {
  isBlank,
  StorageManager,
  DataCallback,
  setIPFSData,
  getIPFSData,
  setBEData,
  getBEData,
  loadWallet,
  createWallet,
  NuLinkHDWallet,
  verifyPassword,
  existDefaultAccount,
  getWalletDefaultAccount,
  Account
} from '@nulink_network/nulink-sdk'
import assert from 'assert-ts';

export const run = async () => {

    // Declaring and intializing the mnemonic and password variables.
    const password: string = "1";

    let nuLinkHDWallet: any = null;
    try {
      // after we created the wallet, we can loadWallet by password
      nuLinkHDWallet /* : NuLinkHDWallet | null */ = await loadWallet(password);
    } catch (error) {
      //first We create Alice wallet and account by password
      nuLinkHDWallet /* : NuLinkHDWallet */ = await createWallet(password);
      // assert(nuLinkHDWallet1)
    }
  
    assert(nuLinkHDWallet);
    nuLinkHDWallet = nuLinkHDWallet as NuLinkHDWallet;
  
    // assert(nuLinkHDWallet1 === nuLinkHDWallet)
  
    //also, We can verify whether the user's password is correct
    const correct: boolean = (await verifyPassword(password)) as boolean;
  
    assert(correct);
  
    // We can also determine if the user has created an account locally
    const hasAnAccountInLocal: boolean = await existDefaultAccount();
    assert(hasAnAccountInLocal);
  
    // we can get the account by user password that we have created
    const accountAlice: Account = (await getWalletDefaultAccount(
      password
    )) as Account;
    assert(accountAlice);
    
    // eslint-disable-next-line no-debugger
    debugger
    const dataCallback: DataCallback = { setData: setIPFSData, getData: getIPFSData }
    //Set the external storage used by the Pre process to IPFS (for example, encrypted files uploaded by users will be stored in this storage, and users can customize the storage).
    StorageManager.setDataCallback(dataCallback)
    console.log("StorageManager.dataCallback.setData.length: ", (StorageManager as any).dataCallback.setData.length);
    const buffer = Buffer.from("Hello world", 'utf-8')
    const cids: string[] = await StorageManager.setData([new Uint8Array(buffer)], null as any)
    console.log(`cids: ${cids}`)

    const fileData: Uint8Array | null | undefined /*| Buffer*/ = await StorageManager.getData(cids[0])
    console.log(`fileData: ${fileData}`)
    // eslint-disable-next-line no-debugger
    debugger
    const dataCallback2: DataCallback = { setData: setBEData, getData: getBEData }
    //Set the external storage used by the Pre process to IPFS (for example, encrypted files uploaded by users will be stored in this storage, and users can customize the storage).
    StorageManager.setDataCallback(dataCallback2)

    console.log("2 StorageManager.dataCallback.setData.length: ", (StorageManager as any).dataCallback.setData.length);
    const cids2: string[] = await StorageManager.setData([new Uint8Array(buffer)], accountAlice)
    console.log(`cids2: ${cids2}`)

    const fileIData2: Uint8Array | null | undefined /*| Buffer*/ = await StorageManager.getData(cids2[0])
    console.log(`fileData2 ${fileIData2}`)
    // eslint-disable-next-line no-debugger
    debugger
  }

