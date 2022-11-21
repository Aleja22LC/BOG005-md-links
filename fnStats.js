const stats = (arrayProof) => {
    const objStats = {
      'Total': arrayProof.length,
      'Unique': new Set(arrayProof.map((element) => element.href)).size
    }
    return objStats
  }  
  
  const statsBrokens = (arrayProof) => {
    const broken = arrayProof.filter((links) => links.OK === 'fail').length;
    const total = {
      'Total': arrayProof.length,
      'Unique': new Set(arrayProof.map((element) => element.href)).size,
      'Broken': broken
    }
    return total
  }

module.exports = { 
   statsBrokens, stats
}