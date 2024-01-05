function isValid(s: string): boolean {
    
    const map = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    
    let stack: string[] = [];
    let result = true;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i]);
        } else {
            const pop = stack.pop();
            
            if (map[s[i]] !== pop) {
                result = false;
                break;
            }
        }
    }
    
    return stack.length === 0 && result;
    
};