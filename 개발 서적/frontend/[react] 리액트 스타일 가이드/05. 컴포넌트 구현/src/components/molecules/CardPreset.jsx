import PrimaryButton from '../atoms/PrimaryButton';

const CardPreset = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <PrimaryButton label={props.linkLabel} handleCLick={props.handleClick} />
    </div>
  );
};

export default CardPreset;
