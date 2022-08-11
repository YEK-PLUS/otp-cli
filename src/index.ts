import './opt';
import createProgram from './program';
import checkToken from './token';

const program = createProgram();
checkToken(program);
program.parse();
