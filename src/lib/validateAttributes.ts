export function validateAttributes(attributes: { [key: string]: number }) {
    // Define the cost table for attribute values
    const costTable: Record<number, number> = {
      8: 0,
      9: 1,
      10: 2,
      11: 3,
      12: 4,
      13: 5,
      14: 7,
      15: 9,
    };
    
    const values = Object.values(attributes);
    // Check if all attributes are between 8 and 15
    const allValidRange = values.every(attr => attr >= 8 && attr <= 15);
    if (!allValidRange) {
      return {valid: false, reason: "All attributes must be between 8 and 15."};
    }

    // Calculate total cost
    const totalCost = values.reduce((sum, attr) => sum + (costTable[attr] || 0), 0);

    // Check if total cost exceeds 27
    if (totalCost > 27) {
        return {valid: false, reason: "Total attribute cost exceeds 27 points."};
    }

    return {valid: true};
  }