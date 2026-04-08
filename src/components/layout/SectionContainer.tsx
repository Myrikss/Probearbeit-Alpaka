const SectionContainer = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 ${className}`}>
      {children}
    </div>
  );
};
export default SectionContainer;