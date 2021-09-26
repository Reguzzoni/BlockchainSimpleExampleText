function Blockchain() {
        this.chain=[];
        this.pendingTranscations=[];
}

Blockchain.prototype.createNewBlock=function(nonce,prevBlockhash,hash) {
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.pendingTranscations,
        nonce: nonce,
        prevBlockhash: prevBlockhash,
        hash: hash,
    };

    this.pendingTranscations=[];
    this.chain.push(newBlock);
    return newBlock;
}

export default Blockchain;