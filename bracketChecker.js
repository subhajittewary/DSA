function isBalancedBrackets(brackets) {
  if (brackets.length === 0) {
    console.log("Invalid input!!");
    return;
  }

  const stack = [];
  const bracketPairs = {
    ']': '[',
    '}': '{',
    ')': '('
  };

  for (let i = 0; i < brackets.length; i++) {
    const char = brackets[i];
    if (char === '[' || char === '{' || char === '(') {
      stack.push(char);
    } else if (Object.keys(bracketPairs).includes(char)) {
      if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
        console.log("Not balanced");
        return;
      }
    }
  }

  if (stack.length === 0) {
    console.log("Balanced");
  } else {
    console.log("Not balanced");
  }
}

// Example usage:
isBalancedBrackets("[[[]]][][]"); // Output: Balanced
isBalancedBrackets("[[[]]][]]");  // Output: Not balanced
isBalancedBrackets("");           // Output: Invalid input!!