interface IProps {
  to: string
}
function Redirect({ to }: IProps) {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(to, { replace: true })
  })
  return null
}

export default Redirect
