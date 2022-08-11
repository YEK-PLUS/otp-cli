import { Command } from 'commander';

const createProgram: () => Command = () => {
  const program = new Command();
  program.requiredOption('-t, --token <string>', 'OTP Token');
  return program;
};

export default createProgram;
