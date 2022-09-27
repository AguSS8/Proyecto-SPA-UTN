export function Input(props) {
  let {name, type, placeholder} = props;
  const $input = document.createElement("input");
  $input.name = name;
  $input.type = type;
  $input.placeholder = placeholder;
  return $input;
}