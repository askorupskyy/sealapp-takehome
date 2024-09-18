export const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div className="space-y-8 max-w-[480px] shadow-md shadow-amber-800 rounded-md container lg:container-none py-12 bg-white z-10 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
      {props.children}
    </div>
  );
};
