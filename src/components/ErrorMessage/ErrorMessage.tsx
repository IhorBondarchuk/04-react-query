import css from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  error: string | null;
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
  return <p className={css.text}>{error}</p>;
}
