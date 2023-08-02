type Props = {
  label: string;
};

const Empty = (props: Props) => {
  return (
    <div className="flex h-full flex-col items-center justify-center p-20">
      <p className="text-center text-sm text-muted-foreground">{props.label}</p>
    </div>
  );
};

export default Empty;
