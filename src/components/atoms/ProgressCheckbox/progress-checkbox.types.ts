export interface ProgressCheckboxProps {
  checked: boolean;
  onChange: (value: boolean, key: string) => void;
  text: string;
  checkboxKey: string;
}
