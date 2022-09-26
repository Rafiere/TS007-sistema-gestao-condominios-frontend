import "./shared/forms/TraducoesYup";
import { Register } from "./shared/components/register/Register";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import { AuthProvider } from "./shared/contexts/AuthContext";

export const App = () => {
    return (
        <AuthProvider>
            <AppThemeProvider>
                <Register>
                    <></>
                </Register>
            </AppThemeProvider>
        </AuthProvider>
    );
};

export default App;
