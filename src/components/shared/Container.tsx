
interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

//export const Container = ({children, className = ""}: ContainerProps) => {
// REMOVE the code Below to Continue
export const Container = ({children, className: _className}: ContainerProps) => {

    return <div className={ 'mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-5 ${className}'}
    >{children}</div>;
};