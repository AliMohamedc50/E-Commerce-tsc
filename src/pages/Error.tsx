import { Link, useRouteError, isRouteErrorResponse} from "react-router-dom"

import { Container } from "react-bootstrap"

const Error = () => {
  const error: any = useRouteError()
  let errorStatus: number;
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorMessage = error.statusText;
  }else {
        errorStatus = 404;
    errorMessage = "Page not found";
  }

  return (
    <Container className="notFound">
        <h1>{error.status}</h1>
        <p>{error.statusText}</p>
        <Link to="/" replace={true}>
            How about going back to safety?
        </Link>
    </Container>
  )
}

export default Error
