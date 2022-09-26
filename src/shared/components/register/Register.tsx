import { AppRegistrationRounded, Password } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, CircularProgress, TextField, Typography } from "@mui/material";
import { useState } from "react";
import * as yup from "yup";

const registerSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(8),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "As senhas digitadas devem coincidir."),
});

interface IRegisterProps {
    children: React.ReactNode;
}

export const Register: React.FC<IRegisterProps> = ({ children }) => {
    const [isRegistered, setIsRegistered] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleRegistrar = () => {
        setIsLoading(true);

        registerSchema
            .validate(
                {
                    email,
                    password,
                    confirmPassword,
                },
                { abortEarly: false },
            )
            .then(dadosValidados => {
                registrar(dadosValidados.email, dadosValidados.password);

                setIsLoading(false);
            })
            .catch((erros: yup.ValidationError) => {
                setIsLoading(false);

                erros.inner.forEach(erro => {
                    if (erro.path === "email") {
                        setEmailError(erro.message);
                    } else if (erro.path === "password") {
                        setPasswordError(erro.message);
                    } else if (erro.path === "confirmPassword") {
                        setConfirmPasswordError(erro.message);
                    }
                });
            });
    };

    const registrar = (email: string, password: string) => {};

    return (
        <Box width="100vw" height="100vh" display="flex" alignItems="center" justifyContent="center">
            <Card>
                <CardContent>
                    <Box display="flex" flexDirection="column" gap={2} width={250}>
                        <Typography>Identifique-se</Typography>

                        <TextField
                            label="Email"
                            type="email"
                            fullWidth
                            value={email}
                            disabled={isLoading}
                            onChange={evento => setEmail(evento.target.value)}
                            onKeyDown={() => setEmailError("")}
                            error={!!emailError}
                            helperText={emailError}
                        ></TextField>

                        <TextField
                            label="Senha"
                            type="password"
                            fullWidth
                            value={password}
                            disabled={isLoading}
                            onChange={evento => setPassword(evento.target.value)}
                            onKeyDown={() => setPasswordError("")}
                            error={!!passwordError}
                            helperText={passwordError}
                        ></TextField>

                        <TextField
                            label="Confirme a Senha"
                            type="password"
                            fullWidth
                            value={confirmPassword}
                            disabled={isLoading}
                            onChange={evento => setConfirmPassword(evento.target.value)}
                            onKeyDown={() => setConfirmPasswordError("")}
                            error={!!confirmPasswordError}
                            helperText={confirmPasswordError}
                        ></TextField>
                    </Box>
                </CardContent>

                <CardActions>
                    <Box width="100%" display="flex" justifyContent="center">
                        <Button
                            variant="contained"
                            disabled={isLoading}
                            onClick={handleRegistrar}
                            endIcon={isLoading ? <CircularProgress size={25} variant="indeterminate" /> : undefined}
                        >
                            Entrar
                        </Button>
                    </Box>
                </CardActions>
            </Card>
        </Box>
    );
};
