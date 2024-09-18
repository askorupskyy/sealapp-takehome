export const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return <div className="space-y-8 container py-12">{props.children}</div>;
};
