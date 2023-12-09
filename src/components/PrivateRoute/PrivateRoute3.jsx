import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import PropTypes from 'prop-types'
import Swal from 'sweetalert2'
import { Navigate } from "react-router-dom";

const PrivateRoute3 = ({children}) => {
    const {user} = useContext(AuthContext)

    if(user) {
        return children;
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please login if you want to see product details',
          })
    }

    return <Navigate to="/" />
}

PrivateRoute3.propTypes = {
    children: PropTypes.node
}


export default PrivateRoute3