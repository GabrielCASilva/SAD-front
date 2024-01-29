import { Title } from "../../components/Titles";

export default function DetailLayout(props) {
  const { title, leftColumn, rightColumn } = props;
  return (
    <>
      <Title>{title}</Title>
      <div className="flex h-100 gap-2-4rem min-h-0">
        <div className="lex column w-100 gap-1-4rem" style={{maxWidth: "26.5rem"}}>
          {leftColumn}
        </div>
        <div className="flex column w-100">
          {rightColumn}
        </div>
      </div>
    </>
  )
}