type Props = {
  children: React.ReactNode;
};

const LandingLayout = (props: Props) => {
  return (
    <main className="h-full overflow-auto bg-neutral-800">
      <div className="mx-auto h-full w-full max-w-screen-xl">
        {props.children}
      </div>
    </main>
  );
};

export default LandingLayout;
