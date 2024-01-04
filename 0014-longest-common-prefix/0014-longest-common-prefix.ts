function longestCommonPrefix(strs: string[]): string {
    
    if (strs.length === 1) {
        return strs[0];
    }
    
    let result = "";
    
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        let check = false;
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] === char) {
                check = true;
            } else {
                check = false;
                break;
            }
        }
        
        if (check) {
            result += char;
        } else {
            break;
        }
    }
    
    return result;
    
    
};