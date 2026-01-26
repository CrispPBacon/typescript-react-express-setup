import { login } from './services/auth.service';

const { username, password } = login('crisppbacon', 'Blacks132');

console.log(username, password, 'sup');
