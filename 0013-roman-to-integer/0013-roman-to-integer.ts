function romanToInt(s: string): number {
    const romanMap = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    };
    
    let result = 0;
    let i = s.length - 1;
    
    while(i >= 0) {
        const str = s[i-1] + s[i];
        
        if (romanMap[str]) {
            result = result + romanMap[str];
            i = i - 1;
        } else {
            result = result + romanMap[s[i]];
        }
        i = i - 1;
    }
    
    return result;
};