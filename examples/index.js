import propson, { convertPropsToFlatJson, convertPropsToNestedJson} from 'propson';

propson('examples/*.properties', 'tmp', true);

const arr = [
  'a=b',
  'c.d=e'
]

console.log('Flat:', convertPropsToFlatJson(arr));
console.log('Nested:', convertPropsToNestedJson(arr));
