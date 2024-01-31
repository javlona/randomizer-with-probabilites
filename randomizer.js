function getRandomOption(options) {
    if (!Array.isArray(options) || options.length === 0) {
        throw new Error("Options array is empty or not an array.");
    }

    let totalProbability = 0;
    for (let option of options) {
        if (typeof option.value === 'undefined' || typeof option.probability !== 'number') {
            throw new Error("Each option must have a 'value' and a 'probability' property.");
        }

        if (option.probability < 0 || option.probability > 1) {
            throw new Error("Probability must be a number between 0 and 1.");
        }

        totalProbability += option.probability;
    }

    if (Math.abs(totalProbability - 1) > 0.00001) {
        throw new Error("Total probability does not sum up to 1.");
    }

    // Generate a cryptographically strong pseudo-random number between 0 and 1
    const buffer = new Uint32Array(1);
    window.crypto.getRandomValues(buffer);
    const rand = buffer[0] / (0xffffffff + 1);

    let cumulativeProbability = 0;
    for (let i = 0; i < options.length; i++) {
        cumulativeProbability += options[i].probability;
        if (rand < cumulativeProbability) {
            return options[i].value;
        }
    }

    return options[options.length - 1].value;
}

// Example usage
function selectOption() {
             try {
        			let options = [
            		{ value: "Option 1", probability: 0.80 },
            		{ value: "Option 2", probability: 0.15 },
            		{ value: "Option 3", probability: 0.05 }
        			];

        			return getRandomOption(options);
    			} catch (error) {
        		console.error("Error:", error.message);
        		return null; // Return null or some error indication if there's an error
    			}
       }
 /* function test(times) {
   let result = [];
   for(let i = 0; i < times; i++){
    result.push(selectOption())
  }
  return result
 }
 
 console.log(test(20)) */
 
 function test(times) {
    let results = [];
    for (let i = 0; i < times; i++) {
        results.push(selectOption());
    }
    return results;
}

// Example of using the test function
let testResults = test(100); // Test the function 100 times
console.log(testResults);
