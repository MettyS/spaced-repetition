import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import UserContext from '../../contexts/UserContext'

export default function PrivateRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        <UserContext.Consumer>
          {userContext => {
            // if the user exists
              if(!!userContext.user.id){
                return ( <Component {...componentProps} /> );
              }
              else {
                return (
                  <Redirect
                    to={{
                      pathname: userContext.user.idle ? '/login' : '/register',
                      state: { from: componentProps.location },
                    }}
                  />
                );
              }
            
          }
            
          }
        </UserContext.Consumer>
      )}
    />
  )
}
