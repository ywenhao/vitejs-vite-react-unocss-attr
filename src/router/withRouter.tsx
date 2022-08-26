import type React from 'react'
import type { Location, NavigateFunction, Params } from 'react-router-dom'

type IRouterHistory = {
  push: NavigateFunction
  location: Location
  params: Readonly<Params<string>>
}

interface IRouterProps {
  history: IRouterHistory
}

function withRouter(Component: React.FC<IRouterProps>) {
  return function withRouterProps(props: Record<string, unknown>) {
    const IRouterProps: IRouterProps = {
      history: {
        push: useNavigate(),
        location: useLocation(),
        params: useParams(),
      },
    }
    return <Component {...props} {...IRouterProps} />
  }
}

export default withRouter
