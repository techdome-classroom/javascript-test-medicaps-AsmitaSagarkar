function longestSubstring(s) {
    let max = 0;
    let start = 0;
    let char = {};

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        if (char[currentChar] >= start) {
            start = char[currentChar] + 1;
        }

        char[currentChar] = end;
        max = Math.max(max, end - start + 1);
    }

    return max;
}

module.exports = { longestSubstring };



