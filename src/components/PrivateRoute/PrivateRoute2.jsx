import { useContext } from "react"
import { AuthContext } from "../Provider/Authprovider"
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'

const PrivateRoute2 = ({children}) => {

    const {user} = useContext(AuthContext)

    if(!user) {
        return children;
    }

    return <Navigate to="/" />
}

PrivateRoute2.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute2