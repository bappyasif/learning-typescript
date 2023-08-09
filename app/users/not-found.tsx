import React from 'react'

const NotFound = () => {
  return (
    <div>Requested user data is not found</div>
  )
}

export async function generateMetadata() {
  return {
    title: "User is not found!!",
  }
}

export default NotFound