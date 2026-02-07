import { useInternetIdentity } from '@/hooks/useInternetIdentity';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { LogIn, LogOut, Loader2, AlertCircle } from 'lucide-react';

interface AuthControlsProps {
  variant?: 'default' | 'ghost' | 'outline';
  className?: string;
  showPrincipal?: boolean;
}

export default function AuthControls({ 
  variant = 'default', 
  className = '',
  showPrincipal = false 
}: AuthControlsProps) {
  const { login, clear, loginStatus, identity, isLoggingIn, isLoginError } = useInternetIdentity();

  const isAuthenticated = loginStatus === 'success' && identity;

  const handleLogin = () => {
    login();
  };

  const handleLogout = () => {
    clear();
  };

  const getPrincipalShort = () => {
    if (!identity) return '';
    const principal = identity.getPrincipal().toString();
    return `${principal.slice(0, 5)}...${principal.slice(-3)}`;
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {isLoginError && (
        <Alert variant="destructive" className="mb-2">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Failed to sign in. Please try again.
          </AlertDescription>
        </Alert>
      )}
      
      {!isAuthenticated ? (
        <Button
          variant={variant}
          onClick={handleLogin}
          disabled={isLoggingIn}
          className="gap-2"
        >
          {isLoggingIn ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Signing in...
            </>
          ) : (
            <>
              <LogIn className="h-4 w-4" />
              Sign in
            </>
          )}
        </Button>
      ) : (
        <div className="flex flex-col gap-2">
          {showPrincipal && (
            <div className="text-xs text-muted-foreground">
              {getPrincipalShort()}
            </div>
          )}
          <Button
            variant={variant}
            onClick={handleLogout}
            className="gap-2"
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </Button>
        </div>
      )}
    </div>
  );
}
