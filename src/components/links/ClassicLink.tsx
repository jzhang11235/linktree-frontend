export type ClassicLinkProps = {
  label: string;
  to: string;
};

const ClassicLink = (props: ClassicLinkProps) => {
  return <a href={props.to}>{props.label}</a>;
};

export default ClassicLink;
