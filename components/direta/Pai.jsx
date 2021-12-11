import Filho from "./Filho";

export default function Pai(props) {
  return (
    <div>
      <Filho nome="Gean" familia={props.familia} />
      <Filho nome="Gean" familia={props.familia} />
      <Filho {...props} nome="Gean" />
    </div>
  );
}
