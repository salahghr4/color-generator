import Values from 'values.js';

export const isValidColor = (color) => {
  try {
    new Values(color).all();
    return true;
  }
  catch {
    return false;
  }
} 


export const getRandomColor = () => {
  return `#${Math.random().toString(16).slice(2, 8)}`;
}

export function normalizeColor(color) {
  return new Values(color).hexString();
}