import Link from './Link';

export type ClassicLinkProps = {
  label: string;
  to: string;
};

const ClassicLink = (props: ClassicLinkProps) => {
  return (
    <Link href={props.to} target="_blank">
      {props.label}
    </Link>
  );
};

export default ClassicLink;
