type GreetProps = {
    name?: String
}

export const Greet = (props: GreetProps) => {
  return (
        <div>Hello {props.name}</div>
    )
}

