type ModalTitleProps = {
    children: React.ReactNode;
};

export const ModalTitle = ({ children }: ModalTitleProps) => {
    return (
        <div className="flex flex-1 items-center justify-center p-3">
            {children}
        </div>
    );
};