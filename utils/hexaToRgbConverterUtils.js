module.exports = {
    hexToRgb(hex) {
        const cleanHex = hex.startsWith('#') ? hex.slice(1) : hex;
 
    
        if (cleanHex.length === 3) {
            const r = parseInt(cleanHex[0] + cleanHex[0], 16);
            const g = parseInt(cleanHex[1] + cleanHex[1], 16);
            const b = parseInt(cleanHex[2] + cleanHex[2], 16);
            return `rgb(${r}, ${g}, ${b})`;
        } else if (cleanHex.length === 6) {
            const r = parseInt(cleanHex.substring(0, 2), 16);
            const g = parseInt(cleanHex.substring(2, 4), 16);
            const b = parseInt(cleanHex.substring(4, 6), 16);
            return `rgb(${r}, ${g}, ${b})`;
        } else {
            console.error("Invalid hex color format. Please use a 3-digit or 6-digit hex code.");
            return null;
        }
    }
}