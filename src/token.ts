import { Command } from 'commander';
import OTP from 'otp-client';

const app = (program: Command) => {
  program.action(async ({ token: _token }: { token: string }) => {
    const token = _token.split(' ').join('');
    const otp = new OTP(token);
    const code = otp.getToken();
    // eslint-disable-next-line no-console
    console.log(code);
  });
};

export default app;
