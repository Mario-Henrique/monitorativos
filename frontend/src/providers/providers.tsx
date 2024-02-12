import { AtivoProvider } from '@/contexts/ativo';

export const Providers = ({ children }: {
    children: React.ReactNode}) => {
        return(
            <>
                <AtivoProvider>{children}</AtivoProvider>
            </>
        );
    };