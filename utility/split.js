export function split(numStr) {
    // Always work with a string, easier for substrings
    numStr = numStr.toString();
    const n = numStr.length;
    const results = [];

    // The 3 split points (i, j, k) must split the number into 4 non-empty parts.
    // i: end of first part, j: end of second, k: end of third
    for (let i = 1; i <= n - 3; i++) {
        for (let j = i + 1; j <= n - 2; j++) {
            for (let k = j + 1; k <= n - 1; k++) {
                const part1 = Number(numStr.slice(0, i));
                
                let strPart2 = numStr.slice(i, j);
                if (strPart2.startsWith('0') && strPart2.length > 1) continue;
                const part2 = Number(strPart2);

                let strPart3 = numStr.slice(j, k);
                if (strPart3.startsWith('0') && strPart3.length > 1) continue;
                const part3 = Number(strPart3);

                let strPart4 = numStr.slice(k);
                if (strPart4.startsWith('0') && strPart4.length > 1) continue;
                const part4 = Number(strPart4);

                results.push([part1, part2, part3, part4]);
            }
        }
    }

    return results;
}
