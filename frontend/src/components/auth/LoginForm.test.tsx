import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import LoginForm from './LoginForm';
import theme from '../../theme/theme';
import userEvent from '@testing-library/user-event';

function renderLoginForm() {
    return render(
        <ThemeProvider theme={theme}>
            <LoginForm />
        </ThemeProvider>
    );
}

describe('LoginForm', () => {
    // SIGN IN FORM
    it('renders the sign-in form', () => {
        renderLoginForm();

        expect(
            screen.getByLabelText(/work email/i)
        ).toBeInTheDocument();

        expect(
            screen.getByLabelText(/^password/i)
        ).toBeInTheDocument();

        expect(
            screen.getByRole('button', { name: /^sign in$/i})
        ).toBeInTheDocument();
    });

    // HIDES PASSWORD BY DEFAULT
    it('hides the password by default', () => {
        renderLoginForm();

        const passwordInput = screen.getByLabelText(/^password/i);

        expect(passwordInput).toHaveAttribute('type', 'password');
    });

    // TOGGLES PASSWORD VISIBILITY
    it('toggles password visibility', async () => {
        const user = userEvent.setup();

        renderLoginForm();

        const passwordInput = screen.getByLabelText(/^password/i);
        const toggleButton = screen.getByRole('button', {
            name: /show password/i,
        });

        await user.click(toggleButton);

        expect(passwordInput).toHaveAttribute('type', 'text');
        
        await user.click(toggleButton);

        expect(passwordInput).toHaveAttribute('type', 'password');

    });
    
    // EMAIL INPUT
    it('accepts email input', async () => {
        const user = userEvent.setup();

        renderLoginForm();

        const emailInput = screen.getByLabelText(/work email/i);

        await user.type(emailInput, 'employee@example.com');

        expect(emailInput).toHaveValue('employee@example.com');
    });

    // PASSWORD INPUT
    it('accepts password input', async () => {
        const user = userEvent.setup();

        renderLoginForm();

        const passwordInput = screen.getByLabelText(/^password/i);

        await user.type(passwordInput, 'password123!');

        expect(passwordInput).toHaveValue('password123!');
    });

    // REQUIRED FIELDS
    it('requires email and password', () => {
        renderLoginForm();

        const emailInput = screen.getByLabelText(/work email/i);
        const passwordInput = screen.getByLabelText(/^password/i);
        
        expect(emailInput).toBeRequired();
        expect(passwordInput).toBeRequired();

        expect(emailInput).toBeInvalid();
        expect(passwordInput).toBeInvalid();
    });

    // AFTER SIGN IN
    it('displays feedback after sign in', async () => {
        const user = userEvent.setup();

        renderLoginForm();

        await user.type(
            screen.getByLabelText(/work email/i),
            'employee@example.com'
        );

        await user.type(
            screen.getByLabelText(/^password/i),
            'password123!'
        );

        await user.click(
            screen.getByRole('button', { name: /^sign in$/i })
        );
        
        // Haven't implemented backend yet, only testing existing placeholder feedback. Will replace when FastAPI is connected.
        expect(
            await screen.findByText(
                /authentication is not connected yet/i
            )
        ).toBeInTheDocument();
    });
});