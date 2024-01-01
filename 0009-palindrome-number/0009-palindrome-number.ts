function isPalindrome(x: number): boolean {
    const str = String(x);
    let front = 0;
    let rear = str.length - 1;
    
    while (str.length / 2 > front) {
        if (str[front] === str[rear]) {
            front++;
            rear--;
        } else {
            return false;
        }
    }
    
    return true;
};